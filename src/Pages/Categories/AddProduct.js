import { FiChevronDown, FiClock, FiPlus, FiUploadCloud } from 'react-icons/fi';
import {BsCalendar2Week} from 'react-icons/bs';
import './AddProduct.css'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useState, Component, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaTrash } from 'react-icons/fa';
import Alert from '@mui/material/Alert';
// import { Editor } from 'react-draft-wysiwyg';
// import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
const AddProduct = () => {
    const [value, setValue] = useState('');
    const [value2, setValue2] = useState('');
    const [showCategory, setShowCategory] =useState(false)
    const [showSize, setShowSize] =useState(false)
    const [showType, setShowType] =useState(false)
    const [adderror, setaddaearror] = useState('')
    const [name, setName] =useState('')
    const [price, setPrice]= useState('')
    const [backgroundImage, setBackgroundImage] = useState(null);
    const [otherImage, setOtherImage] = useState(null);
    const [addonImage, setAddOnImage] = useState(null);
    const [sizes, setSize] = useState([])
    const [category, setCategory] = useState([])
    const [type, setType] = useState([])
    const dropdownRef = useRef(null);
    const [formData, setFormData] = useState([]); // State to store form data
    const [formFields, setFormFields] = useState({}); 
    const [imageData, setImageData] = useState([]); // State to store form data
    const [imageFields, setImageFields] = useState({}); 
    var toolbarOptions =  [[{ 'font': [] }],[{ 'size': ['small', false, 'large', 'huge'] }],['bold', 'italic', 'underline', 'strike'],[{ 'align': [] }]];
    const modules = {
        toolbar: toolbarOptions
    }
    const optionsize = ['Large', 'Medium', 'Small'];
    const optionCategory =["Breakfast", "Dinner", 'Lunch']
    const optionType =["Breakfast", "Dinner", 'Lunch']
    const handlesize = (value)=>{
        const isSelected = sizes.indexOf(value) !== -1;

        if (isSelected) {
          // If the value is selected, remove it
          setSize(sizes?.filter((item) => item !== value));
        } else {
          // If it's not selected, add it to the selectedValues array
          setSize([...sizes, value]);
        }
    }
    const handleCartegory = (value)=>{
        const isSelected = category.indexOf(value) !== -1;

        if (isSelected) {
          // If the value is selected, remove it
          setCategory(category?.filter((item) => item !== value));
        } else {
          // If it's not selected, add it to the selectedValues array
          setCategory([...category, value]);
        }
    }
     const handleType = (value)=>{
        const isSelected = type.indexOf(value) !== -1;

        if (isSelected) {
          // If the value is selected, remove it
          setType(type?.filter((item) => item !== value));
        } else {
          // If it's not selected, add it to the selectedValues array
          setType([...type, value]);
        }
    }
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
        const reader = new FileReader();
        reader.onload = (event) => {
            setBackgroundImage(event.target.result);
        };
        reader.readAsDataURL(file);
        }
    };
    const handleImageDelete = ()=>{
        setBackgroundImage(null);
    }
    const handleOtherImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
        const reader = new FileReader();
        reader.onload = (event) => {
            setOtherImage(event.target.result);
            setImageFields({...imageFields, ...{otherImage:event.target.result}})
        };
        reader.readAsDataURL(file);
        }
    };
    const handleOtherImageDelete = (index) =>{
        const updatedData = imageData.filter((_, i) => i !== index);
        setImageData(updatedData);
    }
    const handleAddOnImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
        const reader = new FileReader();
        reader.onload = (event) => {
            setAddOnImage(event.target.result);
            console.log(addonImage)
            setFormFields({...formFields, ...{addonImage:event.target.result}})
        };
        reader.readAsDataURL(file);
        }
    };
    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
          setShowCategory(false);
          setShowSize(false);
          setShowType(false);
        }
    };
    // Handle form field input changes
    const handlename = (e) =>{
        const value = e.target.value
        setName(value)
        setFormFields({...formFields, ...{name}})
    }
    const handleprice = (e) =>{
        const value = e.target.value
        setPrice(value)
        setFormFields({...formFields, ...{price}})
    }
    const handleSave = () => {
        if (formFields.name && formFields.price && formFields.addonImage) {
            setFormData((prevData) => [...prevData, formFields]);
            setAddOnImage(null)
            setName('')
            setPrice("")
            setFormFields({})
            setaddaearror('')
        }else{
            console.log("no")
            if(!formFields.addonImage){
                setaddaearror("Please Import an Image")
            }
        }    
    };
    const handleImage = () => {
        console.log(imageFields)
        if (imageFields.otherImage) {
            setImageData((prevData) => [...prevData, imageFields]);
            document.querySelector(".other-picker").click()
            setOtherImage(null)
            setImageFields({})
        }else{
            console.log("no")
        }    
    };
    // Handle deleting a form entry
    const handleDelete = (index) => {
        const updatedData = formData.filter((_, i) => i !== index);
        setFormData(updatedData);
    };
    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
          document.removeEventListener('mousedown', handleClickOutside);
        };
    },[]);
    const appStyle = {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
    }
    const otherStyle = {
        backgroundImage: `url(${otherImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
    }
    const addonStyle = {
        backgroundImage: `url(${addonImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
    }
    const outlinestyle = {
        borderColor: `${showCategory ? "#629FF4" : ""}`
    }
    const outlinestyle2 = {
        borderColor: `${showSize ? "#629FF4" : ""}`
    }
    const outlinestyle3 = {
        borderColor: `${showType ? "#629FF4" : ""}`
    }
    const logoStyleText={
        visibility: `${backgroundImage !== null ? "visible" : "hidden"}`
    }
    const moreStyleText={
        visibility: `${imageData != [] ? "visible" : "hidden"}`
    }
    return ( 
        <div className="addproduct">
            <div className="categories-head">
                <p>Inventory Summary</p>
                <div className="product-button">
                    <Link to="/dashboard/inventory/product/draft"><button className="draft">Save a Draft</button></Link>
                    <Link to="/dashboard/inventory/product/view"><button>Save & Publish</button></Link>
                </div>
            </div>
            <div className="product-body">
                <div className="product-details">
                    <form>
                        <div className="product-details-left">
                            <div className="product-input-1">
                                <input
                                    type='text'
                                    placeholder='Product Name'
                                    required
                                ></input>
                            </div>
                            <div className="product-input-2" style={outlinestyle}>
                            <p className='product-placeholder' onClick={()=>{setShowCategory(!showCategory)}}>
                                    {(category.length === 0) ? "Select Product Category" : (
                                        <p className='product-placeholder product-placeholder-list'>
                                        {category.map((selectedValue) => {
                                            return(
                                                <p>{selectedValue}</p>
                                            )
                                        })}
                                        </p>
                                    )}
                                   
                                </p>
                                <div onClick={()=>{setShowCategory(!showCategory)}}>
                                    <FiChevronDown/>
                                </div>
                                {showCategory && (
                                    <div className="product-dropdown" ref={dropdownRef}>
                                        {optionCategory.map((size)=>{
                                            return(
                                                <div className="product-drop" key={size}>
                                                    <label>{size}</label>
                                                    <input 
                                                    type='checkbox' 
                                                    value={size}
                                                    checked={category?.includes(size)}
                                                    onChange={() => handleCartegory(size)}
                                                    ></input>
                                                </div>
                                            )
                                        })}
                                    </div>
                                )}
                               
                            </div>
                            <div className="product-input-2" style={outlinestyle2}>
                                <p className='product-placeholder' onClick={()=>{setShowSize(!showSize)}}>
                                    {(sizes.length === 0) ? "Product Size" : (
                                        <p className='product-placeholder product-placeholder-list'>
                                        {sizes.map((selectedValue) => {
                                            return(
                                                <p>{selectedValue}</p>
                                            )
                                        })}
                                        </p>
                                    )}
                                   
                                </p>
                                <div onClick={()=>{setShowSize(!showSize)}}>
                                    <FiChevronDown/>
                                </div>
                                
                                {showSize && (
                                    <div className="product-dropdown" ref={dropdownRef}>
                                        {optionsize.map((size)=>{
                                            return(
                                                <div className="product-drop" key={size}>
                                                    <label>{size}</label>
                                                    <input 
                                                    type='checkbox' 
                                                    value={size}
                                                    checked={sizes?.includes(size)}
                                                    onChange={() => handlesize(size)}
                                                    ></input>
                                                </div>
                                            )
                                        })}
                                        
                                    </div>
                                )}
                            </div>
                            <div className="product-input-3">
                                <div className="product-input-left">
                                    <p className='product-placeholder product-placeholder-1'>Large</p>
                                </div>
                                <div className="product-input-right">
                                    <input
                                        type='text'
                                        placeholder='Enter Price for Large'
                                        required
                                    ></input>
                                </div>
                            </div>
                            <div className="product-input-3">
                                <div className="product-input-left">
                                    <p className='product-placeholder product-placeholder-1' >Medium</p>
                                </div>
                                <div className="product-input-right">
                                    <input
                                        type='text'
                                        placeholder='Enter Price for Medium'
                                        required
                                    ></input>
                                </div>
                            </div>
                            <div className="product-input-3">
                                <div className="product-input-left">
                                    <p className='product-placeholder product-placeholder-1'>Small</p>
                                </div>
                                <div className="product-input-right">
                                    <input
                                        type='text'
                                        placeholder='Enter Price for Small'
                                        required
                                    ></input>
                                </div>
                            </div>
                            <div className="product-input-4">
                                <div className="product-input-1">
                                    <input
                                        type='number'
                                        placeholder='Selling price'
                                        required
                                    ></input>
                                </div>
                                <div className="product-input-1">
                                    <input
                                        type='number'
                                        placeholder='Cost price'
                                        required
                                    ></input>
                                </div>
                            </div>
                            <div className="product-input-1">
                                <input
                                    type='number'
                                    placeholder='Quantity in Stock'
                                    required
                                ></input>
                            </div>
                            <div className="product-input-2" style={outlinestyle3}>
                            <p className='product-placeholder' onClick={()=>{setShowType(!showType)}}>
                                    {(type.length === 0) ? "Other Type" : (
                                        <p className='product-placeholder product-placeholder-list'>
                                        {type.map((selectedValue) => {
                                            return(
                                                <p>{selectedValue}</p>
                                            )
                                        })}
                                        </p>
                                    )}
                                   
                                </p>
                                <div onClick={()=>{setShowType(!showType)}}>
                                    <FiChevronDown/>
                                </div>
                                {showType && (
                                    <div className="product-dropdown" ref={dropdownRef}>
                                       {optionType.map((size)=>{
                                            return(
                                                <div className="product-drop" key={size}>
                                                    <label>{size}</label>
                                                    <input 
                                                    type='checkbox' 
                                                    value={size}
                                                    checked={type?.includes(size)}
                                                    onChange={() => handleType(size)}
                                                    ></input>
                                                </div>
                                            )
                                        })}
                                    </div>
                                )}
                            </div>
                            <div className="product-discount">
                                <p>Discount</p>
                                <div className="add-discount">
                                    <p>Add Discount</p>
                                </div>
                            </div>
                            <div className="product-input-1">
                                <input
                                    type='text'
                                    placeholder='Enter discount percentage %'
                                    required
                                ></input>
                            </div>
                        </div>
                        <div className="product-details-right">
                            <div className="product-description">
                                <p className='product-des-title'>Product Long Description</p>
                                <div >
                                <ReactQuill modules={modules} theme="snow" value={value} onChange={setValue} />
                                </div>  
                                <p className='product-instruction'>Add a long description for your product</p>
                            </div>
                            <div className="return-policy">
                                <div className="product-discount">
                                    <p>Return Policy</p>
                                    <div className="add-discount">
                                        <p>Add Discount</p>
                                    </div>
                                </div>
                                <ReactQuill modules={modules} theme="snow" value={value2} onChange={setValue2} />
                                <p className='product-instruction'>Helper text goes here</p>
                            </div>
                            <div className="date-added">
                                <p className="date-added-top">Date Added</p>
                                <div className="date-added-block">
                                    <div className="date">
                                        <div className="statement-date">
                                            {/* <BsCalendar2Week/> */}
                                            <input
                                                type='date'
                                                placeholder='12/12/2020'
                                                className='datefield'
                                                onFocus={(e) => (e.target.type = "date")}
                                                // onBlur={(e) => {(e.target.type = "text");}}
                                                required
                                            ></input>
                                        </div>  
                                    </div>
                                    <div className="time">
                                        <div className="statement-date">
                                            {/* <FiClock/> */}
                                            <input
                                                type='time'
                                                placeholder='12:00 PM'
                                                className='datefield'
                                                onFocus={(e) => (e.target.type = "time")}
                                                // onBlur={(e) => {(e.target.type = "text");}}
                                                required
                                            ></input>
                                        </div>  
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="product-upload">
                    <div className="main-upload-outer">
                        <div className='upload-delete' onClick={handleImageDelete} style={logoStyleText}>
                                <FaTrash/>
                        </div>
                        <div className="main-upload" style={appStyle} onClick={()=> document.querySelector(".image-picker").click()}>
                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleImageChange}
                                className='image-picker'
                                hidden
                            />
                            <svg xmlns="http://www.w3.org/2000/svg" width="43" height="42" viewBox="0 0 43 42" fill="none">
                                <path opacity="0.4" d="M30.3207 41.3961H12.4024C5.39501 41.3961 0.6875 36.4814 0.6875 29.1653V12.2788C0.6875 4.96267 5.39501 0.0458984 12.4024 0.0458984H30.3228C37.3302 0.0458984 42.0377 4.96267 42.0377 12.2788V29.1653C42.0377 36.4814 37.3302 41.3961 30.3207 41.3961" fill="#5570F1"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M19.7952 13.8469C19.7952 16.6794 17.4899 18.9846 14.6574 18.9846C11.8229 18.9846 9.51968 16.6794 9.51968 13.8469C9.51968 11.0144 11.8229 8.70703 14.6574 8.70703C17.4899 8.70703 19.7952 11.0144 19.7952 13.8469ZM36.66 25.0375C37.1417 25.5047 37.487 26.0382 37.7144 26.6067C38.4029 28.3269 38.0452 30.3944 37.3092 32.098C36.4367 34.1263 34.7662 35.6583 32.6614 36.3282C31.7269 36.628 30.7469 36.7561 29.769 36.7561H12.4412C10.7169 36.7561 9.19107 36.355 7.94022 35.6025C7.15664 35.1311 7.01811 34.0456 7.59908 33.3385C8.57081 32.1601 9.53014 30.9774 10.4977 29.7845C12.342 27.502 13.5845 26.8404 14.9656 27.4213C15.5259 27.6612 16.0883 28.023 16.6672 28.4034C18.2095 29.4247 20.3536 30.8265 23.1778 29.3048C25.1083 28.2492 26.2289 26.4429 27.2042 24.8707L27.2239 24.839C27.2895 24.7338 27.3546 24.6286 27.4195 24.5238C27.7511 23.9879 28.0778 23.46 28.4479 22.9741C28.9068 22.3725 30.6105 20.491 32.8124 21.8308C34.2162 22.6743 35.3968 23.8156 36.66 25.0375Z" fill="#5570F1"/>
                            </svg>
                            <p className='upload-text'><span><FiUploadCloud/></span>Upload Image</p>
                            <p className='upload-instruction'>Upload a cover image for your product.<br></br>File Format jpeg, png Recommened Size 600x600 (1:1)</p>
                        </div>
                    </div>
                    
                    <div className="addition">
                        <p className="addition-head">Additional Images</p>
                        <div className="addition-body">
                            {imageData.map((entry, index) => (
                                <div className="main-upload-outer">
                                    <div className='upload-delete' onClick={() => handleOtherImageDelete(index)} style={moreStyleText}>
                                        <FaTrash/>
                                    </div>
                                    <div className="more-upload" style={{backgroundImage: `url(${entry.otherImage})`, backgroundSize: "cover", backgroundRepeat: "no-repeat",}}  onClick={()=> document.querySelector(".other-picker").click()}>
                                        <input
                                            type="file"
                                            accept="image/*"
                                            onChange={handleOtherImageChange}
                                            className='other-picker'
                                            hidden
                                        />
                                        
                                        <svg xmlns="http://www.w3.org/2000/svg" width="43" height="42" viewBox="0 0 43 42" fill="none">
                                            <path opacity="0.4" d="M30.3207 41.3961H12.4024C5.39501 41.3961 0.6875 36.4814 0.6875 29.1653V12.2788C0.6875 4.96267 5.39501 0.0458984 12.4024 0.0458984H30.3228C37.3302 0.0458984 42.0377 4.96267 42.0377 12.2788V29.1653C42.0377 36.4814 37.3302 41.3961 30.3207 41.3961" fill="#5570F1"/>
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M19.7952 13.8469C19.7952 16.6794 17.4899 18.9846 14.6574 18.9846C11.8229 18.9846 9.51968 16.6794 9.51968 13.8469C9.51968 11.0144 11.8229 8.70703 14.6574 8.70703C17.4899 8.70703 19.7952 11.0144 19.7952 13.8469ZM36.66 25.0375C37.1417 25.5047 37.487 26.0382 37.7144 26.6067C38.4029 28.3269 38.0452 30.3944 37.3092 32.098C36.4367 34.1263 34.7662 35.6583 32.6614 36.3282C31.7269 36.628 30.7469 36.7561 29.769 36.7561H12.4412C10.7169 36.7561 9.19107 36.355 7.94022 35.6025C7.15664 35.1311 7.01811 34.0456 7.59908 33.3385C8.57081 32.1601 9.53014 30.9774 10.4977 29.7845C12.342 27.502 13.5845 26.8404 14.9656 27.4213C15.5259 27.6612 16.0883 28.023 16.6672 28.4034C18.2095 29.4247 20.3536 30.8265 23.1778 29.3048C25.1083 28.2492 26.2289 26.4429 27.2042 24.8707L27.2239 24.839C27.2895 24.7338 27.3546 24.6286 27.4195 24.5238C27.7511 23.9879 28.0778 23.46 28.4479 22.9741C28.9068 22.3725 30.6105 20.491 32.8124 21.8308C34.2162 22.6743 35.3968 23.8156 36.66 25.0375Z" fill="#5570F1"/>
                                        </svg>
                                        <p className='upload-text'><span><FiUploadCloud/></span>Upload Image</p>
                                    </div>
                                </div>
                                 
                            ))}
                            <div className="more-upload" style={otherStyle} onClick={()=> document.querySelector(".other-picker").click()}>
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={handleOtherImageChange}
                                    className='other-picker'
                                    hidden
                                />
                                <svg xmlns="http://www.w3.org/2000/svg" width="43" height="42" viewBox="0 0 43 42" fill="none">
                                    <path opacity="0.4" d="M30.3207 41.3961H12.4024C5.39501 41.3961 0.6875 36.4814 0.6875 29.1653V12.2788C0.6875 4.96267 5.39501 0.0458984 12.4024 0.0458984H30.3228C37.3302 0.0458984 42.0377 4.96267 42.0377 12.2788V29.1653C42.0377 36.4814 37.3302 41.3961 30.3207 41.3961" fill="#5570F1"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M19.7952 13.8469C19.7952 16.6794 17.4899 18.9846 14.6574 18.9846C11.8229 18.9846 9.51968 16.6794 9.51968 13.8469C9.51968 11.0144 11.8229 8.70703 14.6574 8.70703C17.4899 8.70703 19.7952 11.0144 19.7952 13.8469ZM36.66 25.0375C37.1417 25.5047 37.487 26.0382 37.7144 26.6067C38.4029 28.3269 38.0452 30.3944 37.3092 32.098C36.4367 34.1263 34.7662 35.6583 32.6614 36.3282C31.7269 36.628 30.7469 36.7561 29.769 36.7561H12.4412C10.7169 36.7561 9.19107 36.355 7.94022 35.6025C7.15664 35.1311 7.01811 34.0456 7.59908 33.3385C8.57081 32.1601 9.53014 30.9774 10.4977 29.7845C12.342 27.502 13.5845 26.8404 14.9656 27.4213C15.5259 27.6612 16.0883 28.023 16.6672 28.4034C18.2095 29.4247 20.3536 30.8265 23.1778 29.3048C25.1083 28.2492 26.2289 26.4429 27.2042 24.8707L27.2239 24.839C27.2895 24.7338 27.3546 24.6286 27.4195 24.5238C27.7511 23.9879 28.0778 23.46 28.4479 22.9741C28.9068 22.3725 30.6105 20.491 32.8124 21.8308C34.2162 22.6743 35.3968 23.8156 36.66 25.0375Z" fill="#5570F1"/>
                                </svg>
                                <p className='upload-text'><span><FiUploadCloud/></span>Upload Image</p>
                            </div>
                            <div className="add-upload" onClick={() => {handleImage(); }}>
                                <FiPlus/>
                            </div>
                        </div>
                        {/* <p className='upload-text'><span><FiUploadCloud/></span>Upload Image</p>
                        <p className='upload-instruction'>Upload a cover image for your product.<br></br>File Format jpeg, png Recommened Size 600x600 (1:1)</p> */}
                    </div>

                </div>
            </div>
            <div className="add-on">
                <div className="add-on-top">
                    <p>Choose of Add on</p>
                    <button onClick={() => handleSave()}>Add</button>
                </div>
                <form >
                {adderror !== '' ? (<Alert severity="error">{adderror}</Alert>) : <></>}
                <div className="add-form">
                    <div className="addon-image" style={addonStyle} onClick={()=> document.querySelector(".addon-picker").click()}>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleAddOnImageChange}
                            className='addon-picker'
                            required
                            hidden
                        />
                        <p className='upload-text addon-upload-text'><span><FiUploadCloud/></span>Upload Image</p>
                        <p className='upload-instruction addon-upload-instruction'>Upload a cover image for your product.<br></br>File Format jpeg, png Recommened Size 600x600 (1:1)</p>
                    </div>
                    <div className="addon-details">
                        <div className="addon-form-top">
                            <p className='addon-top-text'>Edit add on name </p>
                            <div className="addon-button">
                                <div className="addon-save">
                                    <button onClick={() => handleSave()}>Save</button>
                                </div>
                                <div className="addon-edit">
                                    <button>Edit</button>
                                </div>
                            </div>
                        </div> 
                        <div className="addon-body">
                                <div className="addon-form-1">
                                    <label>Name</label>
                                    <input
                                        type='text'
                                        name="name" 
                                        placeholder='Enter Name'
                                        value={name}
                                        onChange={handlename}
                                        onBlur={handlename}
                                        required
                                    ></input>
                                </div>
                                <div className="addon-form-1">
                                    <label>Price</label>
                                    <input
                                        type='text'
                                        name='price'
                                        placeholder='Enter Price'
                                        value={price}
                                        onChange={handleprice}
                                        onBlur={handleprice}
                                        required
                                    ></input>
                                </div>
                           
                        </div>
                    </div>
                   
                </div>
                </form>
                {formData.map((entry, index) => {
                    return(
                        <div className="add-form">
                        <div className="addon-image" style={{backgroundImage: `url(${entry.addonImage})`, backgroundSize: "cover", backgroundRepeat: "no-repeat",}} onClick={()=> document.querySelector(".addon-picker").click()}>
                            
                        </div>
                        <div className="addon-details">
                            <div className="addon-form-top">
                                <div></div>
                                <div className="addon-button addon-button-delete">
                                    <div className="addon-delete">
                                        <button  onClick={() => handleDelete(index)}>Delete</button>
                                    </div>
                                </div>
                            </div> 
                            <div className="addon-body">
                                <p>Name: <span>{entry.name}</span></p>
                                <p>Price: <span>NGN {entry.price}</span></p>
                            </div>
                        </div>
                    </div>
                    )
                })}
            </div>
        </div>
    );
}
 
export default AddProduct;