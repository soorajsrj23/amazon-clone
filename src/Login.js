import React, { useState } from 'react'
import './Login.css'
import {Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { auth } from './firebase';
import { createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";

function Login() 
{
const [email , setEmail] = useState('');
const [password , setPassword] = useState('');
const history = useNavigate();

const signIn = (e) =>{ 
e.preventDefault();
  
  signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
          console.log('auth', auth)
          history('/')
      })
      .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
          console.error(errorCode, errorMessage)
      });
  }
const register= (e)=>
{
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log("user created");
    console.log(user);
    history('/')
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode);
    console.log("error");
    // ..
  });
}
      




  return (
    <div className='login'>
        <Link to ="/">
        <img className='login__logo' src="https://www.gannett-cdn.com/-mm-/8eded6e5fecea21a0098fa1a295b13d637260962/c=322-342-1887-1226&r=x1683&c=3200x1680/local/-/media/2017/09/07/Rochester/Rochester/636403844012827674-Amazon-logo.png"/>
        </Link>
        <div className="login__container">
               <h1>Sign-In </h1>

               <form>
               <h5>E-mail</h5>
               <input type="text" value={email} onChange= {e=>setEmail(e.target.value) } />
               <h5>Password</h5>
               <input type="password" value={password} onChange={e=>setPassword(e.target.value)} />
               <button  onClick={signIn} className='login__signInButton' type='submit' >Sign-In</button>
         
               </form>
               <p>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</p>
                <button onClick={register} className='login__registerButton'>Create Your Amazon Account</button>
        
        
        
        </div>
</div>
  )
}

export default Login