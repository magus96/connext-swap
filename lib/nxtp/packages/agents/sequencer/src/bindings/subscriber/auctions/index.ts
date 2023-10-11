import { spawn } from "child_process";

import { ExecStatus, createLoggingContext, jsonifyError } from "@connext/nxtp-utils";

import { getContext } from "../../../sequencer";
import { Message, MessageType } from "../../../lib/entities";

export const bindSubscriber = async (queueName: string) => {
  const {
    logger,
    config,
    adapters: { cache, mqClient },
  } = getContext();
  const { requestContext, methodContext } = createLoggingContext(bindSubscriber.name, undefined, "");
  logger.info("Binding subscriber for queue", requestContext, methodContext, { queue: queueName });
  try {
    // Spawn job handler
    mqClient.handle(queueName, async function (msg) {
      try {
        const termSignals: NodeJS.Signals[] = ["SIGTERM", "SIGINT"];
        const message: Message = msg.body as Message;

        // No ack and requeue if message has no trasfer id
        if (!message.transferId) {
          logger.error("Message has no transfer ID", requestContext, methodContext, undefined, {
            queue: queueName,
            message: msg,
          });
          return;
        }

        requestContext.transferId = message.transferId;

        /// Mark - Executer
        // if message.transferId, then call executer with it's type either Fast or Slow
        logger.debug("Spawning executer for transfer", requestContext, methodContext, msg.body);
        const child = spawn(process.argv[0], ["dist/executer.js", message.transferId, message.type], {
          timeout: config.messageQueue.executerTimeout,
        });
        logger.info("Spawned child", requestContext, methodContext, child);
        child.on("spawn", async () => {
          logger.info("Child Spawn Event", requestContext, methodContext, {
            transferId: message.transferId,
          });
        });
        child.on("error", async (err) => {
          logger.info("Child error", requestContext, methodContext, {
            transferId: message.transferId,
            error: err,
          });
        });

        child.stdout.on("data", (data) => {
          console.log(`${data}`);
        });

        child.stderr.on("data", (data) => {
          console.log(`${data}`);
        });

        child.on("exit", async (code, signal) => {
          logger.debug("Executer exited", requestContext, methodContext, {
            transferId: message.transferId,
            code: code,
            signal: signal,
          });
          if ((code == null || code == 0) && (signal == null || termSignals.includes(signal))) {
            // ACK on success
            // Validate transfer is sent to relayer before ACK
            const dataCache = message.type === MessageType.ExecuteFast ? cache.auctions : cache.executors;
            const status = await dataCache.getExecStatus(message.transferId);
            const task = await dataCache.getMetaTxTask(message.transferId);
            if ((task?.taskId && status == ExecStatus.Sent) || status == ExecStatus.Completed) {
              msg.ack();
              logger.info("Transfer ACKed", requestContext, methodContext, {
                transferId: message.transferId,
                status,
              });
            } else {
              msg.reject();
              logger.info("Transfer Rejected", requestContext, methodContext, {
                transferId: message.transferId,
                status,
              });
            }
            if (message.type === MessageType.ExecuteFast) {
              await cache.auctions.pruneAuctionData(message.transferId);
              await cache.auctions.setExecStatus(message.transferId, ExecStatus.None);
            } else {
              await cache.executors.pruneExecutorData(message.transferId);
            }
          } else {
            // No ack and requeue if child exits with error
            if (message.type === MessageType.ExecuteFast) {
              await cache.auctions.setExecStatus(message.transferId, ExecStatus.None);
            }
            msg.reject();
            logger.info("Error executing transfer. Message dropped", requestContext, methodContext, {
              transferId: message.transferId,
            });
          }
        });
      } catch (error: any) {
        logger.error("Error for message!", requestContext, methodContext, jsonifyError(error as Error), {
          queue: queueName,
          message: msg,
        });
      }
    });
  } catch (e: unknown) {
    logger.error("Error while binding subscriber", requestContext, methodContext, jsonifyError(e as Error));
    mqClient.close();
  }
};
