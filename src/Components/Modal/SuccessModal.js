import { FaTimes } from 'react-icons/fa';
import './DeleteModal.css'
import LottieAnimation from '../../lotties';
import success from '../../Assets/success.json'
import { Link } from 'react-router-dom';
const SuccessModal = ({toggle}) => {
    return ( 
        <div className="modal-background">
            <div className="modal">
                
                <div className="delete-body">
                    <h2>Published Successfully👋🌟</h2>
                    
                    <div className="animation">
                        <LottieAnimation data={success} />
                    </div>
                    <div className="delete-buttons">
                        <div className="delete-cancle">
                            <Link to='/dashboard/inventory'><button className='order-ok'>OK</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default SuccessModal;