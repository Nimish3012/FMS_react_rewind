import React from "react";
import "../styles.css";

const Login = () => {
  return (
    <>
    <div className="login">
      <div className="login-container">
        <div className="login-input">
          <span>UserName  </span>
          <input></input>
        </div>

        <div className="login-input">
          <span>Password  </span>
          <input></input>
        </div>
      </div>
    </div>
    </>
  );
};

export default Login;
