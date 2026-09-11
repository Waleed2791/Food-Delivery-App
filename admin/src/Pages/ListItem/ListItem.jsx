import React, { useEffect, useState } from 'react'
import './ListItem.css'
import axios from 'axios'
import { toast } from 'react-toastify'

const ListItem = () => {

  const getListURL = 'http://localhost:4000/api/foodItem/list'

  const [ getResponse, setResponse ] = useState([]);

  const getAxiosList = async () => {
    
    try {
      const listItems = await axios.get(getListURL)
      setResponse(listItems.data.data)
    } catch (error) {
      console.log(error)
    }

  }

  useEffect(() => {
    getAxiosList()
  }, [])


  const deleteItem = async (id, name) => {
    confirm("Are you sure? Delete: "+name)

    try {
      const removeItemURL = `http://localhost:4000/api/foodItem/delete/${id}`
      const response = await axios.delete(removeItemURL);
      getAxiosList();
      toast.success(response.data.message);
    } catch(error) {
      console.log(error);
      toast.error("Something went wrong!");
    }

  }

  return (
    <div className='list-item-container'>
      <h2>List Items</h2>
      <table>
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Category</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {getResponse.map((item) => (
            <tr key={item._id}>
              <td><img src={`http://localhost:4000/uploads/${item.image}`} /></td>
              <td>{item.name}</td>
              <td>{item.description}</td>
              <td>{item.price}</td>
              <td>{item.category}</td>
              <td className='remove' onClick={()=>deleteItem(item._id, item.name)}>x</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ListItem
