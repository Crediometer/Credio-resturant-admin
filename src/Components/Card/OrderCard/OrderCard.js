import { BsHandbag } from 'react-icons/bs';
import './OrderCard.css'
import { BiChevronDown, BiChevronUp } from 'react-icons/bi';
import { useEffect, useRef, useState } from 'react';
const OrderCard = () => {
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
        <div className="order-card">
            <div className="customer-card-top">
                <div className="order-card-icon">
                    <BsHandbag/> 
                </div>
                <p className="order-filter"onClick={handleToggle}>This {period}{show ? (<BiChevronUp/>) : (<BiChevronDown/>)}</p>
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
                <div className="order-data">
                    <p>All Orders</p>
                    <h2>350</h2>
                </div>
                <div className="order-data">
                    <p>Active</p>
                    <h2>316<span>86%</span></h2>
                </div>
                <div className="order-data">
                    <p>Out of production</p>
                    <h2>0<span>+0.00%</span></h2>
                </div>
            </div>
        </div>
    );
}
 
export default OrderCard;