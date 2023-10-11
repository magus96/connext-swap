import { existsSync, readFileSync } from "fs";

import { WatcherAlertsConfigSchema } from "@connext/nxtp-adapters-watcher";
import { ajv, TAssetDescription, TLogLevel } from "@connext/nxtp-utils";
import { Static, Type } from "@sinclair/typebox";

export const TChainConfig = Type.Object({
  assets: Type.Array(TAssetDescription), // Assets for which the router provides liquidity on this chain.
  providers: Type.Array(Type.String()),
  quorum: Type.Optional(Type.Integer({ minimum: 2 })), // Required quorum among RPC providers.
});

export const WatcherConfigSchema = Type.Intersect([
  Type.Object({
    chains: Type.Record(Type.String(), TChainConfig),
    logLevel: TLogLevel,
    mnemonic: Type.Optional(Type.String()),
    web3SignerUrl: Type.Optional(Type.String({ format: "uri" })),
    environment: Type.Union([Type.Literal("staging"), Type.Literal("production")]),
    hubDomain: Type.String(),
    server: Type.Object({
      adminToken: Type.String(),
      port: Type.Number(),
      host: Type.String(),
    }),
    interval: Type.Number({ minimum: 5000, maximum: 500_000 }),
  }),
  WatcherAlertsConfigSchema,
]);

export type WatcherConfig = Static<typeof WatcherConfigSchema>;

export const getEnvConfig = (): WatcherConfig => {
  let configJson: Record<string, any> = {};
  let configFile: any = {};

  try {
    configJson = JSON.parse(process.env.WATCHER_CONFIG || "");
  } catch (e: unknown) {
    console.info("No WATCHER_CONFIG exists, using config file and individual env vars");
  }
  try {
    let json: string;

    const path = process.env.WATCHER_CONFIG_FILE ?? "config.json";
    if (existsSync(path)) {
      json = readFileSync(path, { encoding: "utf-8" });
      configFile = JSON.parse(json);
    }
  } catch (e: unknown) {
    console.error("Error reading config file!");
    process.exit(1);
  }

  // Take the chain config and enforce default values as needed.
  const parsedChains: object = process.env.WATCHER_CHAIN_CONFIG
    ? JSON.parse(process.env.WATCHER_CHAIN_CONFIG)
    : configJson.chains
    ? configJson.chains
    : configFile.chains;
  // Default value enforcement.
  const chains: any = {};
  Object.entries(parsedChains).map(([key, values]) => {
    const { quorum, providers, ...rest } = values;
    chains[key] = {
      providers,
      // should always *at least* be 2 for providers
      quorum: quorum ?? 2,
      ...rest,
    };
  });

  const config: WatcherConfig = {
    mnemonic: process.env.WATCHER_MNEMONIC || configJson.mnemonic || configFile.mnemonic,
    web3SignerUrl: process.env.WATCHER_WEB3_SIGNER_URL || configJson.web3SignerUrl || configFile.web3SignerUrl,
    chains,
    logLevel: process.env.WATCHER_LOG_LEVEL || configJson.logLevel || configFile.logLevel || "info",
    environment: process.env.WATCHER_ENVIRONMENT || configJson.environment || configFile.environment || "production",
    hubDomain: process.env.WATCHER_HUB_DOMAIN || configJson.hubDomain || configFile.hubDomain,
    server: {
      adminToken: process.env.WATCHER_ADMIN_TOKEN || configJson.server?.adminToken || configFile.server?.adminToken,
      port: process.env.WATCHER_PORT || configJson.server?.port || configFile.server?.port || 8000,
      host: process.env.WATCHER_HOST || configJson.server?.host || configFile.server?.host || "0.0.0.0",
    },
    interval: process.env.WATCHER_INTERVAL || configJson.interval || configFile.interval || 15000,
    discordHookUrl: process.env.DISCORD_HOOK_URL || configJson.discordHookUrl || configFile.discordHookUrl,
    pagerDutyRoutingKey:
      process.env.PAGERDUTY_ROUTING_KEY || configJson.pagerDutyRoutingKey || configFile.pagerDutyRoutingKey,
    twilioNumber: process.env.TWILIO_NUMBER || configJson.twilioNumber || configFile.twilioNumber,
    twilioAccountSid: process.env.TWILIO_ACCOUNT_SID || configJson.twilioAccountSid || configFile.twilioAccountSid,
    twilioAuthToken: process.env.TWILIO_AUTH_TOKEN || configJson.twilioAuthToken || configFile.twilioAuthToken,
    twilioToPhoneNumbers:
      process.env.TWILIO_TO_PHONE_NUMBERS || configJson.twilioToPhoneNumbers || configFile.twilioToPhoneNumbers || [],
    telegramApiKey: process.env.TELEGRAM_API_KEY || configJson.telegramApiKey || configFile.telegramApiKey,
    telegramChatId: process.env.TELEGRAM_CHAT_ID || configJson.telegramChatId || configFile.telegramChatId,
    betterUptimeApiKey:
      process.env.BETTER_UPTIME_API_KEY || configJson.betterUptimeApiKey || configFile.betterUptimeApiKey,
    betterUptimeRequesterEmail:
      process.env.BETTER_UPTIME_REQUESTER_EMAIL ||
      configJson.betterUptimeRequesterEmail ||
      configFile.betterUptimeRequesterEmail,
  };

  const validate = ajv.compile(WatcherConfigSchema);

  const valid = validate(config);

  if (!valid) {
    throw new Error(validate.errors?.map((err: unknown) => JSON.stringify(err, null, 2)).join(","));
  }

  // enforce there are at *least* three providers
  const invalid = Object.entries(config.chains)
    .map(([key, value]) => {
      if (value.providers.length < 3) {
        return key;
      }
      return undefined;
    })
    .filter((x) => !!x);
  if (invalid.length) {
    throw new Error(`Need 3 providers per chain at minimum. Missing those for ${invalid.join(", ")}`);
  }

  return config;
};

let config: WatcherConfig | undefined;

/**
 * Caches and returns the environment config
 *
 * @returns The config
 */
export const getConfig = async (): Promise<WatcherConfig> => {
  if (!config) {
    config = getEnvConfig();
  }
  return config;
};
