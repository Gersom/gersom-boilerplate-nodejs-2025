const { DataError } = require('@utils/apiErrors')
const errorHandler = require('@middleware/errorHandler')
const { join } = require('path')
const express = require('express')
const routerApi = require('@api/index')

const setupRoutes = (app) => {
  // Define API routes
  app.use('/api', routerApi)

  // Static file serving
  app.use('/storage', express.static(join(__dirname, '..', 'storage')))

  // Root route
  app.get('/', (req, res) => res.send('HealtCheck OK'))

  // Not Found Routes
  app.use((req, res, next) => {
    const fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl
    next(new DataError('NOT_FOUND', `Unconfigured route: ${fullUrl}. Please review the documentation.`))
  })

  app.use(errorHandler)
}

module.exports = setupRoutes