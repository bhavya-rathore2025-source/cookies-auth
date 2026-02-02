import { getAdminPage } from '../controllers/admin.controller.js'
import express from 'express'

const router = express.Router()

router.get('/admin', getAdminPage)

export { router as AdminPage }
