import './Draft.css'
import { FiChevronDown, FiEye, FiPieChart } from "react-icons/fi";
import food from '../../Assets/food.jpeg'
import { BiChevronLeft } from 'react-icons/bi';
const Draft = () => {
    const goBack = () => {
        window.history.back();
    };
    return ( 
        <div className="drafts">
            <div className="draft-top">
                <div className="viewproduct-name">
                    <div className="back" onClick={goBack}>
                        <BiChevronLeft/> 
                    </div>
                    <p className="viewproduct-title">Draft Summary</p>
                </div>
            </div>
            <div className="draft-body">
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
            </div>
        </div>
    );
}
 
export default Draft;