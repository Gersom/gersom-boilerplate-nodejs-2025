require('./config/aliases')
const express = require('express')

// Import configuration modules
const { initEnv } = require('./config/env')
// const { connectDatabase } = require('./config/database')
const setupRoutes = require('./config/setupRoutes')
const startServer = require('./config/listen')
const middlewares = require('./config/middlewares')
const { printAuthor } = require('./utils/author')
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