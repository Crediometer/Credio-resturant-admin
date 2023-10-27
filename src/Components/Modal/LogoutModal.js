import { FaTimes } from 'react-icons/fa';
import './DeleteModal.css'
import { Link } from 'react-router-dom';
const LogoutModal = ({toggle}) => {
    return ( 
        <div className="modal-background">
            <div className="modal">
                <div className="delete-head">
                    <p>Logout</p>
                    <div className="close-modal" onClick={toggle}>
                        <FaTimes/>
                    </div>
                </div>
                <div className="delete-body">
                    <h2>Are you sure you want to logout </h2>
                    <p>Logging out, but remember, you're always welcome back! 👋🌟</p>
                    <div className="delete-buttons">
                        <div className="delete-cancle">
                            <button className='order-cancle' onClick={toggle}>Cancle</button>
                            <Link to='/'><button className='order-ok'>OK</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default LogoutModal;