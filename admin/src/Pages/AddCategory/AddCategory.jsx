import React, { useState } from 'react'
import "./AddCategory.css"
import assets from '../../assets/assets'
import { toast } from 'react-toastify'
import axios from 'axios'

const AddCategory = () => {

    const submission_url = 'http://localhost:4000/api/category/add'

    const [CategoryImg, setCategoryImg] = useState(assets.category_placeholder)
    const [UploadImg, setUploadImg] = useState("")
    const [CatName, setCatName] = useState("")

    const CategoryImageHandler = (event) => {
        const file = event.target.files[0]
        setUploadImg(file)
        if (file) {
            const imageURL = URL.createObjectURL(file)
            setCategoryImg(imageURL)
        }
    }

    const ChangeInputHandler = (event) => {
      setCatName(event.target.value)      
    }

    const SubmissionCategory = async (event) => {
      event.preventDefault()
      try {
        if (UploadImg && CatName) {
          const formData = new FormData()
          formData.append('image', UploadImg)
          formData.append('name', CatName)
          
          const response = await axios.post(submission_url, formData)
          toast.success(response.data.message)
          setCatName("")
          setUploadImg(null)
          setCategoryImg(assets.category_placeholder)

        } else {
          toast.error('All fields are required!')
        }
      }
      catch (error) {
        console.log(error)
        toast.error(
          error.response?.data?.message ||
          "Something went wrong"
        )
      }      
    }

  return (
    <div className='addcategory-container'>
        <h2>Add Category</h2>
        <form onSubmit={(event)=>SubmissionCategory(event)}>
            <div className='addcat-input-container'>
              <label>
                Upload Image
                <input type='file' id="uploadCategoryImage" onChange={(event)=>CategoryImageHandler(event)}/>
                <img src={CategoryImg} alt='upload item' />
              </label>
            </div>
            <div className='addcat-input-container'>
              <label>
                Category Name
                <input type='text' value={CatName} onChange={(event)=>ChangeInputHandler(event)} />
              </label>
            </div>
            <div className='form-submission-container'>
              <button>ADD</button>
            </div>
        </form>
    </div>
  )
}

export default AddCategory
