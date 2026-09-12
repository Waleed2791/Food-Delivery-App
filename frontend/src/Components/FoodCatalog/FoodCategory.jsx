import React from 'react'

const FoodCategory = ({category, setCategory, item, server_port}) => {
  return (
    <div className={`foodCategoryItem ${category === item.name ? 'active' : ''}`} onClick = {() => setCategory(prev => prev === item.name?'ALL':item.name)}>
        <img src={`${server_port}/uploads/${item.image}`} />
        <p>{item.name}</p>
    </div>
  )
}

export default FoodCategory
