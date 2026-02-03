import { Route, Routes } from 'react-router'
import { HomePage } from './pages/home'
import { LoginPage } from './pages/login'
import { RegisterPage } from './pages/register'
import { Dashboard } from './pages/dashboard'
import { useState } from 'react'
function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  return (
    <Routes>
      <Route path='/' element={<HomePage loggedIn={loggedIn} setLoggedIn={setLoggedIn} />} />
      <Route path='/login' element={<LoginPage loggedIn={loggedIn} setLoggedIn={setLoggedIn} />} />
      <Route path='/register' element={<RegisterPage />} />
      <Route path='/dashboard' element={<Dashboard />} />
    </Routes>
  )
}

export default App
