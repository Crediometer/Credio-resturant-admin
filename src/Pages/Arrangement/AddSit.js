import { useState } from "react";
import table from "../../Assets/table.png"
import chair from "../../Assets/chair.png"
const AddSit = () => {
    const [seats, setSeats] = useState(4);

    const increaseSeats = (e) => {
        e.preventDefault()
        setSeats((prevSeats) => prevSeats + 1);
    };
  
    const decreaseSeats = (e) => {
        e.preventDefault()
        if (seats > 0) {
            setSeats((prevSeats) => prevSeats - 1);
        }
    };

    const renderChairs = () => {
        const radius = 150; // Adjust the radius as needed
        const angleStep = (2 * Math.PI) / seats; // Angle between each chair

        return [...Array(seats)].map((_, i) => {
            const angle = i * angleStep;
            const x = radius * Math.cos(angle); // x position of the chair
            const y = radius * Math.sin(angle); // y position of the chair

            return (
                <img
                    key={i}
                    src={chair}
                    alt="chair"
                    style={{
                        position: 'absolute',
                        left: `${50 + x}px`,  // Center around the table
                        top: `${50 + y}px`,   // Center around the table
                        transform: 'translate(-50%, -50%)',
                    }}
                />
            );
        });
    };
    return ( 
        <div className="add-sit">
            <div className="add-sit-inner">
                <div className="add-sit-top">
                    <p>Add new seat arrangement </p>
                    <div className="add-sit-button">
                        <button className="cancel-sit">Cancel</button>
                        <button className="save-sit">Save</button>
                    </div>
                </div>
                <div className="add-sit-body">
                    <div className="add-sit-left">
                        <div className="table-container" style={{ position: 'relative'}}>
                            <img src={table} alt="table" style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }} />
                            {renderChairs()}
                        </div>
                    </div>
                    <div className="add-sit-right">
                        <form>
                            <div>
                                <label>Area</label>
                                <input
                                    type="text"
                                    placeholder="Give this area a name"
                                ></input>
                            </div>
                            <div>
                                <label>Table Number</label>
                                <input
                                    type="text"
                                    placeholder="2"
                                ></input>
                            </div>
                            <div>
                                <label>Number of Seat</label>
                                <div className="seat-counter">
                                    <button onClick={decreaseSeats} className="counter-btn">-</button>
                                    <span className="seats-display">{seats}</span>
                                    <button onClick={increaseSeats} className="counter-btn">+</button>
                                </div>
                            </div>
                            <div className="move-sit">
                                <label>Does this table move?</label>
                                <div>
                                    <button className="move-yes">Yes</button>
                                    <button className="move-no">No</button>
                                </div>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default AddSit;
