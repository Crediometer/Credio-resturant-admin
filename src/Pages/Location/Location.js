import LocationModal from '../../Components/Modal/LocationModal';
import './Location.css'
import {useState} from 'react'
const Location = () => {
    const [modal, setModal] = useState(false)

    const handleModal = () =>{
        setModal(!modal)
    }
    return ( 
        <div className="location">
            <div className="add-store">
                <button onClick={handleModal}>Add Store</button>
            </div>
            <div className="location-body-2">
                <div className="location-ind">
                    <div className="location-image">
                        <p>Akure South gate Branch</p>
                    </div>
                    <div className="location-details">
                        <div className="loaction-address">
                            <p className='location-name'>Akure South gate</p>
                            <p className='location-address-inner'>NO 24 south gate akure, ondo state</p>
                            <p className='location-address-inner'>POX - 00000</p>
                            <p className='location-address-inner'>landmark - south gate</p>
                        </div>
                        <div className="location-buttons">
                            <button className='location-delete'>Delete</button>
                            <button className="location-edit">Edit</button>
                        </div>
                    </div>
                </div>
                <div className="location-ind">
                    <div className="location-image">
                        <p>Akure South gate Branch</p>
                    </div>
                    <div className="location-details">
                        <div className="loaction-address">
                            <p className='location-name'>Akure South gate</p>
                            <p className='location-address-inner'>NO 24 south gate akure, ondo state</p>
                            <p className='location-address-inner'>POX - 00000</p>
                            <p className='location-address-inner'>landmark - south gate</p>
                        </div>
                        <div className="location-buttons">
                            <button className='location-delete'>Delete</button>
                            <button className="location-edit">Edit</button>
                        </div>
                    </div>
                </div>
                <div className="location-ind">
                    <div className="location-image">
                        <p>Akure South gate Branch</p>
                    </div>
                    <div className="location-details">
                        <div className="loaction-address">
                            <p className='location-name'>Akure South gate</p>
                            <p className='location-address-inner'>NO 24 south gate akure, ondo state</p>
                            <p className='location-address-inner'>POX - 00000</p>
                            <p className='location-address-inner'>landmark - south gate</p>
                        </div>
                        <div className="location-buttons">
                            <button className='location-delete'>Delete</button>
                            <button className="location-edit">Edit</button>
                        </div>
                    </div>
                </div>
            </div>
            {modal && (<LocationModal toggle={handleModal}/>)}
        </div>
    );
}
 
export default Location;