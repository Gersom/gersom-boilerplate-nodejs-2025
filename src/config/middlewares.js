import { json, urlencoded } from 'express'
import cors from 'cors'
import morgan from 'morgan'
import { env } from '#config/env.js'
// import cookieParser from 'cookie-parser'
// import helmet from 'helmet'

const generateOrigin = () => {
  try {
    if (env.isProduction) return JSON.parse(env.ALLOWED_PROD_ORIGINS)
    else return JSON.parse(env.ALLOWED_DEV_ORIGINS)
  } catch {
    if (env.isProduction) return env.ALLOWED_PROD_ORIGINS
    else return env.ALLOWED_DEV_ORIGINS
  }
}

const corsOptions = {
  origin: generateOrigin(),
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Origin', 'X-Requested-With', 'Content-Type', 'Accept', 'Authorization'],
  credentials: false
}

if (env.isDevelopment) {
  console.log('* CORS origins:', corsOptions.origin)
}

export const setupMiddlewares = ({ app }) => {
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
