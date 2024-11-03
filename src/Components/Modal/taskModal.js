const TaskModal = () => {
    return ( 
        <div className="modal-background">
            <div className="modal task-modl">
                <div className="task-modal-head">
                    <h2>Add Task</h2>
                    <p>Today 02/02/2022</p>
                </div>
                <div className="task-modal-body">
                    <form>
                        <div className="task-field">
                            <label>staff/staffs name</label>
                            <select>
                                <optgroup>
                                    <option value="1">staff1</option>
                                    <option value="1">staff1</option>
                                    <option value="1">staff1</option>
                                    <option value="1">staff1</option>
                                </optgroup>
                            </select>
                        </div>
                        <div className="task-field">
                            <label>Department</label>
                            <select>
                                <optgroup>
                                    <option value="1">Department</option>
                                    <option value="1">Kitchen</option>
                                    <option value="1">Bartender</option>
                                    <option value="1">Waiter</option>
                                </optgroup>
                            </select>
                        </div>
                        <div className="date-time">
                            <div className="date-form">
                                <label>Date/Time</label>
                                <input type="date" ></input>
                            </div>
                            <div className="date-form date-form-2">
                                <input type="time" ></input>
                                -
                                <input type="time" ></input>
                            </div>
                        </div>
                        <div className="task-field">
                            <label>Seating Zone</label>
                            <select>
                                <optgroup>
                                    <option value="1">Select seating Zone </option>
                                    <option value="1">Table 1</option>
                                    <option value="1">Table 1</option>
                                    <option value="1">Table 1</option>
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