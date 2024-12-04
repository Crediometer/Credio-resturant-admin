import { useState } from "react";

const TaskModal = ({ handleShow, addEvent }) => {
    const [staffName, setStaffName] = useState('');
    const [department, setDepartment] = useState('');
    const [seatingZone, setSeatingZone] = useState('');
    const [eventDate, setEventDate] = useState('');
    const [startTime, setStartTime] = useState('');
    const [endTime, setEndTime] = useState('');
    const [color, setColor] = useState('');

    const handleSave = (e) => {
        e.preventDefault();
        addEvent({
            name: staffName,
            department,
            zone: seatingZone,
            date: eventDate,
            startTime,
            endTime,
            // color,
            type: department  // Use department as event type
        });
        console.log({
            name: staffName,
            department,
            zone: seatingZone,
            date: eventDate,
            startTime,
            endTime,
            // color,
            type: department  // Use department as event type
        })
        handleShow(); // Close modal after saving
    };
    return ( 
        <div className="modal-background">
            <div className="modal task-modl">
                <div className="task-modal-head">
                    <h2>Add Task</h2>
                    <p>Today {Date.now().toLocaleString()}</p>
                </div>
                <div className="task-modal-body">
                    <form onSubmit={handleSave}>
                        <div className="task-field">
                            <label>staff/staffs name</label>
                            <select onChange={(e) => setStaffName(e.target.value)}>
                                <optgroup>
                                    <option value="Adekola">Adekola</option>
                                    <option value="Philip">Philip</option>
                                    <option value="Victor">Victor</option>
                                    <option value="Tomiwa">Tomiwa</option>
                                </optgroup>
                            </select>
                        </div>
                        <div className="task-field">
                            <label>Department</label>
                            <select onChange={(e) => setDepartment(e.target.value)}>
                                <optgroup>
                                    <option value="Department">Department</option>
                                    <option value="Kitchen">Kitchen</option>
                                    <option value="Bartender">Bartender</option>
                                    <option value="Waiter">Waiter</option>
                                </optgroup>
                            </select>
                        </div>
                        <div className="date-time">
                            <div className="date-form">
                                <label>Date/Time</label>
                                <input type="date" onChange={(e) => setEventDate(e.target.value)} ></input>
                            </div>
                            <div className="date-form date-form-2">
                                <input type="time" onChange={(e) => setStartTime(e.target.value)}></input>
                                -
                                <input type="time" onChange={(e) => setEndTime(e.target.value)}></input>
                            </div>
                        </div>
                        <div className="task-field">
                            <label>Seating Zone</label>
                            <select onChange={(e) => setSeatingZone(e.target.value)}>
                                <optgroup>
                                    <option value="1">Select seating Zone </option>
                                    <option value="Table 1">Table 1</option>
                                    <option value="Table 2">Table 2</option>
                                    <option value="Table 3">Table 3</option>
                                </optgroup>
                            </select>
                        </div>
                        <div className="task-field">
                            <label>Timeline Colour</label>
                            <div className="timeline-color">
                                <div className="color color-1">

                                </div>
                                <div className="color color-2">

                                </div>
                                <div className="color color-3">

                                </div>
                                <div className="color color-4">

                                </div>
                                <div className="color color-5">

                                </div>
                                <div className="color color-6">

                                </div>
                                <div className="color color-7">

                                </div>
            
                            </div>
                        </div>
                        <div className="buttons">
                            <button className="button-cancle">
                                Cancel
                            </button>
                            <button className="button-save">
                                Save
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
 
export default TaskModal;