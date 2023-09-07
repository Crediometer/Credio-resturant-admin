import { BsHandbag } from 'react-icons/bs';
import './OrderCard.css'
const OrderCard = () => {
    return ( 
        <div className="order-card">
            <div className="order-card-icon">
                <BsHandbag/>
            </div>
            <div className="order-card-body">
                <div className="order-data">
                    <p>All Orders</p>
                    <h2>350</h2>
                </div>
                <div className="order-data">
                    <p>Active</p>
                    <h2>316<span>86%</span></h2>
                </div>
                <div className="order-data">
                    <p>Out of production</p>
                    <h2>0<span>+0.00%</span></h2>
                </div>
            </div>
        </div>
    );
}
 
export default OrderCard;