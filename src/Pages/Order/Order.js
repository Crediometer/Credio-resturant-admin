import './Order.css';
import OrderCard from "../../Components/Card/OrderCard/OrderCard";
import { IoFunnelOutline, IoPaperPlaneOutline, IoSearchOutline } from 'react-icons/io5';
import { BsCalendar2Week } from 'react-icons/bs';
// import EnhancedTable from '../../Components/Table/CategoriesTable';
import OrderModal from '../../Components/Modal/OrderModal';
import { useEffect, useRef, useState } from 'react';
import CustomFilter from '../../Components/Filter/CustomFilter';
import EnhancedTable from '../../Components/Table/OrderTable';
const Order = () => {
    const [show, setShow] = useState(false)
    const [show1, setShow1] = useState(false)
    const dropdownRef = useRef(null);
    const handleShow = ()=>{
        setShow(!show)
    }
   
    const handleToggle = () =>{
        setShow1(!show1)
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
    },[]);
    return ( 
        <div className="order">
            <div className="order-top">
                <OrderCard/>
            </div>
            <div className="categories-body">
                <div className="table-top">
                    <p>Purchases</p>
                    <div className="table-filters">
                        <div className="table-search">
                            <IoSearchOutline/>
                            <input
                                type='text'
                                placeholder='Search'
                            >
                            </input>
                        </div>
                        <div className="table-filter"onClick={handleToggle}>
                            <IoFunnelOutline/>
                            <p>Filter</p>
                            {show1 && (
                                <div className="custom custom-2"  ref={dropdownRef}>
                                    <CustomFilter toggle={handleToggle}/>
                                </div>
                            )}
                        </div>
                        <div className="table-filter">
                            <IoPaperPlaneOutline/>
                            <p>Share</p>
                        </div>
                    </div>
                </div>
                <div className="table-body">
                    <EnhancedTable show={handleShow}/>
                </div>
            </div>
            {show && (<OrderModal toggle={handleShow}/>)}
        </div>
    );
}
 
export default Order;