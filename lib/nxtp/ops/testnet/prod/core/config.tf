locals {
  sequencer_env_vars = [
    { name = "SEQ_CONFIG", value = local.local_sequencer_config },
    { name = "ENVIRONMENT", value = var.environment },
    { name = "STAGE", value = var.stage },
    { name = "DD_PROFILING_ENABLED", value = "true" },
    { name = "DD_ENV", value = "${var.environment}-${var.stage}" },
  ]
  router_env_vars = [
    { name = "NXTP_CONFIG", value = local.local_router_config },
    { name = "ENVIRONMENT", value = var.environment },
    { name = "STAGE", value = var.stage },
    { name = "DD_PROFILING_ENABLED", value = "true" },
    { name = "DD_ENV", value = "${var.environment}-${var.stage}" },
  ]
  lighthouse_env_vars = {
    NXTP_CONFIG       = local.local_lighthouse_config,
    ENVIRONMENT       = var.environment,
    STAGE             = var.stage,
    DD_LOGS_ENABLED   = true,
    DD_ENV            = "${var.environment}-${var.stage}",
    DD_API_KEY        = var.dd_api_key,
    DD_LAMBDA_HANDLER = "packages/agents/lighthouse/dist/index.handler"
  }
  router_web3signer_env_vars = [
    { name = "WEB3_SIGNER_PRIVATE_KEY", value = var.router_web3_signer_private_key },
    { name = "WEB3SIGNER_HTTP_HOST_ALLOWLIST", value = "*" },
    { name = "ENVIRONMENT", value = var.environment },
    { name = "STAGE", value = var.stage },
    { name = "DD_ENV", value = "${var.environment}-${var.stage}" },
  ]
  sequencer_web3signer_env_vars = [
    { name = "WEB3_SIGNER_PRIVATE_KEY", value = var.sequencer_web3_signer_private_key },
    { name = "WEB3SIGNER_HTTP_HOST_ALLOWLIST", value = "*" },
    { name = "ENVIRONMENT", value = var.environment },
    { name = "STAGE", value = var.stage },
    { name = "DD_ENV", value = "${var.environment}-${var.stage}" },
  ]
  relayer_env_vars = [
    { name = "NXTP_CONFIG", value = local.local_relayer_config },
    { name = "ENVIRONMENT", value = var.environment },
    { name = "STAGE", value = var.stage },
    { name = "DD_PROFILING_ENABLED", value = "true" },
    { name = "DD_ENV", value = "${var.environment}-${var.stage}" },
  ]
  relayer_web3signer_env_vars = [
    { name = "WEB3_SIGNER_PRIVATE_KEY", value = var.relayer_web3_signer_private_key },
    { name = "WEB3SIGNER_HTTP_HOST_ALLOWLIST", value = "*" },
    { name = "ENVIRONMENT", value = var.environment },
    { name = "STAGE", value = var.stage },
    { name = "DD_ENV", value = "${var.environment}-${var.stage}" },
  ]
}

locals {
  local_sequencer_config = jsonencode({
    redis = {
      host = module.sequencer_cache.redis_instance_address,
      port = module.sequencer_cache.redis_instance_port
    },

    server = {
      adminToken = var.admin_token_router
    }

    logLevel = "debug"
    chains = {
      "1735356532" = {
        providers = ["https://optimism-goerli.blastapi.io/${var.blast_key}", "https://goerli.optimism.io"]
      }
      "1735353714" = {
        providers = ["https://eth-goerli.blastapi.io/${var.blast_key}", "https://rpc.ankr.com/eth_goerli"]
      }
      "9991" = {
        providers = ["https://rpc.ankr.com/polygon_mumbai", "https://polygon-testnet.blastapi.io/${var.blast_key}"]
      }
      "1734439522" = {
        providers = ["https://arb-goerli.g.alchemy.com/v2/${var.arbgoerli_alchemy_key_0}", "https://goerli-rollup.arbitrum.io/rpc"]
      }
    }
    web3SignerUrl = "https://${module.sequencer_web3signer.service_endpoint}"
    relayers = [
      {
        type   = "Gelato",
        apiKey = "${var.gelato_api_key}",
        url    = "https://relay.gelato.digital"
      },
      {
        type   = "Connext",
        apiKey = "${var.admin_token_relayer}",
        url    = "https://${module.relayer.service_endpoint}"
      }
    ]
    environment = var.stage
    database = {
      url = "postgresql://${var.postgres_user}:${var.postgres_password}@db.testnet.connext.ninja:5432/connext"
    }
    messageQueue = {
      connection = {
        uri = "amqps://${var.rmq_mgt_user}:${var.rmq_mgt_password}@${module.centralised_message_queue.aws_mq_amqp_endpoint}"
      }
      exchanges = [
        {
          name           = "sequencerX"
          type           = "direct"
          publishTimeout = 1000
          persistent     = true
          durable        = true
        }
      ]
      queues = [
        {
          name       = "1735356532"
          limit      = 1
          queueLimit = 10000
          subscribe  = true
        },
        {
          name       = "1735353714"
          limit      = 1
          queueLimit = 10000
          subscribe  = true
        },
        {
          name       = "9991"
          limit      = 1
          queueLimit = 10000
          subscribe  = true
        },
        {
          name       = "1734439522"
          limit      = 1
          queueLimit = 10000
          subscribe  = true
        },
      ]
      bindings = [
        {
          exchange = "sequencerX"
          target   = "1735356532"
          keys     = ["1735356532"]
        },
        {
          exchange = "sequencerX"
          target   = "1735353714"
          keys     = ["1735353714"]
        },
        {
          exchange = "sequencerX"
          target   = "9991"
          keys     = ["9991"]
        },
        {
          exchange = "sequencerX"
          target   = "1734439522"
          keys     = ["1734439522"]
        }
      ]
      executerTimeout = 300000
      publisher       = "sequencerX"
    }
  })

  local_router_config = jsonencode({
    redis = {
      host = module.router_cache.redis_instance_address,
      port = module.router_cache.redis_instance_port
    }
    logLevel     = "debug"
    sequencerUrl = "https://${module.sequencer_publisher.service_endpoint}"
    server = {
      adminToken = var.admin_token_router
      pub = {
        port = 8080
      }
      sub = {
        port = 8080
      }
      exec = {
        port = 8080
      }
    }
    chains = {
      "1735356532" = {
        providers = ["https://optimism-goerli.blastapi.io/${var.blast_key}", "https://goerli.optimism.io"]
      }
      "1735353714" = {
        providers = ["https://eth-goerli.blastapi.io/${var.blast_key}", "https://rpc.ankr.com/eth_goerli"]
      }
      "9991" = {
        providers = ["https://rpc.ankr.com/polygon_mumbai", "https://polygon-testnet.blastapi.io/${var.blast_key}"]
      }
      "1734439522" = {
        providers = ["https://arb-goerli.g.alchemy.com/v2/${var.arbgoerli_alchemy_key_0}", "https://goerli-rollup.arbitrum.io/rpc"]
      }
    }
    cartographerUrl = "https://postgrest.testnet.connext.ninja"
    web3SignerUrl   = "https://${module.router_web3signer.service_endpoint}"
    environment     = var.stage
    messageQueue = {
      uri = "amqps://${var.rmq_mgt_user}:${var.rmq_mgt_password}@${module.centralised_message_queue.aws_mq_amqp_endpoint}"
    }
  })

  local_lighthouse_config = jsonencode({
    logLevel = "debug"
    chains = {
      "1735356532" = {
        providers = ["https://optimism-goerli.blastapi.io/${var.blast_key}", "https://goerli.optimism.io"]
      }
      "1735353714" = {
        providers = ["https://eth-goerli.blastapi.io/${var.blast_key}", "https://rpc.ankr.com/eth_goerli"]
      }
      "9991" = {
        providers = ["https://rpc.ankr.com/polygon_mumbai", "https://polygon-testnet.blastapi.io/${var.blast_key}"]
      }
      "1734439522" = {
        providers = ["https://arb-goerli.g.alchemy.com/v2/${var.arbgoerli_alchemy_key_0}", "https://goerli-rollup.arbitrum.io/rpc"]
      }
    }
    gelatoApiKey = "${var.gelato_api_key}"
    environment  = var.stage
    database = {
      url = "postgresql://${var.postgres_user}:${var.postgres_password}@db.testnet.connext.ninja:5432/connext"
    }
    relayers = [
      {
        type   = "Gelato",
        apiKey = "${var.gelato_api_key}",
        url    = "https://relay.gelato.digital"
      },
      {
        type   = "Connext",
        apiKey = "${var.admin_token_relayer}",
        url    = "https://${module.relayer.service_endpoint}"
      }
    ]
    healthUrls = {
      prover    = "https://betteruptime.com/api/v1/heartbeat/${var.lighthouse_prover_heartbeat}"
      processor = "https://betteruptime.com/api/v1/heartbeat/${var.lighthouse_processor_heartbeat}"
      propagate = "https://betteruptime.com/api/v1/heartbeat/${var.lighthouse_propagate_heartbeat}"
    }
    hubDomain       = "1735353714"
    proverBatchSize = 1
  })

  local_relayer_config = jsonencode({
    redis = {
      host = module.relayer_cache.redis_instance_address,
      port = module.relayer_cache.redis_instance_port
    }
    server = {
      adminToken = var.admin_token_relayer
    }
    logLevel = "debug"
    chains = {
      "1735356532" = {
        providers = ["https://optimism-goerli.blastapi.io/${var.blast_key}", "https://goerli.optimism.io"]
      }
      "1735353714" = {
        providers = ["https://eth-goerli.blastapi.io/${var.blast_key}", "https://rpc.ankr.com/eth_goerli"]
      }
      "9991" = {
        providers = ["https://rpc.ankr.com/polygon_mumbai", "https://polygon-testnet.blastapi.io/${var.blast_key}"]
      }
      "1734439522" = {
        providers = ["https://arb-goerli.g.alchemy.com/v2/${var.arbgoerli_alchemy_key_0}", "https://goerli-rollup.arbitrum.io/rpc"]
      }
    }
    environment   = var.stage
    web3SignerUrl = "https://${module.relayer_web3signer.service_endpoint}"
  })
}
