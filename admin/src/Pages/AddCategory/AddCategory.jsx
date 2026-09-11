import React, { useState } from 'react'
import "./AddCategory.css"
import assets from '../../assets/assets'

const AddCategory = () => {

    const [CategoryImg, setCategoryImg] = useState(assets.category_placeholder)
    const [UploadImg, setUploadImg] = useState("")
    const [, setformData] = useState()

    const CategoryImageHandler = (event) => {
        const file = event.target.files[0]
        if (file) {
            const imageURL = URL.createObjectURL(file)
            setCategoryImg(imageURL)
        }
    }

    const ChangeInputHandler = (event) => {

    }

  return (
    <div className='addcategory-container'>
        <h2>Add Category</h2>
        <form>
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
                <input type='text' onchange={(event)=>ChangeInputHandler(event)}/>
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
