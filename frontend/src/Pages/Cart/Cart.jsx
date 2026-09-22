import React, { useContext } from 'react'
import './Cart.css'
import { StoreContext } from '../../Components/StoreContext/StoreContext'
import { assets } from '../../assets/assets'
import QuantitySelector from '../../Components/FoodCatalog/QuantitySelector'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Cart = () => {
  const { server_port_url, food_list, CartItem, Remove_whole_item_form_cart, getGrandTotalAmount, deliveryFee } = useContext(StoreContext)
  const { cartAmount, grandTotal } = getGrandTotalAmount();

  const navigate = useNavigate();
  const handleCheckout = () => {
    if(Object.entries(CartItem).length === 0) {
        toast.error('Your cart is empty!');
        return;
    }
    navigate('/PlaceOrder')
  }

  return (
    <div className='cart-outer-container'>
        <div className='cart-items-container'>
            {Object.entries(CartItem).length === 0?
            <h3>Your cart is empty!</h3>:
            <div className='table-wrap'>
                <table>
                    <thead>
                        <tr>
                            <th>Item</th>
                            <th>Title</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total</th>
                            <th>Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Object.entries(CartItem).map(([item_id, qty], index)=>{
                                const iteminfo = food_list.find((product) => {return product._id === item_id})
                                return (
                                    <tr key={item_id}>
                                        <td className='cartitem-image'><img src={`${server_port_url}/uploads/${iteminfo.image}`} /></td>
                                        <td className='cartitem-name'>{iteminfo.name}</td>
                                        <td className='cartitem-price'>{`$${iteminfo.price}`}</td>
                                        <td className='cartitem-qty'><QuantitySelector item_id={iteminfo._id} ></QuantitySelector></td>
                                        <td className='cartitem-total-price'>{`$${iteminfo.price*qty}`}</td>
                                        <td className='cartitem-remove'><img src={assets.cross_icon} alt="remove" onClick={()=>{Remove_whole_item_form_cart (iteminfo._id)}} /></td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>   
            </div>         
            }

            <div className='total-cart-price-container'>
                <div className='cart-totals'>
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
                    <button onClick={handleCheckout}>PROCEED TO CHECKOUT</button>
                </div>
                <div className='promo-container'>
                    <p>If you have a promo code. Enter it here</p>
                    <div className='promo-input'>
                        <input type="text" placeholder='promo code' />
                        <button>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Cart
