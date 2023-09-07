import { FiChevronDown } from 'react-icons/fi';
import './CustomerCard.css'
import { HiOutlineUsers } from 'react-icons/hi';
const CustomerCard = () => {
    return ( 
        <div className="customer-card">
            <div className="customer-card-top">
                <div className="customer-card-icon">
                    <HiOutlineUsers/>
                </div>
                <p>This Week<FiChevronDown/></p>
            </div>
            
            <div className="order-card-body">
                <div className="customer-data">
                    <p>Customers</p>
                    <h2>23</h2>
                </div>
                <div className="customer-data">
                    <p>Catgory</p>
                    <h2>9</h2>
                </div>
                <div className="customer-data">
                    <p>Active category</p>
                    <h2>3</h2>
                </div>
            </div>
        </div>
    );
}
 
export default CustomerCard;