import React,{useState} from 'react'
import { Link,useNavigate } from 'react-router-dom';
import './login.css'
import axios from 'axios';




function Login(){
  const[email,setEmail]=useState('')
  const[password,setPassword]=useState('')
  const navigate=useNavigate()
  axios.defaults.withCredentials = true;
 
  
  const HandleSubmit=(e)=>{
    e.preventDefault()
    axios.post('http://localhost:3001/login',{email,password})
    .then(result=>{
      console.log(result)
      if(result.data==="success"){

        navigate('/game')
      }
    })
    .catch(err=>console.log(err))
  }
 
 return (

<div className="login-page">
<div className="login-container">
  <h2> LOGIN</h2>
<form onSubmit={HandleSubmit}>

<div className='mb-3'>
  <label>
    <strong>Email</strong>
  </label>
  <input type='email' placeholder='enter email' autoComplete='off' name='email'
  onChange={(e)=>setEmail(e.target.value)}
  />
  </div>  
  <div className='mb-3'>  
  <label >
    <strong>Password</strong>
  </label>
  <input type='password' placeholder='enter password' autoComplete='off' name='password'
  onChange={(e)=>setPassword(e.target.value)}
  />
  </div> 
  <button type='submit'>Login</button>

  </form>  
  <br/>
  <p>New user?</p><Link to='/register'>Register</Link>
<br/>
    </div>
    </div>
  )
}

export default Login;



