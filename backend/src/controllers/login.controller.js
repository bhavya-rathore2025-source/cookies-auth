import { json } from 'express'

const users = [
  { username: 'admin', password: 'admin123', role: 'admin' },
  { username: 'john', password: 'john123', role: 'user' },
  { username: 'aadi', password: 'aadi123', role: 'user' },
]

export const getLoginPage = (req, res) => {
  const { username, password } = req.body
  const user = users.find((u) => u.username === username && u.password === password)
  if (user) {
    const noPass = { username: user.username, role: user.role }
    res.cookie('userData', JSON.stringify(noPass), {
      maxAge: 3 * 24 * 60 * 1000,
      httpOnly: true,
      secure: false,
      sameSite: 'strict',
    })
    res.json({ Login: 'Done' })
  } else {
    res.json({ Login: 'invalid' })
  }
}

export const logOut = (req, res) => {
  res.clearCookie('userData')
  res.redirect('/MyApp/home')
}
