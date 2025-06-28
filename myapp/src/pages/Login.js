import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { auth, provider } from './firebase';
import { setUser } from '../features/authSlice';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import { cleanUser } from './cleanUser'; // 👈 you need this helper

const Login = () => {
  const [email, setEmail] = useState('testuser@example.com'); // Dummy email
  const [password, setPassword] = useState('testpassword123'); // Dummy password
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleEmailLogin = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const cleanedUser = cleanUser(userCredential.user);
      dispatch(setUser(cleanedUser));
      navigate('/home');
    } catch (error) {
      alert(error.message);
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

      {/* Email + Password Login */}
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

      {/* Google Login */}
      <button className="google-btn" onClick={handleGoogleLogin}>
        Sign in with Google
      </button>
    </div>
  );
};

export default Login;
