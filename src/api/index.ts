import { Router } from 'express'
import { createAdminRouter } from './admin'
// const routeAuth = require('./auth')
// const routeCommon = require('./common')
import { IStaticsMethods } from '#models/typeMethods.js'

interface CreateApiRouterConfig<T> {
  models: {
    User: IStaticsMethods<T>
    // Add other models here as needed
  }
}

export const createApiRouter = <T>({ models }: CreateApiRouterConfig<T>): Router => {
  const router = Router()

  router.use('/admin', createAdminRouter({ models }))
  // router.use('/common', routeCommon)
  // router.use('/auth', routeAuth)

  return router
}