export const getAdminPage = (req, res) => {
  try {
    const userData = req.cookies.userData ? JSON.parse(req.cookies.userData) : null
    const userRole = userData ? userData.role : null

    if (userRole === 'admin') {
      res.send('Admin Page!!')
      return
    }

    res.send('invalid cookie')
  } catch (err) {
    res.send('invalid cookie')
  }
}
