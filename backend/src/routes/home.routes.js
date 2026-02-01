import { getHomePage } from '../controllers/home.controller.js'
import express from 'express'

const router = express.Router()

router.get('/home', getHomePage)

export { router as HomePage }
