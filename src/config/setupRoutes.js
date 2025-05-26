import { NotFoundError } from '#utils/apiErrors.js'
import errorHandler from '#middleware/errorHandler.js'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'
import express from 'express'
import routerApi from '#api/index.js'

// Get __dirname equivalent in ESM
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const setupRoutes = (app) => {
  // Define API routes
  app.use('/api', routerApi)

  // Static file serving
  app.use('/storage', express.static(join(__dirname, '..', 'storage')))

  // Chrome DevTools
  app.use('/.well-known/appspecific/com.chrome.devtools.json', (req, res) => {
    res.status(200).json({})
  })

  // Root route
  app.get('/', (req, res) => res.send('HealtCheck OK'))

  // Not Found Routes
  app.use((req, res, next) => {
    const fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl
    next(new NotFoundError(`Unconfigured route: ${fullUrl}. Please review the documentation.`))
  })

  app.use(errorHandler)
}

export default setupRoutes