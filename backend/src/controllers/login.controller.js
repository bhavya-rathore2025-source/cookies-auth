import { json } from 'express'
import { poolPromise } from '../db/sql.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
export const getLoginPage = async (req, res) => {
  const { username, password } = req.body

  const pool = await poolPromise.connect()
  const result = await pool.request().query(`SELECT * FROM users`)
  const users = result.recordset // 👈 THIS is the array

  const user = users.find((u) => u.username === username)

  if (user && (await bcrypt.compare(password, user.password))) {
    const noPass = { username: user.username, role: user.role }
    const token = jwt.sign(
      {
        username: noPass.username,
        role: noPass.role,
      },
      'anykey',
      {
        expiresIn: '3d',
      },
    )
    console.log(token)

    res.cookie('token', token, {
      maxAge: 3 * 24 * 60 * 60 * 1000,
      httpOnly: true,
      secure: false,
      sameSite: 'lax',
    })

    return res.json({ Login: 'Done' })
  }

  res.json({ Login: 'invalid' })
}

export const logOut = (req, res) => {
  console.log('Calles')

  res.clearCookie('token', {
    httpOnly: true,
    secure: false,
    sameSite: 'lax',
  })
  res.json({ logout: 'done' })
}
