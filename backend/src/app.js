import express from 'express'
import cors from 'cors'
import { HomePage } from './routes/home.routes.js'
import { LoginPage } from './routes/login.routes.js'
import { dashboardPage } from './routes/dashboard.routes.js'
import cookieParser from 'cookie-parser'

const app = express()
app.use(express.json())
app.use(cookieParser())
app.use(
  cors({
    origin: 'http://localhost:5173',
  }),
)
app.use('/MyApp', HomePage)
app.use('/MyApp', LoginPage)
app.use('/MyApp', dashboardPage)

export { app }
