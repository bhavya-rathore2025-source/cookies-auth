import { getDashboardPage } from '../controllers/dashboard.controller.js'
import express from 'express'
const router = express.Router()

router.get('/dashboard', getDashboardPage)

export { router as dashboardPage }
