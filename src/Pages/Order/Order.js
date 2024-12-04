import './Order.css';
import OrderCard from "../../Components/Card/OrderCard/OrderCard";
import { IoFunnelOutline, IoPaperPlaneOutline, IoSearchOutline } from 'react-icons/io5';
import { BsCalendar2Week } from 'react-icons/bs';
// import EnhancedTable from '../../Components/Table/CategoriesTable';
import OrderModal from '../../Components/Modal/OrderModal';
import { useEffect, useRef, useState } from 'react';
import CustomFilter from '../../Components/Filter/CustomFilter';
import EnhancedTable from '../../Components/Table/OrderTable';
import OrderFilter from '../../Components/Filter/OrderFilter';
const Order = () => {
    const [show, setShow] = useState(false)
    const [show1, setShow1] = useState(false)
    const [show2, setShow2] = useState(false)
    const [value, setvalue] = useState("Filter")
    const dropdownRef = useRef(null);
    const handleShow = ()=>{
        setShow(!show)
    }
   const handleToggle2 = ()=>{
        setShow2(!show2)
   }
    const handleToggle = () =>{
        setShow1(!show1)
    }
    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
          setShow1(false);
          setShow2(false)
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
                    <p>Orders</p>
                    <div className="table-filters">
                        <div className="table-search">
                            <IoSearchOutline/>
                            <input
                                type='text'
                                placeholder='Search'
                            >
                            </input>
                        </div>
                        <div className="table-filter">
                            <IoFunnelOutline/>
                            <p onClick={handleToggle}>{value}</p>
                            {show1 && (
                                <div className="custom custom-2"  ref={dropdownRef}>
                                    <CustomFilter toggle={handleToggle} setvalue={setvalue}/>
                                </div>
                            )}
                        </div>
                        <div className="table-filter">
                            <BsCalendar2Week/>
                            <p onClick={handleToggle2}>Filter</p>
                            {show2 && (
                                <div className="custom custom-4"  ref={dropdownRef}>
                                    <OrderFilter toggle={handleToggle2}/>
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