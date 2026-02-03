import '../styles/home.css'
import { useNavigate } from 'react-router'
import { useEffect, useState } from 'react'
import axios from 'axios'

export function HomePage({ loggedIn, setLoggedIn }) {
  const navigate = useNavigate()
  const handleLogout = async () => {
    console.log(1)
    await axios.get('http://localhost:5000/MyApp/logout', { withCredentials: true })

    console.log(2)
    setLoggedIn(false)
    console.log(setLoggedIn)

    // navigate to root and replace history so Back doesn't return to a cached auth page
  }
  const checkStatus = async () => {
    await axios.get('http://localhost:5000/MyApp/dashboard', { withCredentials: true }).then((res) => {
      if (res.data.logged == 'Yes') setLoggedIn(true)
      else setLoggedIn(false)
    })
  }
  useEffect(() => {
    checkStatus()
  }, [])

  console.log(loggedIn)

  return (
    <div className='home-container'>
      {/* Top Bar */}
      <div className='top-bar'>
        <button
          className='login-btn'
          onClick={() => {
            if (loggedIn) navigate('/dashboard')
            else alert('Log in first')
          }}>
          Dashboard
        </button>

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
