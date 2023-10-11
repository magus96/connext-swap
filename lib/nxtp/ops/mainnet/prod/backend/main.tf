terraform {
  backend "s3" {
    bucket = "nxtp-terraform-mainnet-prod-backend"
    key    = "state/"
    region = "us-east-1"
  }
}

provider "aws" {
  region = var.region
}

# Fetch AZs in the current region
data "aws_availability_zones" "available" {}

data "aws_iam_role" "ecr_admin_role" {
  name = "erc_admin_role"
}


data "aws_route53_zone" "primary" {
  zone_id = "Z03634792TWUEHHQ5L0YX"
}

module "cartographer_db" {
  domain                = "cartographer"
  source                = "../../../modules/db"
  identifier            = "rds-postgres-cartographer-${var.environment}"
  instance_class        = "db.t4g.large"
  allocated_storage     = 20
  max_allocated_storage = 100


  name     = "connext" // db name
  username = var.postgres_user
  password = var.postgres_password
  port     = "5432"

  maintenance_window = "Mon:00:00-Mon:03:00"

  tags = {
    Environment = var.environment
    Domain      = var.domain
  }

  parameter_group_name = "default.postgres14"
  vpc_id               = module.network.vpc_id

  hosted_zone_id             = data.aws_route53_zone.primary.zone_id
  stage                      = var.stage
  environment                = var.environment
  db_security_group_id       = module.sgs.rds_sg_id
  db_subnet_group_subnet_ids = module.network.public_subnets
  publicly_accessible        = true
}

module "postgrest" {
  source                   = "../../../modules/service"
  region                   = var.region
  dd_api_key               = var.dd_api_key
  zone_id                  = data.aws_route53_zone.primary.zone_id
  execution_role_arn       = data.aws_iam_role.ecr_admin_role.arn
  cluster_id               = module.ecs.ecs_cluster_id
  vpc_id                   = module.network.vpc_id
  private_subnets          = module.network.private_subnets
  lb_subnets               = module.network.public_subnets
  internal_lb              = false
  docker_image             = "postgrest/postgrest:v9.0.0.20220107"
  container_family         = "postgrest"
  container_port           = 3000
  loadbalancer_port        = 80
  cpu                      = 1024
  memory                   = 2048
  instance_count           = 2
  timeout                  = 180
  environment              = var.environment
  stage                    = var.stage
  ingress_cdir_blocks      = ["0.0.0.0/0"]
  ingress_ipv6_cdir_blocks = []
  service_security_groups  = flatten([module.network.allow_all_sg, module.network.ecs_task_sg])
  cert_arn                 = var.certificate_arn
  container_env_vars       = local.postgrest_env_vars
  domain                   = var.domain
}


module "cartographer-routers-lambda-cron" {
  source              = "../../../modules/lambda"
  ecr_repository_name = "nxtp-cartographer"
  docker_image_tag    = var.cartographer_image_tag
  container_family    = "cartographer-routers"
  environment         = var.environment
  stage               = var.stage
  container_env_vars  = merge(local.cartographer_env_vars, { CARTOGRAPHER_SERVICE = "routers" })
  schedule_expression = "rate(1 minute)"
}

module "cartographer-transfers-lambda-cron" {
  source              = "../../../modules/lambda"
  ecr_repository_name = "nxtp-cartographer"
  docker_image_tag    = var.cartographer_image_tag
  container_family    = "cartographer-transfers"
  environment         = var.environment
  stage               = var.stage
  container_env_vars  = merge(local.cartographer_env_vars, { CARTOGRAPHER_SERVICE = "transfers" })
  schedule_expression = "rate(1 minute)"
}

module "cartographer-messages-lambda-cron" {
  source              = "../../../modules/lambda"
  ecr_repository_name = "nxtp-cartographer"
  docker_image_tag    = var.cartographer_image_tag
  container_family    = "cartographer-messages"
  environment         = var.environment
  stage               = var.stage
  container_env_vars  = merge(local.cartographer_env_vars, { CARTOGRAPHER_SERVICE = "messages" })
  schedule_expression = "rate(1 minute)"
}

module "cartographer-roots-lambda-cron" {
  source              = "../../../modules/lambda"
  ecr_repository_name = "nxtp-cartographer"
  docker_image_tag    = var.cartographer_image_tag
  container_family    = "cartographer-roots"
  environment         = var.environment
  stage               = var.stage
  container_env_vars  = merge(local.cartographer_env_vars, { CARTOGRAPHER_SERVICE = "roots" })
  schedule_expression = "rate(1 minute)"
}

module "cartographer-stableswap-lambda-cron" {
  source              = "../../../modules/lambda"
  ecr_repository_name = "nxtp-cartographer"
  docker_image_tag    = var.cartographer_image_tag
  container_family    = "cartographer-stableswap"
  environment         = var.environment
  stage               = var.stage
  container_env_vars  = merge(local.cartographer_env_vars, { CARTOGRAPHER_SERVICE = "stableswap" })
  schedule_expression = "rate(1 minute)"
}

module "network" {
  source      = "../../../modules/networking"
  cidr_block  = var.cidr_block
  environment = var.environment
  stage       = var.stage
  domain      = var.domain

}

module "sgs" {
  source         = "../../../modules/sgs/backend"
  environment    = var.environment
  stage          = var.stage
  domain         = var.domain
  ecs_task_sg_id = module.network.ecs_task_sg
  vpc_cdir_block = module.network.vpc_cdir_block
  vpc_id         = module.network.vpc_id
}


module "ecs" {
  source                  = "../../../modules/ecs"
  stage                   = var.stage
  environment             = var.environment
  domain                  = var.domain
  ecs_cluster_name_prefix = "nxtp-ecs"
  vpc_id                  = module.network.vpc_id
  private_subnets         = module.network.private_subnets
  public_subnets          = module.network.public_subnets
}
