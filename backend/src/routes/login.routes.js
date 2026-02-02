import { getLoginPage, logOut } from '../controllers/login.controller.js'
import express from 'express'

const router = express.Router()

router.post('/login', getLoginPage)
router.get('/logout', logOut)

export { router as LoginPage }
