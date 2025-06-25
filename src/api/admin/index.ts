import { Router } from 'express'
import { IStaticsMethods } from '#models/typeMethods.js'

// Import all route files
import { createUserRouter } from './users/user.routes.js'
// import { createTagRouter } from './tags/tag.routes.js'

interface CreateAdminRouterConfig<T> {
  models: {
    User: IStaticsMethods<T>
    // Add other models here as needed
    // Tag?: TagModel
  }
}

export const createAdminRouter = <T>({ models }: CreateAdminRouterConfig<T>): Router => {
  const router = Router()

  // Setup routes for each module
  router.use('/users', createUserRouter({ models }))
  // router.use('/tags', createTagRouter({ models }))

  return router
}