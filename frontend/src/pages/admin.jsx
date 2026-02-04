import { useNavigate } from 'react-router'
import '../styles/admin.css'

export function AdminPage({ admin }) {
  const navigate = useNavigate()

  // Frontend-only guard (no API call)
  if (admin !== true) {
    return (
      <div className='admin-container'>
        <h2>Access Denied</h2>
        <p>This page can only be accessed by admin users.</p>

        <button className='admin-btn' onClick={() => navigate('/')}>
          Go Home
        </button>
      </div>
    )
  }

  return (
    <div className='admin-container'>
      <h1>Admin Page</h1>
      <button className='home-btn' type='submit' onClick={() => navigate('/')}>
        Home Page
      </button>
      <div className='admin-card'>
        <p>
          ✅ You are logged in as an <strong>Admin</strong>
        </p>
        <p>This page is restricted to admin users only.</p>
      </div>

      <button className='admin-btn' onClick={() => navigate('/dashboard')}>
        Back to Dashboard
      </button>
    </div>
  )
}
