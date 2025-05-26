import express from 'express'

// Import configuration modules
import { initEnv } from '#config/env.js'
// import connectDatabase from '#config/database.js'
import setupRoutes from '#config/setupRoutes.js'
import startServer from '#config/listen.js'
import middlewares from '#config/middlewares.js'
import { printAuthor } from '#utils/author.js'
printAuthor()

const setupServer = async () => {
  // Initialize environment
  await initEnv()

  // Connect to database
  // await connectDatabase()

  // Create Express application
  const app = express()

  // Setup middlewares
  middlewares(app)

  // Setup routes
  setupRoutes(app)

  // Start server
  startServer(app)
}

setupServer()