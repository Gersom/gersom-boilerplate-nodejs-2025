// Define types for different database models
export type DatabaseType = 'mongodb' | 'mysql' | 'postgresql'

export type NodeEnvType = 'development' | 'production'

export type EnvConfig = {
  // Server
  NODE_ENV: NodeEnvType
  HOST: string
  PORT: string
  ALLOWED_PROD_ORIGINS: string
  ALLOWED_DEV_ORIGINS: string
  readonly isProduction: boolean
  readonly isDevelopment: boolean
  readonly address: string

  // Database
  DB_TYPE?: DatabaseType
  DB_URI?: string
  DB_NAME?: string
  DB_USER?: string
  DB_PASSWORD?: string

  // // JWT
  // JWT_ACCESS_EXPIRES_IN?: string
  // JWT_ACCESS_SECRET?: string
  // JWT_REFRESH_EXPIRES_IN?: string
  // JWT_REFRESH_SECRET?: string

  // // Auth
  // SALT_ROUNDS?: number

  // // Mailer
  // MAILER_EMAIL?: string
  // MAILER_PASSWORD?: string
}