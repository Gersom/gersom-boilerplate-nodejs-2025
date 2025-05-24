const { Router } = require('express')

const usersRoutes = require('./users/user.routes')
const router = Router()

router.use('/users', usersRoutes)

module.exports = router
