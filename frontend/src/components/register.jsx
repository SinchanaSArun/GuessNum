
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import './register.css';

function Register() {
  const [name, setName] = useState('');
  const [email, setMail] = useState('');
  const [password, setPass] = useState('');
  const navigate = useNavigate();
  axios.defaults.withCredentials = true;


  const HandleSubmit = (e) => {
    e.preventDefault();
 axios.post('http://localhost:3001/register', { name, email, password })
      .then(result => {
        navigate('/game');
      })
      .catch(err => console.log(err));
  };


  return (
    <div className="register-page">
      <div className="register-container">
        <h2> REGISTER</h2>
        <form onSubmit={HandleSubmit}>
          <div className='mb-3'>
            <label htmlFor='email'>
              <strong>Name</strong>
            </label>
            <input
              type='text'
              placeholder='Enter your name'
              name='name'
              className='form-control rounded-0'
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className='mb-3'>
            <label>
              <strong>Email</strong>
            </label>
            <input
              type='email'
              placeholder='Enter your Email'
              name='email'
              className='form-control rounded-0'
              onChange={(e) => setMail(e.target.value)}
            />
          </div>
          <div className='mb-3'>
            <label>
              <strong>Create Password</strong>
            </label>
            <input
              type='password'
              placeholder='Enter your password'
              name='password'
              className='form-control rounded-0'
              onChange={(e) => setPass(e.target.value)}
            />
          </div>
          
          <button type='submit' className='btn btn-success w-100 rounded-0'>Register</button>
        </form>
        <p>Already have an account?</p>
        <Link to="/login" className='btn btn-default border w-100 bg-light rounded-0'>
          Login
        </Link>
      </div>
    </div>
  );
}

export default Register;



