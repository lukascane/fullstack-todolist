import React, {useContext} from 'react';
import axios from 'axios';
import { AppContext } from '../hoc/MainRouter';
import { useNavigate } from 'react-router-dom';
import { handle } from 'express/lib/application';

function Register() {
  const navigate = useNavigate();
  const {username,handleLogin} = useContext(AppContext)
  console.log(handleLogin);
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = {
      username: formData.get("username"),
      email: formData.get("email"),
      password: formData.get("password"),
    };
    
try {
  const response = await axios.post('http://localhost:4000/user/register', data, {withCredentials: true})
  console.log(response);
  if (response.status === 200) {navigate('/login')}
}
catch(error){console.log("error", error);}
  } 
  return (
    <div className=' body' >
    <h1>Register</h1>
      <form onSubmit={handleSubmit} >
        <div className="container fs-4 pt-4">
          <div className="form-group mb-3">
            <label >Username</label>
            <input
              className="form-control text-center fs-4"
              name="username"
              type="text"
              id="username"
              placeholder="Please type your username"
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

          <div className="form-group mb-3">
            <label >Email</label>
            <input
              className="form-control text-center fs-4"
              name="email"
              type="email"
              id="email"
              placeholder="Please type your email"
            />
          </div>
        </div>

        <button type="submit" className="btn-lg btn-outline-primary text-center">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Register;
