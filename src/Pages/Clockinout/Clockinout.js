import "./Clockinout.css";
import { BsCalendar4 } from "react-icons/bs";
import { IoSearchOutline } from "react-icons/io5";
import CustomFilter from "../../Components/Filter/CustomFilter";
import { useEffect, useRef, useState } from "react";

const Clockinout = () => {
    const [value, setvalue] = useState("Date")
    const [show2, setShow2] = useState(false);
    const dropdownRef = useRef(null);
    const handleToggle2 = () =>{
        setShow2(!show2)
    }
    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
          setShow2(false);
        }
    };
    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
          document.removeEventListener('mousedown', handleClickOutside);
        };
    },[]);
    return ( 
        <div className="clockinout">
            <div className="clockinout-body">
                <div className="clockinout-top">
                    <p>Clocking in/out</p>
                    <div className="table-filters">
                        <div className="table-search">
                            <IoSearchOutline/>
                            <input
                                type='text'
                                placeholder='Search by Staff Name'
                            >
                            </input>
                        </div>
                        <div className="filter-outer">
                            <div className="filter" onClick={handleToggle2}>
                                <BsCalendar4/>
                                <p className='period'>{value}</p>    
                            </div>
                                {show2 && (
                                    <div className="custom" ref={dropdownRef}>
                                        <CustomFilter toggle={handleToggle2} setvalue={setvalue}/>
                                    </div>
                                )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Clockinout;