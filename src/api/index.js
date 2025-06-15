import { Router } from 'express'
import { createAdminRouter } from './admin/index.js'
// const routeAuth = require('./auth')
// const routeCommon = require('./common')

export const createApiRouter = ({ models }) => {
  const router = Router()

  router.use('/admin', createAdminRouter({ models }))
  // router.use('/common', routeCommon)
  // router.use('/auth', routeAuth)

  return router
}