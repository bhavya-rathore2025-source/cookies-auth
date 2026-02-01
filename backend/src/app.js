import express from 'express'
import cors from 'cors'
import { HomePage } from './routes/home.routes.js'
import { LoginPage } from './routes/login.routes.js'

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(
  cors({
    origin: 'http://localhost:5173',
  }),
)
app.use('/MyApp', HomePage)
app.use('/MyApp', LoginPage)

export { app }
