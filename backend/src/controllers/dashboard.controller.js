export const getDashboardPage = (req, res) => {
  try {
    const userData = req.cookies.userData ? JSON.parse(req.cookies.userData) : null
    const userName = userData ? userData.username : null
    const userRole = userData ? userData.role : null
    if (userName) {
      res.json({ logged: 'Yes', userName: userName, userRole: userRole })
      return
    }

    res.json({ logged: 'No' })
  } catch (err) {
    res.json({ logged: 'No' })
  }
}
