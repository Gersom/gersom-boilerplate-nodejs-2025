import express from 'express'

// Import configuration modules
import { setupRoutes } from '#config/setupRoutes.js'
import { startServer } from '#config/listen.js'
import { setupMiddlewares } from '#config/middlewares.js'

export const createApp = async ({ models }) => {
  // Create Express application
  const app = express()

  // Setup middlewares
  setupMiddlewares({ app })

  // Setup routes
  setupRoutes({ app, models })

  // Start server
  startServer({ app })
}