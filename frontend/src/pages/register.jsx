import '../styles/login.css'
import { useNavigate } from 'react-router'

export function RegisterPage() {
  const navigate = useNavigate()

  return (
    <div className='login-page'>
      <div className='login-card'>
        <h1>Create account</h1>
        <p className='desc'>Registering is handled on the backend; form not implemented here.</p>
        <p style={{ marginTop: 16 }}>
          <button className='btn' onClick={() => navigate('/login')}>
            Back to Login
          </button>
        </p>
      </div>
    </div>
  )
}

export default RegisterPage
