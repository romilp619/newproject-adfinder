import React from 'react';

import './Login.css';
//import profile from "../assest/images/a.png";
import email from "../assest/images/email.png";
import pass from "../assest/images/password.png";

function Forgotpassword() {
  const handleForgotpass = () => {
    console.log("Login clicked!");
    // Add your login logic here
  }

  return (
    <div className="main">
      <div className="sub-main">
        <div>
          <div className="imgs">
           
            </div>
          </div>
          <div>
            <center>
            <h1 >Forgot password</h1>
            <div>
              <img src={email} alt="email" className="email"/>
              <input type="text" placeholder="Username" className="name"/>
            </div>
            <div className="second-input">
              <img src={pass} alt="pass" className="email"/>
              <input type="password" placeholder="New password" className="name"/>
            </div>
            <div className="login-button">
              <button onClick={handleForgotpass}>Reset</button>
            </div>
            <p className="link">
              
           <a href="Login"> Login </a>
           
            </p>
           </center>
          </div>
         
        </div>
      </div>
      
  );
}
export default Forgotpassword;
