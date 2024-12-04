import "./Clockinout.css";
import { BsCalendar4 } from "react-icons/bs";
import { IoFunnelOutline, IoSearchOutline } from "react-icons/io5";
import CustomFilter from "../../Components/Filter/CustomFilter";
import { useEffect, useRef, useState } from "react";
import ClockinoutTable from "../../Components/Table/ClockinoutTable";

const Clockinout = () => {
    const [value, setvalue] = useState("Date")
    const [value2, setvalue2] = useState("Department")
    const [show, setShow] = useState(false)
    const [show2, setShow2] = useState(false);
    
    const dropdownRef = useRef(null);
    const handleToggle = () =>{
        setShow(!show)
    }
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
                    <p className="clockinout-head">Clocking in/out</p>
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
                                <p>{value}</p>    
                            </div>
                                {show2 && (
                                    <div className="custom" ref={dropdownRef}>
                                        <CustomFilter toggle={handleToggle2} setvalue={setvalue}/>
                                    </div>
                                )}
                        </div>
                        <div className="table-filter-outer">
                            <div className="filter" onClick={handleToggle}>
                                <IoFunnelOutline/>
                                <p >{value2}</p>
                            </div>
                            {show && (
                                <div className="filter-dropdown"  ref={dropdownRef}>
                                    <p onClick={()=>{setvalue2('Server');handleToggle()}}>Server</p>
                                    <p onClick={()=>{setvalue2('Bartender');handleToggle()}}>Bartender</p>
                                    <p onClick={()=>{setvalue2('Cashier');handleToggle()}}>Cashier</p>
                                    <p onClick={()=>{setvalue2('Kitchen');handleToggle()}}>Kitchen</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                <div className="clockinout-table">
                    <ClockinoutTable/>
                </div>
            </div>
        </div>
    );
}
 
export default Clockinout;