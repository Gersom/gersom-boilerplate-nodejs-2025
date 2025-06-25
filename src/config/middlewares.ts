import { Express, json, urlencoded } from 'express'
import cors, { CorsOptions } from 'cors'
import morgan from 'morgan'
import { env } from '#root/src/config/env/index.js'
// import cookieParser from 'cookie-parser'
// import helmet from 'helmet'

const generateOrigin = (): string | string[] => {
  try {
    if (env.isProduction && env.ALLOWED_PROD_ORIGINS) {
      return JSON.parse(env.ALLOWED_PROD_ORIGINS)
    } else if (env.ALLOWED_DEV_ORIGINS) {
      return JSON.parse(env.ALLOWED_DEV_ORIGINS)
    }
    return []
  } catch {
    if (env.isProduction && env.ALLOWED_PROD_ORIGINS) {
      return env.ALLOWED_PROD_ORIGINS
    } else if (env.ALLOWED_DEV_ORIGINS) {
      return env.ALLOWED_DEV_ORIGINS
    }
    return []
  }
}

export const corsOptions: CorsOptions = {
  origin: generateOrigin(),
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Origin', 'X-Requested-With', 'Content-Type', 'Accept', 'Authorization'],
  credentials: false
}

interface SetupMiddlewaresConfig {
  app: Express
}

export const setupMiddlewares = ({ app }: SetupMiddlewaresConfig): void => {
  app.use(cors(corsOptions))

  // Additional security
  // app.use(helmet());

  if (env.isDevelopment) {
    app.use(morgan('dev'))
  }

  // // Cookie parser
  // app.use(cookieParser())

  app.use(json())
  app.use(urlencoded({ extended: true }))
  app.disable('x-powered-by')
}