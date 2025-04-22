 
import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { authContext } from '../context/authContext';
import { registerUser, loginUser } from '../api/auth';
import '../styles/Auth.css'

const AuthForm = ({ isLogin }) => {
const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [error, setError] = useState(null);
const { login } = useContext(authContext);
const navigate = useNavigate();

const handleSubmit = async (e) => {
      e.preventDefault();
      let userData = {
          email,
          password
      };
      if (!isLogin) {
          userData = {
              name,
              email,
              password
          };
      }
      try {
           let res;
          if (isLogin) {
             res = await loginUser(userData);
          } else {
             res = await registerUser(userData);
          }
          login(res.token)
          navigate('/');
      } catch (err) {
          setError(err.response.data.msg);
          
      }
  };

return (
<div className='auth-form-container'>
     <form onSubmit={handleSubmit} className="auth-form">
          <h2 className="auth-form-title">{isLogin ? 'Login' : 'Register'}</h2>
              {!isLogin && (
                   <div className="auth-form-group">

 

                      <label>Name</label><br/><br/>
                       <input
                          type="text"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          required
                           />
                           </div>
                )}
              <div className="auth-form-group">
                  <label>Email</label><br/><br/>
                  <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                  />
              </div>
          <div className="auth-form-group">
               <label>Password</label><br/><br/>
              <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
              />
          </div>
      {error && <div className="auth-error">{error}</div>}
      <button type="submit" className="auth-form-submit">
          {isLogin ? 'Login' : 'Register'}
           
          </button>
      </form>
    
</div>
      );
  };

  export default AuthForm;

 
