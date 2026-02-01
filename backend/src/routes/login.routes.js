import { getLoginPage } from '../controllers/login.controller.js'
import express from 'express'

const router = express.Router()

router.post('/login', getLoginPage)

export { router as LoginPage }
