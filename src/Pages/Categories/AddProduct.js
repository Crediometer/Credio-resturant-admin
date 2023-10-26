import { FiChevronDown, FiClock, FiPlus, FiUploadCloud } from 'react-icons/fi';
import {BsCalendar2Week} from 'react-icons/bs';
import './AddProduct.css'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useState, Component, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
// import { Editor } from 'react-draft-wysiwyg';
// import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
const AddProduct = () => {
    const [value, setValue] = useState('');
    const [showCategory, setShowCategory] =useState(false)
    const [showSize, setShowSize] =useState(false)
    const [showType, setShowType] =useState(false)
    const [backgroundImage, setBackgroundImage] = useState(null);
    const [otherImage, setOtherImage] = useState(null);
    const dropdownRef = useRef(null);
    var toolbarOptions =  [[{ 'font': [] }],[{ 'size': ['small', false, 'large', 'huge'] }],['bold', 'italic', 'underline', 'strike'],[{ 'align': [] }]];
    const modules = {
        toolbar: toolbarOptions
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
    const handleOtherImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
        const reader = new FileReader();
        reader.onload = (event) => {
            setOtherImage(event.target.result);
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
    return ( 
        <div className="addproduct">
            <div className="categories-head">
                <p>Inventory Summary</p>
                <div className="product-button">
                    <button className="draft">Save a Draft</button>
                    <Link to="/inventory/product/view"><button>Save & Publish</button></Link>
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
                            <div className="product-input-2">
                                <p className='product-placeholder' onClick={()=>{setShowCategory(!showCategory)}}>Select Product Category</p>
                                <div onClick={()=>{setShowCategory(!showCategory)}}>
                                    <FiChevronDown/>
                                </div>
                                {showCategory && (
                                    <div className="product-dropdown" ref={dropdownRef}>
                                        <div className="product-drop">
                                            <label>Drinks</label>
                                            <input type='checkbox'></input>
                                        </div>
                                        <div className="product-drop">
                                            <label>Dinner</label>
                                            <input type='checkbox'></input>
                                        </div>
                                        <div className="product-drop">
                                            <label>Lunch</label>
                                            <input type='checkbox'></input>
                                        </div>
                                    </div>
                                )}
                               
                            </div>
                            <div className="product-input-2">
                                <p className='product-placeholder' onClick={()=>{setShowSize(!showSize)}}>Product Sizes</p>
                                <FiChevronDown/>
                                {showSize && (
                                    <div className="product-dropdown" ref={dropdownRef}>
                                        <div className="product-drop">
                                            <label>Small</label>
                                            <input type='checkbox' value="Small"></input>
                                        </div>
                                        <div className="product-drop">
                                            <label>Medium</label>
                                            <input type='checkbox' value='Medium'></input>
                                        </div>
                                        <div className="product-drop">
                                            <label>Large</label>
                                            <input type='checkbox' value="Medium"></input>
                                        </div>
                                    </div>
                                )}
                            </div>
                            <div className="product-input-3">
                                <div className="product-input-left">
                                    <p className='product-placeholder'>Large</p>
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
                                    <p className='product-placeholder'>Medium</p>
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
                                    <p className='product-placeholder'>Small</p>
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
                            <div className="product-input-2">
                                <p className='product-placeholder' onClick={()=>{setShowType(!showType)}}>Order Type</p>
                                <FiChevronDown/>
                                {showType && (
                                    <div className="product-dropdown" ref={dropdownRef}>
                                        <div className="product-drop">
                                            <label>Drinks</label>
                                            <input type='checkbox'></input>
                                        </div>
                                        <div className="product-drop">
                                            <label>Dinner</label>
                                            <input type='checkbox'></input>
                                        </div>
                                        <div className="product-drop">
                                            <label>Lunch</label>
                                            <input type='checkbox'></input>
                                        </div>
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
                                <ReactQuill modules={modules} theme="snow" value={value} onChange={setValue} />
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
                    <div className="addition">
                        <p className="addition-head">Additional Images</p>
                        <div className="addition-body">
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
                            <div className="add-upload">
                                <FiPlus/>
                            </div>
                        </div>
                        <p className='upload-text'><span><FiUploadCloud/></span>Upload Image</p>
                        <p className='upload-instruction'>Upload a cover image for your product.<br></br>File Format jpeg, png Recommened Size 600x600 (1:1)</p>
                    </div>

                </div>
            </div>
            <div className="add-on">
                <div className="add-on-top">
                    <p>Choose of Add on</p>
                    <button>Add</button>
                </div>
                <div className="add-form">
                    <div className="addon-image">
                        <p className='upload-text addon-upload-text'><span><FiUploadCloud/></span>Upload Image</p>
                        <p className='upload-instruction addon-upload-instruction'>Upload a cover image for your product.<br></br>File Format jpeg, png Recommened Size 600x600 (1:1)</p>
                    </div>
                    <div className="addon-details">
                        <div className="addon-form-top">
                            <p className='addon-top-text'>Edit add on name </p>
                            <div className="addon-button">
                                <div className="addon-save">
                                    <button>Save</button>
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
                                    placeholder='Enter Name'
                                ></input>
                            </div>
                            <div className="addon-form-1">
                                <label>Price</label>
                                <input
                                    type='text'
                                    placeholder='Enter Price'
                                ></input>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default AddProduct;