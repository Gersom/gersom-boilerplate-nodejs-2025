import { json, urlencoded } from 'express'
import cors from 'cors'
import morgan from 'morgan'
// import cookieParser from 'cookie-parser'
// import helmet from 'helmet'

import { serv } from '#config/env.js'

const middlewares = (app) => {
  const generateOrigin = () => {
    try {
      if (serv.isProduction) { return JSON.parse(serv.allowedProdOrigins) } else { return JSON.parse(serv.allowedDevOrigins) }
    } catch {
      if (serv.isProduction) { return serv.allowedProdOrigins } else { return serv.allowedDevOrigins }
    }
  }
  const corsOptions = {
    origin: generateOrigin(),
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Origin', 'X-Requested-With', 'Content-Type', 'Accept', 'Authorization'],
    credentials: true
  }

  if (serv.isDevelopment) {
    console.log('* CORS origins:', corsOptions.origin)
  }

  app.use(cors(corsOptions))

  // Additional security
  // app.use(helmet());

  if (serv.nodeEnv === 'development') {
    app.use(morgan('dev'))
  }

  // // Cookie parser
  // app.use(cookieParser())

  app.disable('x-powered-by')
  app.use(json())
  app.use(urlencoded({ extended: true }))
}

export default middlewares
