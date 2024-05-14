import React, { useState} from 'react';
import {useNavigate} from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./Login.css";

const Login = ({ setIsAuthenticated }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showResetPassword, setShowResetPassword] = useState(false);
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const navigate=useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    // Perform basic authentication
    if ((username === 'ankit1234' && password === 'anku@1234') || (username === 'karmu' && password === 'kar123') || (username === 'kamalesh' && password === 'kamal14') || (username === 'kanna' && password === 'kanna10') || (username === 'shriman' && password === 'shriman08') || (username === 'keerthi' && password === 'keerthi12')) {
        navigate('/Centers')
      // Set authentication state to true
      //setIsAuthenticated(true);
      // Show success toast
      toast.success('Login successful!', {
        position: 'top-right',
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      // Navigate to next page or perform any other action upon successful login
    } else {
      toast.error('Invalid username or password', {
        position: 'top-right',
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  const handleClear = () => {
    setUsername('');
    setPassword('');
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleForgotPassword = () => {
    setShowResetPassword(true);
  };

  const handleResetPassword = (e) => {
    e.preventDefault();
    // Reset password logic here
    setShowResetPassword(false);
  };

  return (
    <div>
      <div className='login-bg'>
      <h1 className='main-title2'> Covid Vacination Center </h1>
      <div className='login-wrapper2'>
        <div className="login-container2">
          <h2>Admin Login</h2>
          <form onSubmit={handleLogin}>
            <div className="input-group2">
              <label>Username:</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                className="input-field2"
                placeholder='Enter Username'
              />
            </div>
            <div className="input-group2">
              <label>Password:</label>
              <div className="password-input2">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="input-field2"
                  placeholder='Enter Password'
                />
                <button type="button" onClick={togglePasswordVisibility} className="eye-button2">
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
            </div>
            <div className="input-group2">
              <button type="submit" className="submit-button2">Login</button>
              <button type="button" onClick={handleClear} className="clear-button2">Clear</button>
            </div>
            <div className="input-group2">
              <span className="forgot-password2" onClick={handleForgotPassword}>Forgot your password?</span>
            </div>
          </form>
          {showResetPassword && (
            <div className="reset-password-container2">
              <h2>Reset Password</h2>
              <form onSubmit={handleResetPassword}>
                <div className="input-group2">
                  <label>Username:</label>
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                    className="input-field2"
                  />
                </div>
                <div className="input-group2">
                  <label>New Password:</label>
                  <input
                    type="password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    required
                    className="input-field2"
                  />
                </div>
                <div className="input-group2">
                  <label>Confirm Password:</label>
                  <input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                    className="input-field2"
                  />
                </div>
                <div className="input-group2">
                  <button type="submit2" className="submit-button2">Submit</button>
                </div>
              </form>
            </div>
          )}
          <ToastContainer />
        </div>
      </div>
    </div>
    </div>
  );
};

export default Login;
