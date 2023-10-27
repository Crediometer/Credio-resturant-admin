import './Modal.css'
const LocationModal = ({toggle, address,pobox, landmark}) => {
    return ( 
        <div className="modal-background">
            <div className="modal">
                <p className='new-location'>New Location</p>
                <form className='location-form'>
                    <div className="form-1">
                        <label>Address</label>
                        <input
                            type='text'
                            required
                            placeholder='Enter full address'
                            defaultValue={address}
                        ></input>
                    </div>
                    <div className="form-1">
                        <label>POBox</label>
                        <input
                            type='text'
                            required
                            placeholder='Enter Box'
                            defaultValue={pobox}
                        ></input>
                    </div>
                    <div className="form-1">
                        <label>LandMark</label>
                        <input
                            type='text'
                            required
                            placeholder='Enter Landmark'
                            defaultValue={landmark}
                        ></input>
                    </div>
                    <div className="form-submit">
                        <button onClick={toggle} className="discard">Discard</button>
                        <button className="save">Save</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
 
export default LocationModal;