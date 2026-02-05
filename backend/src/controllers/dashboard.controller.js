import jwt from 'jsonwebtoken'
export const getDashboardPage = (req, res) => {
  try {
    const token = req.cookies.token ? req.cookies.token : null

    if (!token) {
      res.json({ logged: 'No' })
      return
    }

    jwt.verify(token, 'anykey', (err, decoded) => {
      if (err) {
        res.json({ logged: 'No' })
        return
      }

      // token is valid
      res.json({
        logged: 'Yes',
        userName: decoded.username,
        userRole: decoded.role,
      })
    })
  } catch (err) {
    res.json({ logged: 'No' })
  }
}
