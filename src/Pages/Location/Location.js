import AddLocationModal from '../../Components/Modal/AddLocationModal';
import LocationModal from '../../Components/Modal/LocationModal';
import './Location.css'
import DeleteModal from '../../Components/Modal/DeleteModal';
import {useState} from 'react'
const Location = () => {
    const [modal, setModal] = useState(false)
    const [id, setid] = useState('')
    const [addmodal, setaddModal] = useState(false)
    const [showdelete, setShowDelete] = useState(false)
    const [address, setAddress] = useState('')
    const [pobox, setPobox] = useState('')
    const [landmark, setlandmark] = useState('')
    const [locations, setLocations] = useState([
        {
          id: 1,
          name: 'Akure South gate Branch',
          address: 'NO 24 North gate akure, ondo state',
          pobox: 'POX - 00000',
          landmark: 'south gate',
        },
        {
            id: 2,
            name: ' Futa South gate Branch',
            address: 'NO 24 Futa gate akure, ondo state',
            pobox: 'POX - 00000',
            landmark: 'south gate',
          },
          {
            id: 3,
            name: 'Akure North gate Branch',
            address: 'NO 24 North gate akure, ondo state',
            pobox: 'POX - 00000',
            landmark: 'south gate',
          },
        // Add more location entries here
      ]);
    const handleModal = () =>{
        setModal(!modal)
    }
    const handleaddModal = () =>{
        setaddModal(!addmodal)
    }
    const handleDelete =()=>{
        setShowDelete(!showdelete)
    }
    const handleid =(id)=>{
        setid(id)
    }
   
    const handlelocation =(add, po, land) =>{
        setAddress(add)
        setPobox(po)
        setlandmark(land)
    }
    return ( 
        <div className="location">
            <div className="add-store">
                <button onClick={handleaddModal}>Add Store</button>
            </div>
            <div className="location-body-2">
                {locations.map((location)=>{
                    return(
                        <div className="location-ind"  key={location.id}> 
                            <div className="location-image">
                                <p>{location.name}</p>
                            </div>
                            <div className="location-details">
                                <div className="loaction-address">
                                    <p className='location-name'>{location.name}</p>
                                    <p className='location-address-inner'>{location.address}</p>
                                    <p className='location-address-inner'>{location.pobox}</p>
                                    <p className='location-address-inner'>landmark - {location.landmark}</p>
                                </div>
                                <div className="location-buttons">
                                    <button className='location-delete' onClick={()=>{ handleDelete(); handleid(location.id)}}>Delete</button>
                                    <button className="location-edit" onClick={()=>{handleModal(); handlelocation(location.address, location.pobox, location.landmark)}}>Edit</button>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
            {showdelete && (<DeleteModal toggle={handleDelete} id={id} locations={locations} setLocations={setLocations}/>)}
            {modal && (<LocationModal toggle={handleModal} address={address} pobox={pobox} landmark={landmark}/>)}
            {addmodal && (<AddLocationModal toggle={handleaddModal}/>)}
        </div>
    );
}
 
export default Location;