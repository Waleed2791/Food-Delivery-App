import React from 'react'

const FoodCategory = ({category, setCategory, item}) => {
  return (
    <div className={`foodCategoryItem ${category === item.menu_name ? 'active' : ''}`} onClick = {() => setCategory(prev => prev === item.menu_name?'ALL':item.menu_name)}>
        <img src={item.menu_image} />
        <p>{item.menu_name}</p>
    </div>
  )
}

export default FoodCategory
