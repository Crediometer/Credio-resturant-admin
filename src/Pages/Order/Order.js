import './Order.css';
import OrderCard from "../../Components/Card/OrderCard/OrderCard";
import { IoFunnelOutline, IoPaperPlaneOutline, IoSearchOutline } from 'react-icons/io5';
import { BsCalendar2Week } from 'react-icons/bs';
import EnhancedTable from '../../Components/Table/CategoriesTable';
import OrderModal from '../../Components/Modal/OrderModal';
import { useState } from 'react';
const Order = () => {
    const [show, setShow] = useState(false)
    const handleShow = ()=>{
        setShow(!show)
    }
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
                        <div className="table-filter">
                            <IoFunnelOutline/>
                            <p>Filter</p>
                        </div>
                        <div className="table-filter">
                            <BsCalendar2Week/>
                            <p>Filter</p>
                        </div>
                        <div className="table-filter">
                            <IoPaperPlaneOutline/>
                            <p>Search</p>
                        </div>
                    </div>
                </div>
                <div className="table-body" onClick={handleShow}>
                    <EnhancedTable/>
                </div>
            </div>
            {show && (<OrderModal toggle={handleShow}/>)}
        </div>
    );
}
 
export default Order;