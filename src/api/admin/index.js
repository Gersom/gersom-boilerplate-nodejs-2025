import { Router } from 'express'

// Import all route files
import usersRoutes from './users/user.routes.js'

const router = Router()

// Setup routes for each module
router.use('/users', usersRoutes)

export default router
