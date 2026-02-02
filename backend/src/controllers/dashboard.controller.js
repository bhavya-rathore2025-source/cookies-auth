export const getDashboardPage = (req, res) => {
  try {
    const userData = req.cookies.userData ? JSON.parse(req.cookies.userData) : null
    const userName = userData ? userData.username : null

    if (userName) {
      res.redirect('/MyApp/home')
      return
    }

    res.send('invalid cookie')
  } catch (err) {
    res.send('invalid cookie')
  }
}
