import './Layout.css'
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar/Sidebar";
import Navbar from "./Navbar/Navbar";
import { useState } from 'react';
import LogoutModal from '../Modal/LogoutModal';
const Layout = () => {
    const[isOpen ,setIsOpen] = useState(true);
    const toggle = (checked) => {setIsOpen (checked);}
    const [show, setShow] = useState(false)
    const handleShow = ()=>{
        setShow(!show)
    }
    return ( 
        <div className="layout">
            <div className="layout-left">
                <Sidebar isOpen={isOpen} toggle={toggle} show={handleShow}/>
            </div>
            <div className="layout-right" style={{width: isOpen ? "calc(100% - 280px)" : "calc(100% - 80px)", marginLeft: isOpen ? "280px" : "80px"}}>
                <Navbar isOpen={isOpen}/>
                <div className="layout-main">
                    <Outlet/>
                </div>
            </div>
            {show && (<LogoutModal toggle={handleShow}/>)}
        </div>
    );
}
 
export default Layout;