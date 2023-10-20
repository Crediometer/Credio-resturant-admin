import { IoFunnelOutline, IoPaperPlaneOutline, IoSearchOutline } from 'react-icons/io5';
import CustomerCard from '../../Components/Card/CustomerCard/CustomerCard';
import OrderCard from '../../Components/Card/OrderCard/OrderCard';
import './Categories.css'
import {FiPlus} from 'react-icons/fi';
import { BsCalendar2Week } from 'react-icons/bs';
import EnhancedTable from '../../Components/Table/CategoriesTable';
import { Link } from 'react-router-dom';
import CustomFilter from '../../Components/Filter/CustomFilter';
import { useState } from 'react';
const Categories = () => {
    const [show, setShow] = useState(false)
    const handleToggle = () =>{
        setShow(!show)
    }
    return ( 
        <div className="categories">
            <div className="categories-head">
                <p>Inventory Summary</p>
                <Link to='/category/product'>
                    <button><FiPlus/>Add a New Product</button>
                </Link>
            </div>
            <div className="categories-top">
                <div className="categories-order">
                    <OrderCard/>
                </div>
                <div className="categories-customer">
                    <CustomerCard/>
                </div>
            </div>
            <div className="categories-body">
                <div className="table-top">
                    <p>Inventory Item</p>
                    <div className="table-filters">
                        <div className="table-search">
                            <IoSearchOutline/>
                            <input
                                type='text'
                                placeholder='Search'
                            >
                            </input>
                        </div>
                        <div className="table-filter-outer">
                            <div className="table-filter" onClick={handleToggle}>
                                <IoFunnelOutline/>
                                <p >Filter</p>
                            </div>
                            {show && (
                                <div className="custom custom-2">
                                    <CustomFilter toggle={handleToggle}/>
                                </div>
                            )}
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
                <div className="table-body">
                    <EnhancedTable/>
                </div>
            </div>
        </div>
    );
}
 
export default Categories;