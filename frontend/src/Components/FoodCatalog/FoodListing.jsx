import React, { useContext } from 'react'
import { StoreContext } from '../StoreContext/StoreContext'
import FoodItem from './FoodItem'

const FoodListing = ({category}) => {
  const { food_list } = useContext(StoreContext)
  return (
    <div className='food-listing'>
      <h1>Top Dishes Near You</h1>
      <div className="food-items-container">
        {food_list.map((item, index) => {
            if(category === 'ALL' || item.category === category) {
                return (
                    <FoodItem
                        key={index}
                        item={item}>
                    </FoodItem>
                )
            }
        })}
      </div>
    </div>
  )
}

export default FoodListing
