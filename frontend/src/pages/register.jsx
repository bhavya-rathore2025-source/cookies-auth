import { useState } from 'react'
import { useNavigate } from 'react-router'
import axios from 'axios'
import '../styles/register.css'

export function RegisterPage() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  const navigate = useNavigate()

  const handleRegister = async (e) => {
    e.preventDefault()
    setError('')
    setSuccess('')

    try {
      const res = await axios.post('http://localhost:5000/MyApp/register', { username, password }, { withCredentials: true })

      if (res.data.Register === 'Done') {
        setSuccess('Registration successful. You can login now.')
        setTimeout(() => navigate('/login'), 1500)
      } else {
        setError(res.data.Register || 'Registration failed')
      }
    } catch (err) {
      console.log(err)

      setError('Something went wrong. Try again.')
    }
  }

  return (
    <div className='register-container'>
      <button className='home-btn' type='submit' onClick={() => navigate('/')}>
        Home Page
      </button>
      <form className='register-form' onSubmit={handleRegister}>
        <input
          className='register-input'
          type='text'
          placeholder='Username'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        <input
          className='register-input'
          type='password'
          placeholder='Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        {error && <p className='register-error'>{error}</p>}
        {success && <p className='register-success'>{success}</p>}

        <button className='register-btn' type='submit'>
          Register
        </button>
      </form>
    </div>
  )
}
