
import React, { useEffect, useState } from 'react';
import './App.css';
import{BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import { auth } from './firebase';
import {useStateValue} from './StateProvider';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

import Payment from './Payment';

const promise = loadStripe('pk_test_51LuGd9SHqoT2lnnHfDrOeOsQlkxmr9FBzz9rY9NXA8HaxhOzpukg7ljsP2KRYrnkJqTVLI264DVm6M73uDauisJ100PyVks09M');


function App() {

const [{},dispatch] = useStateValue();


  useEffect(()=>  {
 auth.onAuthStateChanged(authUser =>
  {
    console.log("User is >>> ",authUser);
   if(authUser)
   {
   dispatch({
    type:"SET_USER",
    user:authUser
   })

   }
   else{
    //the user logged out
    dispatch({
      type:"SET_USER",
      user:null
    
    })
   }
 

  })


},[])


  
  return (
     <Router>  
    <div className="app">
    <Routes>
    <Route exact path="/" element={<><Header/><Home/></>}/>
    <Route exact path="/login" element={<><Login/></>}/>
     <Route path ="/checkout" element = {<><Header/><Checkout/></>}/> 
     <Route path ="/payment" element = {<><Header/><Elements stripe={promise} ><Payment/></Elements></>}/>
      </Routes>
     </div>
     </Router>
  );
}

export default App;
