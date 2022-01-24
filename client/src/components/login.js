import { handle } from 'express/lib/application';
import React from 'react';
import axios from 'axios';

import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const handleSubmit =  async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = {
      username: formData.get("username"),
      password: formData.get("password"),
    };
    try {
      const API = process.env.NODE_ENV === 'production' ? `https://todolist-v2-lukas-cane.herokuapp.com/user/login` : `http://localhost:4000/user/login`;
      const response = await axios.post(
        API, data, {withCredentials: true})
      console.log(response);
      if (response.status === 200) {navigate('/landing')}
    }
    catch(error){console.log("error", error);}
      } 
  return (
    <div>
     <h1>Login</h1>
      <form onSubmit={handleSubmit} >
        <div className="container fs-4 pt-4">
          <div className="form-group mb-3">
            <label >Username</label>
            <input
              className="form-control text-center fs-4"
              name="username"
              type="text"
              id="username"
              placeholder="Please type your Username"
            />
          </div>

          <div className="form-group mb-3">
            <label >Password</label>
            <input
              className="form-control text-center fs-4"
              name="password"
              type="password"
              id="password"
              placeholder="Please type your password"
            />
          </div>
        </div>

        <button type="submit" size="lg" className="btn-lg btn-outline-primary text-center" >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Login;
