import { FaTimes } from 'react-icons/fa';
import './DeleteModal.css'
const ClearallModal= ({toggle,locations, setLocations}) => {
    const handleDeleteConfirm = () => {
        setLocations(null)
        toggle()
    };
    return ( 
        <div className="modal-background">
            <div className="modal">
                <div className="delete-head">
                    <p>Clear All</p>
                    <div className="close-modal" onClick={toggle}>
                        <FaTimes/>
                    </div>
                </div>
                <div className="delete-body">
                    <h2>Are you sure you want to Clear All Messages</h2>
                    <p>Be sure you want to delete this once deleted this can not be gotten back  👋🌟</p>
                    <div className="delete-buttons">
                        <div className="delete-cancle">
                            <button className='order-cancle' onClick={toggle}>Cancel</button>
                            <button className='order-ok' onClick={()=>{handleDeleteConfirm();}}>OK</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default ClearallModal;