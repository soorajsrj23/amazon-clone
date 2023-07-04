import React from 'react'
import './Checkout.css'
import CheckoutProduct from './CheckoutProduct'

import { useStateValue } from './StateProvider'
import Subtotal from './Subtotal'

function Checkout()
 
{
  const [{basket,user},dispatch] = useStateValue();
  return (
    <div className='checkout'>
    <div className='checkout__left'>
      <img className='checkout__ad' src='https://images-eu.ssl-images-amazon.com/images/G/31/img19/Audio/Jupiter-Wave1/headers/PEA_Speaker_Header_1500x300._CB452737627_.jpg'/>
          <div>
          <h3>Hello,{user?user.email:'Guest'}</h3>
          <h2 className='checkout__title'>Your Shoppping Basket</h2>   
          {basket.map(item=>
          <CheckoutProduct
          id={item.id}
          title={item.title}
          image={item.image}
          price={item.price}
          rating={item.rating}
          />
          )}



          </div>
          </div>
               
               <div className='checkout__right'>
                <Subtotal/>
               


                </div>

      </div>
  )
} 

export default Checkout 