import './OrderFilter.css'
const OrderFilter = ({toggle}) => {
    return ( 
        <div className="customfilter orderfilter">
            <p className="order-filter-head">
                Filter
            </p>
            <form>
                <div className="order-type">
                    <p className="order-type-head">Order Type</p>
                    <div className="order-type-body">
                        <div className="form-5">
                            <input type="checkbox" name="filter"></input>
                            <label>Take Away</label>
                        </div>
                        <div className="form-5">
                            <input type="checkbox" name="filter"></input>
                            <label>Eat In</label>
                        </div>
                    </div>
                </div>
                <div className="order-type-status">
                    <div className="form-6">
                        <label>Status</label>
                        <select>
                            <optgroup>
                                <option>All</option>
                                <option>Completed</option>
                                <option>Not-Completed</option>
                            </optgroup>
                        </select>
                    </div>
                    <div className="form-6">
                        <label>Categories</label>
                        <select>
                            <optgroup>
                                <option>All</option>
                                <option>Breakfast</option>
                                <option>Lunch</option>
                                <option>Dinner</option>
                                <option>Drink</option>
                            </optgroup>
                        </select>
                    </div>
                    <div className="form-outer">
                        <p className='label-top'>Amount</p>
                        <div className="form-7">
                            <div className="form-6">
                                <label>From</label>
                                <input type='number' placeholder='0.00'></input>
                            </div>
                            <div className="form-6">
                                <label>To</label>
                                <input type='number' placeholder='0.00'></input>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="custom-button">
                    <button onClick={toggle}>Filter</button>
                </div>
            </form>
        </div>
    );
}
 
export default OrderFilter;