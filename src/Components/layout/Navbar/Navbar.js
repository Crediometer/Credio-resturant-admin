import './Navbar.css';
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import { IoLocationOutline, IoNotificationsOutline, IoSearchOutline } from "react-icons/io5";
import avatar from '../../../Assets/Avatar.svg'
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
const Navbar = ({isOpen}) => {
    const [show, setshow] = useState(false);
    const [location, setLocation] = useState({title:'Futa south gate', des: "No 23 off owode road futa southgate Akure, Ondo state."})
    const dropdownRef = useRef(null);
    const handleshow = () =>{
        setshow(!show)
    }
    const handleLocation = (loc)=>{
        setLocation(loc)
    }
    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
          setshow(false);
        }
    };
    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
          document.removeEventListener('mousedown', handleClickOutside);
        };
    },[]);
    return ( 
        <div className="navbar" style={{width: isOpen ? "calc(100% - 280px)" : "calc(100% - 80px)"}}>
            <div className="navbar-left">
                <IoLocationOutline/>
                <div className="navbar-location" onClick={handleshow}>
                    <div className="location-head">
                        <p className="location-head">{location.title}</p>
                        {show ? (<BiChevronUp/>) : (<BiChevronDown/>)}
                    </div>
                    <p className="location-body">{location.des}</p>
                </div>
                {show && (
                    <div className="other-locations" ref={dropdownRef}>
                        <div className="navbar-location other-location" onClick={()=>{handleshow(); handleLocation({title:"Akure South gate", des: "NO 24 south gate akure, ondo state landmark - south gate"})}}>
                            <div>
                                <p className="other-location-head">Akure South gate</p>
                            </div>
                            <p className="other-location-body">NO 24 south gate akure, ondo state landmark - south gate</p>
                        </div>
                        <div className="navbar-location other-location" onClick={()=>{handleshow(); handleLocation({title:"Akure North gate", des: "No 23 off owode road futa southgate Akure, Ondo state."})}}>
                            <div>
                                <p className="other-location-head">Akure North gate</p>
                            </div>
                            <p className="other-location-body">No 23 off owode road futa southgate Akure, Ondo state.</p>
                        </div>
                    </div>
                )}            
            </div>
            <div className="navbar-middle">
                <div className="navbar-search">
                    <IoSearchOutline/>
                    <input
                        type="text"
                        placeholder="Search product, supplier, order"
                    />
                </div>
            </div>
            <div className="navbar-right">
                <Link to="/notification"><IoNotificationsOutline/></Link>
                <img src={avatar}>
                </img>
                <p className="navbar-role">Admin</p>
            </div>
        </div>
    );
}


export default Navbar;
