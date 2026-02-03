import { json } from 'express'
import { poolPromise } from '../db/sql.js'

export const getLoginPage = async (req, res) => {
  const { username, password } = req.body

  const pool = await poolPromise.connect()
  const result = await pool.request().query(`SELECT * FROM users`)
  const users = result.recordset // 👈 THIS is the array

  const user = users.find((u) => u.username === username && u.password === password)

  if (user) {
    const noPass = { username: user.username, role: user.role }

    res.cookie('userData', JSON.stringify(noPass), {
      maxAge: 3 * 24 * 60 * 60 * 1000,
      httpOnly: true,
      secure: false,
      sameSite: 'strict',
    })

    return res.json({ Login: 'Done' })
  }

  res.json({ Login: 'invalid' })
}

export const logOut = (req, res) => {
  res.clearCookie('userData')
}
