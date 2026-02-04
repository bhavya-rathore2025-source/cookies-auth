import { json } from 'express'
import { poolPromise } from '../db/sql.js'
import bcrypt from 'bcryptjs'
export const getRegisterPage = async (req, res) => {
  const { username, password } = req.body
  const hashedPass = await bcrypt.hash(password, 10)
  const pool = await poolPromise.connect()

  // check if username exists
  const check = await pool.request().input('username', username).query(`SELECT id FROM users WHERE username = @username`)

  if (check.recordset.length > 0) {
    return res.json({ Register: 'Username already exists' })
  }

  // insert new user
  await pool.request().input('username', username).input('password', hashedPass).input('role', 'user').query(`
      INSERT INTO users (username, password, role)
      VALUES (@username, @password, @role)
    `)

  res.json({ Register: 'Done' })
}

export const logOut = (req, res) => {
  res.clearCookie('userData')
  res.redirect('/MyApp/home')
}
