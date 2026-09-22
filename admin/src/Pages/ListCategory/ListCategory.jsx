import React, { useEffect, useState } from 'react'
import './ListCategory.css'
import axios from 'axios'
import { toast } from 'react-toastify'

const ListCategory = () => {

    const fetchURL = 'http://localhost:4000/api/category/list'

    const [Response, setResponse] = useState([]);

    const fetchCategories = async () => {
        try {
            const fetchResponse = await axios.get(fetchURL)
            setResponse(fetchResponse.data.response)
        } catch (error) {
            console.log(error)
            toast.error(error.data.message || "Error to fetch categories")
        }
    }

    useEffect(()=> {
        fetchCategories();
    }, [Response])


    const deleteCategory = async (id, name) => {
        confirm(`Are you sure? Delete: ${name}`)
        try {
            const removeURL = `http://localhost:4000/api/category/del/${id}`
            const response = await axios.delete(removeURL)
            fetchCategories();
            toast.success(response.data.message)
        } catch (error) {
            console.log(error)
            toast.error(error.data.message || "Error to delete category")
        }
    }

  return (
    <div className='list-category-container'>
      <h2>List Categories</h2>
        {
        Response?
            <table>
                <thead>
                <tr>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Remove</th>
                </tr>
                </thead>
                <tbody>
                {Response.map((item) => (
                    <tr key={item._id}>
                    <td><img src={`http://localhost:4000/uploads/${item.image}`} /></td>
                    <td>{item.name}</td>
                    <td className='remove' onClick={()=>deleteCategory(item._id, item.name)}>x</td>
                    </tr>
                ))}
                </tbody>
            </table>
        :"Categories Not Listed!"
        }
    </div>
  )
}

export default ListCategory
