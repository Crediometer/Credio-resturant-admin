import './Navbar.css';
import { BiChevronDown } from "react-icons/bi";
import { IoLocationOutline, IoNotificationsOutline, IoSearchOutline } from "react-icons/io5";
import avatar from '../../../Assets/Avatar.svg'
import { useState } from 'react';
const Navbar = ({isOpen}) => {
    const [show, setshow] = useState(false);
    const handleshow = () =>{
        setshow(!show)
    }
    return ( 
        <div className="navbar" style={{width: isOpen ? "calc(100% - 280px)" : "calc(100% - 80px)"}}>
            <div className="navbar-left">
                <IoLocationOutline/>
                <div className="navbar-location" onClick={handleshow}>
                    <div className="location-head">
                        <p className="location-head">Futa south gate</p>
                        <BiChevronDown/>
                    </div>
                    <p className="location-body">No 23 off owode road futa southgate Akure, Ondo state.</p>
                </div>
                {show && (
                    <div className="other-locations" >
                        <div className="navbar-location other-location" onClick={handleshow}>
                            <div className="location-head">
                                <p className="other-location-head">Akure South gate</p>
                            </div>
                            <p className="location-body">NO 24 south gate akure, ondo state landmark - south gate</p>
                        </div>
                        <div className="navbar-location other-location" onClick={handleshow}>
                            <div className="location-head">
                                <p className="other-location-head">Akure North gate</p>
                            </div>
                            <p className="location-body">No 23 off owode road futa southgate Akure, Ondo state.</p>
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
                <IoNotificationsOutline/>
                <img src={avatar}>
                </img>
                <p className="navbar-role">Admin</p>
            </div>
        </div>
    );
}


export default Navbar;
