import React from 'react'
import { assets } from '../../assets/assets'
import QuantitySelector from './QuantitySelector'

const FoodItem = ({item}) => {
  return (
    <div className='fooditem'>
      <div className='food-item-image-container'>
        <img src={item['image']} alt={item['name']} />
        <QuantitySelector item_id={item['_id']} ></QuantitySelector>
      </div>
      <div className='fooditem-content'>
        <div className='flx-title-rating'>
          <p className='title'>{item['name']}</p>
          <img src={assets.rating_starts} alt='rating' />
        </div>
        <p className='description'>{item['description']}</p>
        <p className='price'>{`$${item['price']}`}</p>
      </div>
    </div>
  )
}

export default FoodItem
