import { FaTimes } from 'react-icons/fa';
import './DeleteModal.css'
const DeleteModal = ({toggle,id,locations, setLocations}) => {
    const handleDeleteConfirm = (id) => {
        const locationIdToDelete = id
        const locationIndexToDelete = locations.findIndex(location => location.id === locationIdToDelete);
        if (locationIndexToDelete !== -1) {
            // If the location with the specified ID is found, remove it from the array
            const updatedLocations = [...locations];
            updatedLocations.splice(locationIndexToDelete, 1);
            setLocations(updatedLocations);
        }
        
        toggle()
      };
    return ( 
        <div className="modal-background">
            <div className="modal">
                <div className="delete-head">
                    <p>Delete</p>
                    <div className="close-modal" onClick={toggle}>
                        <FaTimes/>
                    </div>
                </div>
                <div className="delete-body">
                    <h2>Are you sure you want to delete</h2>
                    <p>Be sure you want to delete this once deleted this can not be gotten back  👋🌟</p>
                    <div className="delete-buttons">
                        <div className="delete-cancle">
                            <button className='order-cancle' onClick={toggle}>Cancel</button>
                            <button className='order-ok' onClick={()=>{handleDeleteConfirm(id);}}>OK</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default DeleteModal;