import { FaTimes } from 'react-icons/fa';
import './DeleteModal.css'
import LottieAnimation from '../../lotties';
import success from '../../Assets/success.json'
import { Link } from 'react-router-dom';
import qr from "../../Assets/QR.svg"
const SitModal = ({toggle}) => {
    return ( 
        <div className="modal-background">
            <div className="modal">
                
                <div className="delete-body">
                    <div className="phone">
                        <label>Add Sit Area</label><br></br>
                        <input
                        type="text"
                        name='url'
                        placeholder='Enter Area Name'
                        required
                        ></input>
                    </div>
                    <div className="delete-buttons">
                        <div className="delete-cancle">
                            <button className='order-ok' onClick={toggle}>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default SitModal;