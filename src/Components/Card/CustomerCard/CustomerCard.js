import { FiChevronDown } from 'react-icons/fi';
import './CustomerCard.css'
import { HiOutlineUsers } from 'react-icons/hi';
import { BiChevronDown, BiChevronUp } from 'react-icons/bi';
import { useEffect, useRef, useState } from 'react';
const CustomerCard = () => {
    const [show, setShow] = useState(false);
    const [period,setPeriod] = useState('Month');
    const dropdownRef = useRef(null);
    const handleToggle = () =>{
        setShow(!show)
    }
     const handlePeriod = (type) =>{
        setPeriod(type)
    }
    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
          setShow(false);
        }
      };
    
      useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
          document.removeEventListener('mousedown', handleClickOutside);
        };
      }, []);
    return ( 
        <div className="customer-card">
            <div className="customer-card-top">
                <div className="customer-card-icon">
                    <HiOutlineUsers/>
                </div>
                <p onClick={handleToggle}>This {period}{show ? (<BiChevronUp/>) : (<BiChevronDown/>)}</p>
                {show && (
                    <div className="card-dropdown" ref={dropdownRef}>
                        <p onClick={()=>{handleToggle(); handlePeriod("Daily")}}>Daily</p>
                        <p onClick={()=>{handleToggle(); handlePeriod("Week")}}>Week</p>
                        <p onClick={()=>{handleToggle(); handlePeriod("Month")}}>Month</p>
                        <p onClick={()=>{handleToggle(); handlePeriod("Year")}}>Year</p>
                    </div>
                )}  
            </div>
            
            <div className="order-card-body">
                <div className="customer-data">
                    <p>Customers</p>
                    <h2>23</h2>
                </div>
                <div className="customer-data">
                    <p>Catgory</p>
                    <h2>9</h2>
                </div>
                <div className="customer-data">
                    <p>Active category</p>
                    <h2>3</h2>
                </div>
            </div>
        </div>
    );
}
 
export default CustomerCard;