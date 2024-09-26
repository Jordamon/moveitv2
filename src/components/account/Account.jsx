import React, { useRef, useEffect, useState } from 'react';
import ACCOUNTCSS from './Account.module.css';
import axios from 'axios';

const AccountComponent = () => {
  const loginFormRef = useRef(null);
  const regFormRef = useRef(null);
  const indicatorRef = useRef(null);
  const [message, setMessage] = useState('');

  useEffect(() => {
    indicatorRef.current.style.transform = 'translateX(0px)';
    regFormRef.current.style.transform = 'translateX(400px)';
    loginFormRef.current.style.transform = 'translateX(400px)';
  }, []);

  function register() {
    regFormRef.current.style.transform = 'translateX(0px)';
    loginFormRef.current.style.transform = 'translateX(0px)';
    indicatorRef.current.style.transform = 'translateX(100px)';
  }

  function login() {
    regFormRef.current.style.transform = 'translateX(400px)';
    loginFormRef.current.style.transform = 'translateX(400px)';
    indicatorRef.current.style.transform = 'translateX(0px)';
  }

  async function handleLogin(event) {
    event.preventDefault();

    const username = loginFormRef.current.querySelector('input[type="text"]').value;
    const password = loginFormRef.current.querySelector('input[type="password"]').value;

    try {
      const response = await axios.post('http://localhost:4001/users/login', {
        name: username,
        password: password
      });

      if (response.data === 'Success') {
        setMessage('Login successful');
      } else {
        setMessage('Login failed');
      }
    } catch (error) {
      setMessage('Error during login');
    }
  }

  async function handleRegister(event) {
    event.preventDefault();

    const username = regFormRef.current.querySelector('input[type="text"]').value;
    const email = regFormRef.current.querySelector('input[type="email"]').value;
    const password = regFormRef.current.querySelector('input[type="password"]').value;

    try {
      const response = await axios.post('http://localhost:4001/users', {
        name: username,
        email: email,
        password: password
      });

      if (response.status === 201) {
        setMessage('Registration successful');
      } else {
        setMessage('Registration failed');
      }
    } catch (error) {
      setMessage('Error during Registration');
    }
  }

  return (
    <div className={ACCOUNTCSS.accountPage}>
      <div className={ACCOUNTCSS.background}>
      <div className={ACCOUNTCSS.formContainer}>
      <h3>YOUR ACCOUNT</h3>
        <div className={ACCOUNTCSS.formBtn}>
          <span className={ACCOUNTCSS.spanHeaders} onClick={login}>Login</span>
          <span className={ACCOUNTCSS.spanHeaders} onClick={register}>Register</span>
          <hr className={ACCOUNTCSS.indicator} ref={indicatorRef} />
          {message && (
            <div className={`${ACCOUNTCSS.message} ${message.includes('successful') ? ACCOUNTCSS.success : ACCOUNTCSS.error}`}>
              {message}
            </div>
          )}
        </div>
        <form className={ACCOUNTCSS.loginForm} ref={loginFormRef} onSubmit={handleLogin}>
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
          <button type="submit" className={ACCOUNTCSS.btn}>Login</button>
          <br />
          <a href="/">Forgot password</a>
        </form>
        <form className={ACCOUNTCSS.regForm} ref={regFormRef} onSubmit={handleRegister}>
          <input type="text" placeholder="Username" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button type="submit" className={ACCOUNTCSS.btn}>Register</button>
        </form>
      </div>
      </div>
    </div>
  );
};

export default AccountComponent;
