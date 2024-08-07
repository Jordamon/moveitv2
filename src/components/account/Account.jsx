import React, { useRef, useEffect, useState } from 'react';
import './Account.css';
import shoeImage from "../../images/shoe-transparent-background-20.png";
import axios from 'axios';

const AccountComponent = () => {
  const LoginFormRef = useRef(null);
  const RegFormRef = useRef(null);
  const IndicatorRef = useRef(null);
  const [message, setMessage] = useState('');


  useEffect(() => {
    IndicatorRef.current.style.transform = 'translateX(0px)';
    RegFormRef.current.style.transform = 'translateX(300px)';
    LoginFormRef.current.style.transform = 'translateX(300px)';
  }, []);


  function Register(loginFormRef, regFormRef, indicatorRef) {
    regFormRef.current.style.transform = 'translateX(0px)';
    loginFormRef.current.style.transform = 'translateX(0px)';
    indicatorRef.current.style.transform = 'translateX(100px)';
  }
  
  function Login(loginFormRef, regFormRef, indicatorRef) {
    regFormRef.current.style.transform = 'translateX(300px)';
    loginFormRef.current.style.transform = 'translateX(300px)';
    indicatorRef.current.style.transform = 'translateX(0px)';
  }
  
  async function handleLogin(event) {
    event.preventDefault();

    const username = LoginFormRef.current.querySelector('input[type="text"]').value;
    const password = LoginFormRef.current.querySelector('input[type="password"]').value;

    try {
      const response = await axios.post('http://localhost:4001/users/login', {
        name: username,
        password: password
      });

      if (response.data === 'Success') {
        // Handle successful login
        console.log('Login successful');
        setMessage('Login successful');
      } else {
        // Handle login failure
        console.log('Login failed');
        setMessage('Login failed');
      }
    } catch (error) {
      // Handle error
      console.error('Error during login:', error);
      setMessage('Error during login');
    }
  }

  // Function to handle registration
  async function handleRegister(event) {
    event.preventDefault();
  
    const username = RegFormRef.current.querySelector('input[type="text"]').value;
    const email = RegFormRef.current.querySelector('input[type="email"]').value;
    const password = RegFormRef.current.querySelector('input[type="password"]').value;
  
    try {
      const response = await axios.post('http://localhost:4001/users', {
        name: username,
        email: email, // Add email field
        password: password
      });
  
      if (response.status === 201) {
        // Handle successful registration
        console.log('Registration successful');
        setMessage('Registration successful');
      } else {
        // Handle registration failure
        console.log('Registration failed');
        setMessage('Registration failed');
      }
    } catch (error) {
      // Handle error
      console.error('Error during registration:', error);
      setMessage('Error during Registration');
    }
  }

  return (
    <div className="account-page">
      <div className="account-container">
        <div className="row">
          <div className="col-2">
            <div className="account-shoes">
              <img src={shoeImage} alt="Shoe" />
            </div>
          </div>
          <div className="col-2">
            <div className="form-container">
              <div className="form-btn">
              <span className="spanHeaders" onClick={() => Login(LoginFormRef, RegFormRef, IndicatorRef)}>Login</span>
              <span className="spanHeaders" onClick={() => Register(LoginFormRef, RegFormRef, IndicatorRef)}>Register</span>
                <hr ref={IndicatorRef} />
                {message && <div className={`message ${message.includes('successful') ? 'success' : 'error'}`}>{message}</div>}
              </div>
              <form id="LoginForm" ref={LoginFormRef} onSubmit={handleLogin}>
                <input type="text" placeholder="Username" />
                <input type="password" placeholder="Password" />
                <button type="submit" className="btn">Login</button>
                <br/>
                <a href="/">Forgot password</a>
              </form>
              <form id="RegForm" ref={RegFormRef} onSubmit={handleRegister}>
                <input type="text" placeholder="Username" />
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <button type="submit">Register</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  
};

export default AccountComponent;
