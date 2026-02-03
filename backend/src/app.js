import express from 'express'
import cors from 'cors'
import { HomePage } from './routes/home.routes.js'
import { LoginPage } from './routes/login.routes.js'
import { dashboardPage } from './routes/dashboard.routes.js'
import { RegisterPage } from './routes/register.routes.js'
import { AdminPage } from './routes/admin.routes.js'
import cookieParser from 'cookie-parser'

const app = express()
app.use(
  cors({
    origin: 'http://localhost:5173',
    credentials: true,
  }),
)
app.use(express.json())
app.use(cookieParser())

app.use('/MyApp', HomePage)
app.use('/MyApp', LoginPage)
app.use('/MyApp', dashboardPage)
app.use('/MyApp', RegisterPage)
app.use('/MyApp', AdminPage)
export { app }
