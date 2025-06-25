import express, { Express } from 'express'

// Import configuration modules
import { setupRoutes } from '#root/src/config/setupRoutes.js'
import { startServer } from '#root/src/config/listen.js'
import { setupMiddlewares, corsOptions } from '#root/src/config/middlewares.js'
import { env } from '#config/env/index.js'

interface CreateAppParams<T> {
  models: T // You should replace 'any' with specific model types
}

export const createApp = async <T>({ models }: CreateAppParams<T>): Promise<void> => {
  // Create Express application
  const app: Express = express()

  // Setup middlewares
  setupMiddlewares({ app })

  if (env.isDevelopment) {
    console.log('* Cors origins:', corsOptions.origin)
  }

  // Setup routes
  setupRoutes({ app, models })

  // Start server
  startServer({ app })
}