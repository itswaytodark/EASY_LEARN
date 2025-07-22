import express from 'express'
import { login, logout, register, sendverifyOtp, verifyEmail } from '../controllers/authController.js'
import { userAuth } from '../middelware/userAuth.js'

const authRouter = express.Router()

authRouter.post('/register', register)
authRouter.post('/login', login)
authRouter.post('/logout', logout)
authRouter.post('/send-verify-otp',userAuth, sendverifyOtp)
authRouter.post('/verify-email',userAuth, verifyEmail)

export default authRouter