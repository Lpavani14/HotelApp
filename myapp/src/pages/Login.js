import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from './firebase';
import { setUser } from '../features/authSlice';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import { cleanUser } from './cleanUser';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  
  useEffect(() => {
    const dummyEmail = 'user@gmail.com';
    const dummyPassword = 'password123';
    if (!localStorage.getItem('dummyUser')) {
      localStorage.setItem('dummyUser', JSON.stringify({ email: dummyEmail, password: dummyPassword }));
    }
  }, []);

  const handleEmailLogin = (e) => {
    e.preventDefault();
    const savedUser = JSON.parse(localStorage.getItem('dummyUser'));

    if (savedUser.email === email && savedUser.password === password) {
      dispatch(setUser({ email })); 
      navigate('/home');
    } else {
      alert('Invalid email or password');
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const cleanedUser = cleanUser(result.user);
      dispatch(setUser(cleanedUser));
      navigate('/home');
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="login-container">
      <h2>Login to BookMyStay</h2>

      
      <form onSubmit={handleEmailLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>

      <hr />


      <button className="google-btn" onClick={handleGoogleLogin}>
        Sign in with Google
      </button>
    </div>
  );
};

export default Login;
