const envs = process.env

export const ENV_VARS = {
  // Server
  NODE_ENV: 'NODE_ENV',
  HOST: 'HOST',
  PORT: 'PORT',
  ALLOWED_PROD_ORIGINS: 'ALLOWED_PROD_ORIGINS',
  ALLOWED_DEV_ORIGINS: 'ALLOWED_DEV_ORIGINS',

  // Database
  DB_TYPE: 'DB_TYPE',
  DB_URI: 'DB_URI',
  DB_NAME: 'DB_NAME',
  DB_USER: 'DB_USER',
  DB_PASSWORD: 'DB_PASSWORD',

  // // JWT
  // JWT_ACCESS_EXPIRES_IN: 'JWT_ACCESS_EXPIRES_IN',
  // JWT_ACCESS_SECRET: 'JWT_ACCESS_SECRET',
  // JWT_REFRESH_EXPIRES_IN: 'JWT_REFRESH_EXPIRES_IN',
  // JWT_REFRESH_SECRET: 'JWT_REFRESH_SECRET',

  // // Auth
  // SALT_ROUNDS: 'SALT_ROUNDS',

  // // Mailer
  // MAILER_EMAIL: 'MAILER_EMAIL',
  // MAILER_PASSWORD: 'MAILER_PASSWORD'
}

export const env = {
  // Server
  NODE_ENV: envs[ENV_VARS.NODE_ENV],
  HOST: envs[ENV_VARS.HOST],
  PORT: envs[ENV_VARS.PORT],
  ALLOWED_PROD_ORIGINS: envs[ENV_VARS.ALLOWED_PROD_ORIGINS],
  ALLOWED_DEV_ORIGINS: envs[ENV_VARS.ALLOWED_DEV_ORIGINS],
  get isProduction () { return this.NODE_ENV === 'production' },
  get isDevelopment () { return this.NODE_ENV === 'development' },
  get address () { return this.PORT ? `${this.HOST}:${this.PORT}` : this.HOST },

  // Database
  DB_TYPE: envs[ENV_VARS.DB_TYPE],
  DB_URI: envs[ENV_VARS.DB_URI],
  DB_NAME: envs[ENV_VARS.DB_NAME],
  DB_USER: envs[ENV_VARS.DB_USER],
  DB_PASSWORD: envs[ENV_VARS.DB_PASSWORD],

  // // JWT
  // JWT_ACCESS_EXPIRES_IN: envs[ENV_VARS.JWT_ACCESS_EXPIRES_IN],
  // JWT_ACCESS_SECRET: envs[ENV_VARS.JWT_ACCESS_SECRET],
  // JWT_REFRESH_EXPIRES_IN: envs[ENV_VARS.JWT_REFRESH_EXPIRES_IN],
  // JWT_REFRESH_SECRET: envs[ENV_VARS.JWT_REFRESH_SECRET],

  // // Auth
  // SALT_ROUNDS: envs[ENV_VARS.SALT_ROUNDS],

  // // Mailer
  // MAILER_EMAIL: envs[ENV_VARS.MAILER_EMAIL],
  // MAILER_PASSWORD: envs[ENV_VARS.MAILER_PASSWORD]
}

export const initEnv = () => {
  const missingVars = Object.values(ENV_VARS).filter(varName => !envs[varName])

  if (missingVars.length > 0) {
    console.error('ERROR:')
    console.info('The following environment variables are not configured in the .env file: ')
    console.error('* ' + missingVars.join('\n* '))
    console.info('Please ensure that the .env file contains the necessary configuration.')
    console.info('You can find an example in the .env.example file')
    process.exit(0)
  }

  console.log('STATUS:')
  console.log('* Environment variables loaded ✅')
  let msgServMode = '* Server mode: '
  if (env.isDevelopment) msgServMode += 'development 💻'
  if (env.isProduction) msgServMode += 'production 🏢'
  console.log(msgServMode)
}