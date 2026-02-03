import '../styles/home.css'
import { useNavigate } from 'react-router'
import axios from 'axios'

export function HomePage({ loggedIn, setLoggedIn }) {
  const navigate = useNavigate()
  const handleLogout = async () => {
    try {
      await axios.get('http://localhost:5000/MyApp/logout')
      setLoggedIn(false)
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <div className='home-container'>
      {/* Top Bar */}
      <div className='top-bar'>
        {loggedIn ? (
          <button className='login-btn' onClick={handleLogout}>
            Log Out
          </button>
        ) : (
          <button className='login-btn' onClick={() => navigate('/login')}>
            Log In
          </button>
        )}
      </div>

      {/* Main Content */}
      <div className='content'>
        <h1>Cookie-Based Authentication Project</h1>
        <p className='subtitle'>A backend-focused authentication system built using modern web practices.</p>

        <section>
          <h2>🎯 Project Goals</h2>
          <ul>
            <li>Implement secure authentication using HTTP-only cookies</li>
            <li>Understand real-world login and session flow</li>
            <li>Separate frontend and backend responsibilities</li>
          </ul>
        </section>

        <section>
          <h2>🛠 Tech Stack Used</h2>
          <ul>
            <li>React (Vite)</li>
            <li>Express.js</li>
            <li>SQL Server</li>
            <li>JWT + HTTP-only Cookies</li>
            <li>Axios</li>
          </ul>
        </section>

        <section>
          <h2>✨ Key Features</h2>
          <ul>
            <li>User login & registration</li>
            <li>Role-based access (Admin / User)</li>
            <li>Protected dashboard routes</li>
            <li>Secure cookie handling</li>
          </ul>
        </section>

        <section className='note'>
          <p>
            This project focuses more on
            <strong> backend correctness and security </strong>
            rather than UI complexity.
          </p>
        </section>
      </div>
    </div>
  )
}
