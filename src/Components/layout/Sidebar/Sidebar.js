import './Sidebar.css'
import logo from '../../../Assets/logo.png'
import logo2 from '../../../Assets/logo2.png'
import { mainsidebar } from './SidebarDetails'
import classNames from 'classnames'
import { Switch } from 'antd';
import { Link, useLocation } from 'react-router-dom'
import { FiSettings } from 'react-icons/fi'
import { BiLogOut } from 'react-icons/bi'
import { useState } from 'react'
import LogoutModal from '../../Modal/LogoutModal'
const Sidebar = ({isOpen, toggle, show}) => {  
    const location = useLocation();
    // const isLinkActive = (val) => {
    //     return location.pathname(val.link);
    // };   
    return ( 
        <div className="sidebar" style={{width: isOpen ? "280px" : "80px"}} >
            <div className="company-logo">
                <div className="sidebar-mode">
                    <Switch checked={isOpen} onChange={toggle} defaultChecked/>
                </div>
                <div className="company-logo-inner"  style={{display: isOpen ? "flex" : "none"}}>
                    <img src={logo} className='logo'></img>
                    <img src={logo2} className='logo2'></img>
                </div>
                <div className="company-logo-inner"  style={{display: isOpen ? "none" : "flex"}}>
                    <img src={logo} className='logo'></img>
                </div>
            </div>
            <div className="sidebar-links">
                <nav>
                    {mainsidebar.map((val, index)=>{
                        return(
                            <li 
                                key={index}
                            >
                                <Link to={val.link}
                                className={ classNames('link', { ['active2']: location.pathname == val.link})}
                                >
                                    {val.icon}
                                    <p style={{display: isOpen ? "block" : "none"}}>{val.title}</p>
                                </Link>
                            </li>
                        )
                    })}
                </nav>
            </div>
            <div className="sidebar-bottom">
                <nav>
                    <li >
                        <Link to='/dashboard/settings'
                        className={ classNames('link', { ['active2']: location.pathname === '/dashboard/settings'})}
                        >
                            <FiSettings/>
                            <p style={{display: isOpen ? "block" : "none"}}>Settings</p>
                        </Link>
                    </li>
                    <li onClick={show}>
                        <Link
                        className={ classNames('link')}
                        >
                            <BiLogOut/>
                            <p style={{display: isOpen ? "block" : "none"}}>Log Out</p>
                        </Link>
                    </li>
                </nav>
            </div>
        </div>
    );
}
 
export default Sidebar;