import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import {Link} from "react-router-dom";
import { useStateValue } from './StateProvider';
import { auth } from './firebase';
function Header() 
{

 const [{basket,user},dispatch]=useStateValue();
 const handleAuthenticaton=()=>
 {
 if(user)
 {
  auth.signOut();
 }
 }

  return (
    <div className='header' >
      <Link to ="/">
      <img className='header__logo' src="https://i0.wp.com/www.dafontfree.co/wp-content/uploads/2021/11/Amazon-Logo-Font-1-scaled.jpg?fit=2560%2C1578&ssl=1"/>
      </Link>
        <div className='header__search'>
               <input className='header__input__searching' type="text"></input>
                <SearchIcon className="header__searchIcon"/>
                </div>
                   
                    <div className='header__nav' >
                    <Link to ={!user&&'/login'}>
                        <div className='header__option' onClick={handleAuthenticaton}>
                          <span className='header__optionLineOne' >Hello {user?user.email:'Guest'}</span>
                          <span className='header__optionLineTwo' >{user?'Sign Out':'Sign In'}</span>
                        </div>
                        </Link>
                        <Link to ='/login' >
                        <div className='header__option'>
                        <span className='header__optionLineOne' >Returns</span>
                          <span className='header__optionLineTwo' >& Order</span>
                        </div>
                        </Link>
                     
                        <div className='header__option'>
                        <span className='header__optionLineOne' >Your</span>
                        <span className='header__optionLineTwo' >Prime</span>
                        </div>
                         <Link to="/checkout">
                        <div className="header__optionBasket">
                            <ShoppingBasketIcon/>
                            <span className='header__optionLineTwo header__basketCount' >{basket.length}</span> 
                        </div>
                        </Link>
                                             
                    </div>

    </div>
  )
}

export default Header