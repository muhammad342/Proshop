import express from 'express'
import protect from '../middleware/authMiddleware.js'

import { authUser, getUser, createUser } from '../controllers/userController.js'


const router =express.Router()


router.route('/').post(createUser)
router.post('/login',authUser)
router.route('/profile').get(protect,getUser)

export default router 