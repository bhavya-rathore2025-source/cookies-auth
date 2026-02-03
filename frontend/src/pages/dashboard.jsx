import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import axios from 'axios'
import '../styles/dashboard.css'

export function Dashboard() {
  const [user, setUser] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    axios.get('http://localhost:5000/MyApp/dashboard', { withCredentials: true }).then((res) => {
      setUser(res.data)
    })
  }, [])

  if (!user) return <p className='loading'>Loading...</p>
  if (user.logged === 'No') navigate('/login')
  console.log(user)

  return (
    <div className='dashboard-container'>
      <div className='dashboard-header'>
        <h1>Dashboard</h1>
      </div>

      <div className='card'>
        <h2>Welcome, {user.userName}</h2>
        <p>
          <strong>Role:</strong> {user.userRole}
        </p>
        <p>
          <strong>Status:</strong> Authenticated via HTTP-only cookies
        </p>
      </div>

      <div className='card'>
        <h3>What this dashboard proves</h3>
        <ul>
          <li>User is authenticated</li>
          <li>Cookie is sent automatically by browser</li>
          <li>Backend protected route is working</li>
        </ul>
      </div>

      {user.role === 'admin' && (
        <div className='card admin-card'>
          <h3>Admin Panel</h3>
          <p>Only admins can see this section.</p>
        </div>
      )}
    </div>
  )
}
