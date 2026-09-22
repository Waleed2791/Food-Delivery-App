import React, { useContext, useState } from 'react'
import { assets } from '../../assets/assets'
import { StoreContext } from '../StoreContext/StoreContext'

const QuantitySelector = ({item_id}) => {
  const {CartItem, add_to_cart, remove_cart} = useContext(StoreContext);
  return (
    <div className='quantity-selector-container'>
        {CartItem[item_id]
        ?<div className='quantity-selector-inner-container'>
            <img src={assets.remove_icon_red} alt='remove-item' onClick={()=>remove_cart(item_id)} />
            <span className='quantity-selector-value'>{CartItem[item_id]}</span>
            <img src={assets.add_icon_green} alt='add-increment-item' onClick={()=>add_to_cart(item_id)} />
        </div>
        :<img src={assets.add_icon_white} alt='add-item' onClick={()=>add_to_cart(item_id)} /> } 
    </div>
  )
}

export default QuantitySelector
