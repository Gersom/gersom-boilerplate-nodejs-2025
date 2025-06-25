import express, { Express, Request, Response, NextFunction } from 'express'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'
import { createApiRouter } from '#api/index.js'
import errorHandler from '#middleware/errorHandler.js'
import { NotFoundError } from '#utils/apiErrors.js'

// Get __dirname equivalent in ESM
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

interface SetupRoutesConfig {
  app: Express
  models: any // Replace 'any' with your specific models type
}

export const setupRoutes = ({ app, models }: SetupRoutesConfig): void => {
  // Define API routes
  app.use('/api', createApiRouter({ models }))

  // Static file serving
  app.use('/storage', express.static(join(__dirname, '..', 'storage')))

  // Serve favicon.ico
  app.get('/favicon.ico', (_req: Request, res: Response) => {
    res.sendFile(join(__dirname, '..', 'storage', 'favicon.ico'))
  })

  // Chrome DevTools
  app.use('/.well-known/appspecific/com.chrome.devtools.json', (_req: Request, res: Response) => {
    res.status(200).json({})
  })

  // Root route
  app.get('/', (_req: Request, res: Response) => {
    res.status(200).send('HealtCheck OK 🚀 with TypeScript')
  })

  // Not Found Routes
  app.use((req: Request, _res: Response, next: NextFunction) => {
    const fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl
    next(new NotFoundError(`Unconfigured route: ${fullUrl}. Please review the documentation.`))
  })

  app.use(errorHandler)
}