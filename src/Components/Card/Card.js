import { IoPeopleOutline } from 'react-icons/io5';
import './Card.css';
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import { useEffect, useRef, useState } from 'react';
const Card = ({icon, title, number, value}) => {
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
        <div className="card" >
            <div className="card-top">
                <div className="card-icon">
                    {icon}
                </div>
                <div className="card-filter" onClick={handleToggle}>
                    <p>This {period}</p>
                    {show ? (<BiChevronUp/>) : (<BiChevronDown/>)}
                </div>
                {show && (
                    <div className="card-dropdown" ref={dropdownRef}>
                        <p onClick={()=>{handleToggle(); handlePeriod("Daily")}}>Daily</p>
                        <p onClick={()=>{handleToggle(); handlePeriod("Week")}}>Week</p>
                        <p onClick={()=>{handleToggle(); handlePeriod("Month")}}>Month</p>
                        <p onClick={()=>{handleToggle(); handlePeriod("Year")}}>Year</p>
                    </div>
                )}  
            </div>
            <div className="card-body">
                <p className="card-title">{title}</p>
                <p className="card-number">{number}<span className='gain'>{value}</span></p>
            </div>
        </div>
    );
}
 
export default Card;