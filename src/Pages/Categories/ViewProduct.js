import './ViewProduct.css';
import food from '../../Assets/food.jpeg'
import { FiChevronDown, FiEye, FiPieChart } from 'react-icons/fi';
import { HiOutlineUsers } from 'react-icons/hi';
import OrderCard from '../../Components/Card/OrderCard/OrderCard';
import CustomerCard from '../../Components/Card/CustomerCard/CustomerCard';
import { BsCalendar2Week, BsHandbag } from 'react-icons/bs';
import { IoFunnelOutline, IoPaperPlaneOutline, IoSearchOutline } from 'react-icons/io5';
import EnhancedTable from '../../Components/Table/CategoriesTable';
import { BiChevronLeft } from 'react-icons/bi';
import { Link } from 'react-router-dom';
const ViewProduct = () => {
    return ( 
        <div className="viewproduct">
             <div className="viewproduct-head">
                <div className="viewproduct-name">
                     <div className="back">
                        <Link to="inventory/product"><BiChevronLeft/></Link>  
                    </div>
                    <p className="viewproduct-title">Inventory Summary</p>
                    <p className="viewproduct-date">Date Added <span>12 Sept 2022 - 12:55 pm</span></p>
                </div>
                <div className="viewproduct-button">
                    <button className="draft">Edit Product</button>
                    <button className='live'>Go Live</button>
                </div>
            </div>
            <div className="viewproduct-top">
                <div className="viewproduct-image">
                    <img src={food}></img>
                </div>
                <div className="viewproduct-size">
                    <div className="customer-card-icon">
                        <FiEye/>
                    </div>
                    <div className="size-avaliable">
                        <p className='size-available-title'>Size Available</p>
                        <div className="sizes">
                            <p>Large</p>
                            <p>Medium</p>
                            <p>Small</p>
                        </div>
                    </div>
                </div>
                <div className="viewproduct-lastorder">
                    <div className="lastorder-top">
                        <p className='lastorder-title'>Last Order <span>12 Sept 2022</span></p>
                        <div className="lastorder-status">
                            <p>Published</p>
                        </div>
                    </div>
                    <div className="lastorder-body">
                        <div className="lastorder-price">
                            <p className='last-order-title'>Price</p>
                            <h2 className='last-order-body'>NGN25,000.00</h2>
                        </div>
                        <div className="lastorder-stock">
                            <p className='last-order-title'>In-Stock</p>
                            <h2 className='last-order-body'>20</h2>
                        </div>
                    </div>
                </div>
                <div className="viewproduct-orders">
                    <div className="customer-card-top">
                        <div className="customer-card-icon">
                            <FiPieChart/>
                        </div>
                        <p>This Week<FiChevronDown/></p>
                    </div>
                    <div className="viewproduct-order-body">
                        <p>Total Orders</p>
                        <h2>NGN50,000.00</h2>
                    </div>
                </div>
            </div>
            <div className="categories-top">
                <CustomerCard/>
                <CustomerCard/>
                {/* <div className="categories-order">
                    <div className="customer-card">
                        <div className="customer-card-top">
                            <div className="customer-card-icon">
                                <BsHandbag/>
                            </div>
                            <p>This Week<FiChevronDown/></p>
                        </div>
                        
                        <div className="order-card-body">
                            <div className="customer-data">
                                <p>All Orders</p>
                                <h2>1</h2>
                            </div>
                            <div className="customer-data">
                                <p>Pending</p>
                                <h2>0</h2>
                            </div>
                            <div className="customer-data">
                                <p>Completed</p>
                                <h2>1</h2>
                            </div>
                        </div>
                    </div>
                </div> */}
                {/* <div className="categories-customer">
                    <div className="customer-card">
                        <div className="customer-card-top">
                            <div className="customer-card-icon">
                                <BsHandbag/>
                            </div>
                            <p>This Week<FiChevronDown/></p>
                        </div>
                        
                        <div className="order-card-body">
                            <div className="customer-data">
                                <p>Canceled</p>
                                <h2>1</h2>
                            </div>
                            <div className="customer-data">
                                <p>Returned</p>
                                <h2>0</h2>
                            </div>
                            <div className="customer-data">
                                <p>Damaged</p>
                                <h2>1</h2>
                            </div>
                        </div>
                    </div>
                </div> */}
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
                <div className="table-body">
                    <EnhancedTable/>
                </div>
            </div>
        </div>
    );
}
 
export default ViewProduct;