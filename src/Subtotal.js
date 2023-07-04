import React from 'react'
import './Subtotal.css'
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from './StateProvider';
import { getBasketTotal } from './reducer';
import { useNavigate } from 'react-router-dom';
function Subtotal() {
  
  const [{basket},dispatch] =useStateValue();
  const history= useNavigate();
  
  
  return (
     

    <div className='subtotal'>
        <CurrencyFormat
        renderText={(value)=>(

            <>
            <p>Subtotal({basket.length}):
            <strong>{value}</strong>
            </p>
            <small className='subtotal__gift'>
                <input type='checkbox'/>This order
                contains a gift</small>
              </>
        )}
              decimalScale={2}
              value={getBasketTotal(basket)}
              displayType={'text'}
              thousandSeparater={true}
              prefix={'€'}
              />
      <button onClick={e=>history('/payment')} >Proceed to checkout</button>
    </div>
  )
}

export default Subtotal