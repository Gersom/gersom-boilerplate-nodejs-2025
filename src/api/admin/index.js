import { Router } from 'express'

// Import all route files
import usersRoutes from './users/user.routes.js'
import movementsRoutes from './movements/movement.routes.js'
import paymentMethodsRoutes from './payment-methods/payment-method.routes.js'
import tagsRoutes from './tags/tag.routes.js'
import recurringMovementsRoutes from './recurring-movements/recurring-movement.routes.js'
import recoveryCodesRoutes from './recovery-codes/recovery-code.routes.js'

const router = Router()

// Setup routes for each module
router.use('/users', usersRoutes)
router.use('/movements', movementsRoutes)
router.use('/payment-methods', paymentMethodsRoutes)
router.use('/tags', tagsRoutes)
router.use('/recurring-movements', recurringMovementsRoutes)
router.use('/recovery-codes', recoveryCodesRoutes)

export default router
