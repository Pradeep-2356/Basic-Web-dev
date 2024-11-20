import React from 'react';
import './style.css';

const LoginForm = () => {
  return (
    <div>
      <h1 className="heading">Login Form</h1>
      <div className="login">
        <form>
          <h1>LOG IN</h1>
          <label className="elements">Username</label>
          <input type="text" />
          <label className="elements">Password</label>
          <input type="password" />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
