import { Router } from 'express'

// Import all route files
import { createUserRouter } from './users/user.routes.js'
// import { createTagRouter } from './tags/tag.routes.js'

export const createAdminRouter = ({ models }) => {
  const router = Router()

  // Setup routes for each module
  router.use('/users', createUserRouter({ models }))
  // router.use('/tags', createTagRouter({ models }))

  return router
}
