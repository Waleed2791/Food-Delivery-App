import React, { useContext, useState } from 'react'
import FoodCategory from './FoodCategory'
import './FoodCatalog.css'
import FoodListing from './FoodListing'
import { StoreContext } from '../StoreContext/StoreContext'

const FoodCatalog = () => {
  const { menu_list, server_port_url } = useContext(StoreContext)
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
                            item={item}
                            server_port={server_port_url}>
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
