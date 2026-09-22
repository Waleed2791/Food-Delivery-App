import React, { useEffect, useState } from 'react'
import { assets } from '../../assets/assets'
import './AddItem.css'
import axios from 'axios'
import { toast } from 'react-toastify';

const AddItem = () => {

  const submission_url = 'http://localhost:4000/api/foodItem/add'

  const [imageFile, setImageFile] = useState(null)

  const [ imgPreview, setimgPreview ] = useState(()=>{
    const initialImage = assets.upload_area
    return initialImage
  })

  const UploadImageHandler = (event) => {
    const file = event.target.files[0];
    setImageFile(file)
    if(file) {
      const imageUrl = URL.createObjectURL(file);
      setimgPreview(imageUrl);
    }
  }

  const [ getFormData, setgetFormData ] = useState({
      name:"",
      description: "",
      category: "Sandwich",
      price: ""
  })

  const FormSubmission = async (event) => {
    event.preventDefault();

    if(!imageFile) {
      toast.error("Image is Required!")
      return
    }

    if (getFormData.name === "" || getFormData.description === "" || getFormData.category === "" || getFormData.price === "") {
      toast.error("All fields are required!")
      return
    }

    try {
      const formData = new FormData()
      formData.append("name", getFormData.name)
      formData.append("description", getFormData.description)
      formData.append("category", getFormData.category)
      formData.append("price", getFormData.price)
      formData.append("image", imageFile)

      const response = await axios.post(submission_url, formData)
      toast.success(response.data.message)
      setgetFormData({
        name: "",
        description: "",
        category: "Sandwich",
        price: ""
      })
      setImageFile(null)
      setimgPreview(assets.upload_area)
    } catch (error) {
      console.log(error)
      toast.error(
        error.response?.data?.message ||
        "Something went wrong"
      )
    }

  }

  return (
    <div className='addItem-container'>
        <h2>Add Product</h2>
        <form onSubmit={(event) => (FormSubmission(event)) }>
            <div className='addItem-input-container'>
              <label>
                Upload Image
                <input type='file' id="uploadImage" onChange={(event)=>UploadImageHandler(event)} />
                <img src={imgPreview} alt='upload item' />
              </label>
            </div>
            <div className='addItem-input-container'>
              <label>
                Product Name
                <input type='text' value={getFormData.name} onChange={(event) => setgetFormData(prev => ({...prev, name:event.target.value}))} />
              </label>
            </div>
            <div className='addItem-input-container'>
              <label>
                Product Description
                <textarea value={getFormData.description} onChange={(event)=>setgetFormData(prev=>({...prev, description:event.target.value}))}></textarea>
              </label>
            </div>
            <div className='addItem-input-container'>
              <label>
                Product Category
                <select value={getFormData.category} onChange={(event)=>setgetFormData(prev=>({...prev, category:event.target.value}))}>
                  <option>Sandwich</option>
                  <option>Rolls</option>
                  <option>Deserts</option>
                  <option>Salad</option>
                  <option>Cake</option>
                  <option>Pure Veg</option>
                  <option>Pasta</option>
                  <option>Noodles</option>
                </select>
              </label>
            </div>
            <div className='addItem-input-container'>
              <label>
                Product Price
                <input type="number" value={getFormData.price} onChange={(event)=>{setgetFormData(prev=>({...prev, price:event.target.value}))}} />
              </label>
            </div>
            <div className='form-submission-container'>
              <button>ADD</button>
            </div>
        </form>
    </div>
  )
}

export default AddItem
