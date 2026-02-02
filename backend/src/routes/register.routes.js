import { getRegisterPage } from '../controllers/register.controller.js'
import express from 'express'

const router = express.Router()

router.post('/register', getRegisterPage)

export { router as RegisterPage }
