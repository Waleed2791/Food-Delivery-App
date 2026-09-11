import React, { useState } from 'react'
import FoodCategory from './FoodCategory'
import './FoodCatalog.css'
import { menu_list } from '../../assets/assets'
import FoodListing from './FoodListing'

const FoodCatalog = () => {
  const [Category, setCategory] = useState('ALL')
  return (
    <div className='catalog-container' id='catalog-section'>
        <div className='food-catalog-container'>
            <h1>Explore Our Menu</h1>
            <p className='explore-paragraph'>Choose from a diverse menu featuring a delectable array of dishes. Our mission is to satisfy your <br/> cravings and elevate your dining experience, one delicious meal at a time.</p>
            <div className='foodCategories'>
                {menu_list.map((item, index)=> {
                    return (
                        <FoodCategory 
                            key={index} 
                            category={Category} 
                            setCategory={setCategory} 
                            item={item}>
                        </FoodCategory>
                    )
                })}
            </div>
        </div>
        <hr/>
        <FoodListing category={Category} ></FoodListing>
    </div>
  )
}

export default FoodCatalog
