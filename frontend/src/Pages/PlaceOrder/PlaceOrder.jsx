import React, { useContext } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../Components/StoreContext/StoreContext'

const PlaceOrder = () => {
  const { getGrandTotalAmount, deliveryFee, CartItem } = useContext(StoreContext);
  const { cartAmount, grandTotal } = getGrandTotalAmount();
  return (
    <div className='place-order-container'>
        <div className='place-order-inner-container'>
            <div className='delivery-information'>
                <h1>Delivery Information</h1>
                <div className='delivery-info-inputs'>
                    <input type='text' placeholder='First name' />
                    <input type='text' placeholder='Last name' />
                </div>
                <div className='delivery-info-inputs'>
                    <input type='email' placeholder='Email address' />
                </div>
                <div className='delivery-info-inputs'>
                    <input type='text' placeholder='Street' />
                </div>
                <div className='delivery-info-inputs'>
                    <input type='text' placeholder='City' />
                    <input type='text' placeholder='State' />
                </div>
                <div className='delivery-info-inputs'>
                    <input type='number' placeholder='Zipcode' />
                    <input type='text' placeholder='Country' />
                </div>
                <div className='delivery-info-inputs'>
                    <input type='number' placeholder='Phone' />
                </div>
            </div>
            <div className='cart-total-summary'>
                <h1>Cart Totals</h1>
                <ul>
                    <li>
                        <div className='flx-cart-summary border'>
                            <p>SubTotal</p>
                            <span>{`$${cartAmount}`}</span>
                        </div>
                    </li>
                    <li>
                        <div className='flx-cart-summary border'>
                            <p>Delivery Fee</p>
                            <span>{`$${deliveryFee}`}</span>
                        </div>
                    </li>
                    <li>
                        <div className='flx-cart-summary'>
                            <p>Grand Total</p>
                            <span>{Object.entries(CartItem).length === 0?'$0':`$${grandTotal}`}</span>
                        </div>
                    </li>
                </ul>
                <button>PROCEED TO PAYMENT</button>
            </div>
        </div>
    </div>
  )
}

export default PlaceOrder
