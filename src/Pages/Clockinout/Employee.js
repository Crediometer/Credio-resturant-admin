import "./Employee.css";
import { useEffect, useRef, useState } from "react";
import { FiCalendar, FiTrash } from "react-icons/fi";
import { IoAddOutline, IoFunnelOutline, IoPaperPlaneOutline, IoSearchOutline } from "react-icons/io5";
import CustomFilter from "../../Components/Filter/CustomFilter";
import EmployeeTable from "../../Components/Table/EmployeeTable";
import { LuUploadCloud } from "react-icons/lu";

const Employees = () => {
    const [show, setShow] = useState(false)
    const [show2, setShow2] = useState(false)
    const [add, setAdd] = useState(false)
    const [value, setvalue] = useState("Month")
    const [value2, setvalue2] = useState("Department")
    const [backgroundImage, setBackgroundImage] = useState(null);
    const dropdownRef = useRef(null);
    const handleToggle = () =>{
        setShow(!show)
    }
    const handleToggle2 = () =>{
        setShow2(!show2)
    }

    const handleAdd = ()=>{
        setAdd(!add)
    }
    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
          setShow(false);
        }
    };
    const handleDelete = ()=>{
        setBackgroundImage(null)
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
    const appStyle = {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: 'center'
    }
    const BannerStyleText={
        visibility: `${backgroundImage === null ? "visible" : "hidden"}`
    }
    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
          document.removeEventListener('mousedown', handleClickOutside);
        };
    },[]);
    return ( 
        <div className="employee">
            <div className="employee-body">
                {add && <div className="employee-body-left">
                    <div className="employee-table-info">
                        <h1>Add Employee</h1>
                    </div>
                    <div className="employee-image">
                        <div className="director-image" style={appStyle}>
                            <div className="director-image-edit">
                                <div className="edit-icons"  onClick={()=> document.querySelector(".image-picker").click()}>
                                    <LuUploadCloud/>
                                </div>
                                <div className="edit-icons" onClick={handleDelete}>
                                    <FiTrash/>
                                </div>
                            </div>
                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleImageChange}
                                className='image-picker'
                                hidden
                            />
                            <svg style={BannerStyleText} xmlns="http://www.w3.org/2000/svg" width="43" height="42" viewBox="0 0 43 42" fill="none">
                                <path opacity="0.4" d="M30.3207 41.3961H12.4024C5.39501 41.3961 0.6875 36.4814 0.6875 29.1653V12.2788C0.6875 4.96267 5.39501 0.0458984 12.4024 0.0458984H30.3228C37.3302 0.0458984 42.0377 4.96267 42.0377 12.2788V29.1653C42.0377 36.4814 37.3302 41.3961 30.3207 41.3961" fill="#5570F1"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M19.7952 13.8469C19.7952 16.6794 17.4899 18.9846 14.6574 18.9846C11.8229 18.9846 9.51968 16.6794 9.51968 13.8469C9.51968 11.0144 11.8229 8.70703 14.6574 8.70703C17.4899 8.70703 19.7952 11.0144 19.7952 13.8469ZM36.66 25.0375C37.1417 25.5047 37.487 26.0382 37.7144 26.6067C38.4029 28.3269 38.0452 30.3944 37.3092 32.098C36.4367 34.1263 34.7662 35.6583 32.6614 36.3282C31.7269 36.628 30.7469 36.7561 29.769 36.7561H12.4412C10.7169 36.7561 9.19107 36.355 7.94022 35.6025C7.15664 35.1311 7.01811 34.0456 7.59908 33.3385C8.57081 32.1601 9.53014 30.9774 10.4977 29.7845C12.342 27.502 13.5845 26.8404 14.9656 27.4213C15.5259 27.6612 16.0883 28.023 16.6672 28.4034C18.2095 29.4247 20.3536 30.8265 23.1778 29.3048C25.1083 28.2492 26.2289 26.4429 27.2042 24.8707L27.2239 24.839C27.2895 24.7338 27.3546 24.6286 27.4195 24.5238C27.7511 23.9879 28.0778 23.46 28.4479 22.9741C28.9068 22.3725 30.6105 20.491 32.8124 21.8308C34.2162 22.6743 35.3968 23.8156 36.66 25.0375Z" fill="#5570F1"/>
                            </svg>
                        </div>
                    </div>
                    <form>
                        <div className="password-form">
                            <label>Name*</label><br></br>
                            <input type='text' placeholder='Enter a name'></input>
                        </div>
                        <div className="password-form">
                            <label>Surname*</label><br></br>
                            <input type='text' placeholder='Enter a surname'></input>
                        </div>
                        <div className="password-form">
                            <label>Email*</label><br></br>
                            <input type='email' placeholder='Enter email'></input>
                        </div>
                        <div className="password-form">
                            <label>ID*</label><br></br>
                            <input type='text' placeholder='Enter ID'></input>
                        </div>
                        <div className="password-form">
                            <label>Department*</label><br></br>
                            <input type='text' placeholder='Enter Department'></input>
                        </div>
                        <div className="employee-form-button">
                            <button className="cancel" onClick={handleAdd}>Cancel</button>
                            <button className="save" onClick={handleAdd}>Save</button>
                        </div>
                    </form>
                </div>}
                <div className="employee-body-right" style={{ width: add ?"" : "100%" }}>
                    <div className="employee-top">
                        <div className="employee-table-info">
                            <h1>Employees List</h1>
                            <p>20 staff members</p>
                        </div>
                        <div className="employee-table-filter">
                            <div className="table-filters">
                                <div className="table-search">
                                    <IoSearchOutline/>
                                    <input
                                        type='text'
                                        placeholder='Search'
                                    >
                                    </input>
                                </div>
                                <div className="table-filter-outer">
                                    <div className="filter" onClick={handleToggle}>
                                        <FiCalendar />
                                        <p className='period'>{value}</p>
                                    </div>
                                    {show && (
                                        <div className="filter-dropdown"  ref={dropdownRef}>
                                            <p onClick={()=>{setvalue('Daily');handleToggle()}}>Daily</p>
                                            <p onClick={()=>{setvalue('Week');handleToggle()}}>Week</p>
                                            <p onClick={()=>{setvalue('Month');handleToggle()}}>Month</p>
                                            <p onClick={()=>{setvalue('Year');handleToggle()}}>Year</p>
                                        </div>
                                    )}
                                </div>
                                <div className="table-filter-outer">
                                    <div className="filter" onClick={handleToggle2}>
                                        <IoFunnelOutline/>
                                        <p className='period'>{value2}</p>
                                    </div>
                                    {show2 && (
                                        <div className="filter-dropdown"  ref={dropdownRef}>
                                            <p onClick={()=>{setvalue2('Server');handleToggle2()}}>Server</p>
                                            <p onClick={()=>{setvalue2('Bartender');handleToggle2()}}>Bartender</p>
                                            <p onClick={()=>{setvalue2('Cashier');handleToggle2()}}>Cashier</p>
                                            <p onClick={()=>{setvalue2('Kitchen');handleToggle2()}}>Kitchen</p>
                                        </div>
                                    )}
                                </div>
                                {!add && <div className="table-filter" onClick={handleAdd}>
                                    <IoAddOutline />
                                    <p>Add Employee</p>
                                </div>}
                            </div>
                        </div>
                    </div>
                    <div className="employee-table">
                        <EmployeeTable/>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Employees;