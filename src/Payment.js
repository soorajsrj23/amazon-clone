
import React, { useEffect, useState } from 'react'
import './Payment.css'
import CheckoutProduct from './CheckoutProduct'
import { useStateValue } from './StateProvider'
import {Link} from 'react-router-dom'
import {CardElement,useStripe,useElements} from '@stripe/react-stripe-js'
import CurrencyFormat from 'react-currency-format'
import { getBasketTotal } from './reducer'
import { async } from '@firebase/util'
import {useNavigate} from 'react-router-dom'
import axios from './axios'


function Payment()
 
{

  const history = useNavigate();
  const [{user,basket},dispatch] =useStateValue();
  
  const stripe =useStripe();
  const elements = useElements();
 
  const [error,setErorr] =useState(null);
  const [disabled,setDisabled ] =useState(true);
  const [succeeded,setSucceeded] =useState(null);
  const [processing,setProcessing] =useState("");
  const [clientSecret,getClientSecret] = useState(true);

useEffect(()=>{
 
  const getClientSecret = async () =>{
    const response = await axios({
      method :'post',
      //stripe expects something in currency submit
      url:`/payment/create?total=${getBasketTotal(basket) * 100 } `
    })  
    getClientSecret(response.data.clientSecret)
  
  }


},[basket])


  const handleSubmit = async (event)=>
  {
    event.preventDefault();
    setProcessing(true);
    
    const payload = await stripe.confirmCardPayment(clientSecret,{
      payment_method:{
        card :elements.getElement(CardElement)
      }
    }).then(({paymentIntent})=>{

    //payment intent configuaration

    setSucceeded(true);
    setErorr(null);
    setProcessing(false);

    history.replace('/orders')
  
    })
  }
  
  const handleChange = event=>
  {
  setDisabled(event.empty);
  setErorr(event.error ? event.error.message:"");
  }
  
  return (
    <div className='payment'>
       <div className='payment__container'>
         <h1>Checkout(<Link to='/checkout'>{basket.length} items</Link>)</h1>


          <div className='payment__section'>
           <div className='payment__title'>
            <h3>Delivery Address</h3>
           </div>
           <div className='payment__address'>
            <h3>{user?user.email:''}</h3>
           <p>ABC House</p>
           <p>valanchery po</p>
           <p>Malappuram</p>
           </div>

          </div>
         <div className='payment__section'>
         <div className='payment__title'>
            <h3>Review</h3>
           </div>
           <div className='payment__items'>
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
          <div className='payment__section'>
         <div className='payment__title'>
          <h3>Payment Method</h3>
         </div>
        <div className='payment__details'>
               <form onSubmit={handleSubmit}>
                <CardElement onChange = {handleChange}/>
                <div className='payment__priceContainer'>
                <CurrencyFormat
        renderText={(value)=>(

            <h3>order total :{value} </h3>
            
            
        )}
              decimalScale={2}
              value={getBasketTotal(basket)}
              displayType={'text'}
              thousandSeparater={true}
              prefix={'€'}
               />
              <button onClick={processing ||disabled || succeeded }>
                <span>{processing ?<p>processing...</p>:"Buy now"} </span>
                
                   </button>
                   
              </div>
              {error &&<div>{error}</div>}
               </form>
            </div>
          </div>
      </div>
    </div>
        
  )
}

export default Payment   