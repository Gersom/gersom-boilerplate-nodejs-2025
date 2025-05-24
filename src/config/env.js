// const checkInteger = require('@utils/checkInteger')

const ENV_VARS = {
  // serv
  NODE_ENV: 'NODE_ENV',
  HOST: 'HOST',
  PORT: 'PORT',
  ALLOWED_PROD_ORIGINS: 'ALLOWED_PROD_ORIGINS',
  ALLOWED_DEV_ORIGINS: 'ALLOWED_DEV_ORIGINS'

  // db
  // DB_URI: 'DB_URI',
  // DB_NAME: 'DB_NAME',
  // DB_USER: 'DB_USER',
  // DB_PASSWORD: 'DB_PASSWORD',

  // jwt
  // JWT_ACCESS_EXPIRES_IN: 'JWT_ACCESS_EXPIRES_IN',
  // JWT_ACCESS_SECRET: 'JWT_ACCESS_SECRET',
  // JWT_REFRESH_EXPIRES_IN: 'JWT_REFRESH_EXPIRES_IN',
  // JWT_REFRESH_SECRET: 'JWT_REFRESH_SECRET',

  // auth
  // SALT_ROUNDS: 'SALT_ROUNDS',

  // mailer
  // MAILER_EMAIL: 'MAILER_EMAIL',
  // MAILER_PASSWORD: 'MAILER_PASSWORD'
}

const initEnv = () => {
  const missingVars = Object.values(ENV_VARS).filter(varName => !process.env[varName])

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
  if (serv.isDevelopment) msgServMode += 'development 💻'
  if (serv.isProduction) msgServMode += 'production 🏢'
  console.log(msgServMode)
}

const getEnvVar = (key) => process.env[ENV_VARS[key]]

const serv = {
  nodeEnv: getEnvVar('NODE_ENV'),
  get isProduction () { return this.nodeEnv === 'production' },
  get isDevelopment () { return this.nodeEnv === 'development' },
  host: getEnvVar('HOST'),
  port: getEnvVar('PORT'),
  get address () {
    return this.port ? `${this.host}:${this.port}` : this.host
  },
  allowedDevOrigins: getEnvVar('ALLOWED_DEV_ORIGINS'),
  allowedProdOrigins: getEnvVar('ALLOWED_PROD_ORIGINS')
}

// const db = {
//   uri: getEnvVar('DB_URI'),
//   name: getEnvVar('DB_NAME'),
//   user: getEnvVar('DB_USER'),
//   password: getEnvVar('DB_PASSWORD')
// }

// const jwt = {
//   secret: getEnvVar('JWT_ACCESS_SECRET'),
//   expiration: getEnvVar('JWT_ACCESS_EXPIRES_IN'),
//   refreshExpiration: getEnvVar('JWT_REFRESH_EXPIRES_IN'),
//   refreshSecret: getEnvVar('JWT_REFRESH_SECRET')
// }

// const auth = {
//   get saltRounds () {
//     return checkInteger(getEnvVar('SALT_ROUNDS'))
//   }
// }

// const mailer = {
//   email: getEnvVar('MAILER_EMAIL'),
//   password: getEnvVar('MAILER_PASSWORD')
// }

module.exports = {
  initEnv,
  serv
  // db,
  // jwt,
  // mailer,
  // auth
}