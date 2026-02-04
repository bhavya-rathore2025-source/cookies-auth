import { Route, Routes } from 'react-router'
import { HomePage } from './pages/home'
import { LoginPage } from './pages/login'
import { RegisterPage } from './pages/register'
import { Dashboard } from './pages/dashboard'
import { useState } from 'react'
import { AdminPage } from './pages/admin'
function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [admin, setAdmin] = useState(false)
  return (
    <Routes>
      <Route path='/' element={<HomePage loggedIn={loggedIn} setLoggedIn={setLoggedIn} admin={admin} setAdmin={setAdmin} />} />
      <Route path='/login' element={<LoginPage loggedIn={loggedIn} setLoggedIn={setLoggedIn} />} />
      <Route path='/register' element={<RegisterPage />} />
      <Route path='/dashboard' element={<Dashboard setAdmin={admin} />} />
      <Route path='/admin' element={<AdminPage admin={admin} />} />
    </Routes>
  )
}

export default App
