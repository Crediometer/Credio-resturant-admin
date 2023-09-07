import './Layout.css'
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar/Sidebar";
import Navbar from "./Navbar/Navbar";
import { useState } from 'react';
const Layout = () => {
    const[isOpen ,setIsOpen] = useState(true);
    const toggle = () => setIsOpen (!isOpen);
    return ( 
        <div className="layout">
            <div className="layout-left">
                <Sidebar isOpen={isOpen} toggle={toggle}/>
            </div>
            <div className="layout-right" style={{width: isOpen ? "calc(100% - 280px)" : "calc(100% - 80px)", marginLeft: isOpen ? "280px" : "80px"}}>
                <Navbar isOpen={isOpen}/>
                <div className="layout-main">
                    <Outlet/>
                </div>
            </div>
        </div>
    );
}
 
export default Layout;