import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';


export const LoginPage = () => {
 
  const { login } = useContext( AuthContext );
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('');
  const [error, seterror] = useState<string|null>(null);
  const navigate = useNavigate();

  const onLogin = async (e : any) => {
    e.preventDefault();
    if (email.trim() == '' || password.trim() == '') {
      seterror('Please enter your credentials');
      return;
    }

    try {

      await login(email, password);
    
      navigate( '/home', {
        replace: true
      });

    } catch(error){
      seterror('Please check your credentials');
    }


  }

  return (
    <div className="login-screen">
        <form onSubmit={(e) => onLogin(e)} className="login-form">
        <h1>U Library</h1>
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          type="email"
          className="base-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label htmlFor="password">Password:</label>
        <input
          id="password"
          type="text"
          className="base-input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {
          error && <span className="login-error">{error}</span>
        }
        <button 
          className="primary-btn"
          type="submit"
        >
          Login
        </button>
      </form>
    </div>
  )
}
