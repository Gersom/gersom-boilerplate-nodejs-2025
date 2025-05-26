import { Router } from 'express'
import routeAdmin from './admin/index.js'
// const routeAuth = require('./auth')
// const routeCommon = require('./common')

const router = Router()

router.use('/admin', routeAdmin)
// router.use('/common', routeCommon)
// router.use('/auth', routeAuth)

export default router