import React from 'react';

import './Login.css';
import profile from "../assest/images/a.png";
import email from "../assest/images/email.png";
import pass from "../assest/images/password.png";


function Login() {
  const handleLogin = () => {
    console.log("Login clicked!");
    alert("Login successful!");
    // Add your login logic here
  }
  return (
    <div className="main">
      <div className="sub-main">
        <div>
          <div className="imgs">
            <div className="container-image">
              <img src={profile} alt="profile" className="profile"/>
            </div>
          </div>
          <div >
            <h1>Login Page</h1>
            <div>
              <img src={email} alt="email" className="email"/>
              <input type="text" placeholder="username" className="name"/>
            </div>
            <div className="second-input">
              <img src={pass} alt="pass" className="email"/>
              <input type="password" placeholder="password" className="name"/>
            </div>
            <div className="login-button">
              <button  variant="contained" color='secondary' onClick={handleLogin}>Login</button>
            </div>
            <p className="link">
              <a href="Forgotpassword">Forgot password ?</a> Or <a href="Signup">Sign Up</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
