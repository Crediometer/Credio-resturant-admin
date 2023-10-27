import './CustomFilter.css'
const CustomFilter = ({toggle, setvalue}) => {
    const handlevalue = (e) =>{
        setvalue(e.target.value)
    }
    return ( 
        <div className="customfilter">
            <div className="by-date">
                <p className="by-date-text">By Date</p>
                <div className="date-periods">
                    <div className="date-checkboxs">
                        <input type="radio" value='This Week' name="filter" onChange={handlevalue}></input>
                        <label>This Week</label>
                    </div>
                    <div className="date-checkboxs">
                        <input type="radio" value='This Month' name="filter" onChange={handlevalue}></input>
                        <label>This Month</label>
                    </div>
                    <div className="date-checkboxs">
                        <input type="radio" value='This Year' name="filter" onChange={handlevalue}></input>
                        <label>This Year</label>
                    </div>
                    <div className="date-checkboxs">
                        <input type="radio" value='Last Week' name="filter" onChange={handlevalue}></input>
                        <label>Last Week</label>
                    </div>
                    <div className="date-checkboxs">
                        <input type="radio" value='Last Week' name="filter" onChange={handlevalue}></input>
                        <label>Last Month</label>
                    </div>
                    <div className="date-checkboxs">
                        <input type="radio" value='Last Week' name="filter" onChange={handlevalue}></input>
                        <label>Last Year</label>
                    </div>
                </div>
            </div>
            <hr></hr>
            <div className="date-checkboxs custom-date-range">
                <input type="checkbox"></input>
                <label>Date Range</label>
            </div>
            <div className="custom-button">
                <button onClick={toggle}>Filter</button>
            </div>
        </div>
     );
}
 
export default CustomFilter;