import table1 from "../../Assets/table1.png"
import table2 from "../../Assets/table2.png"
import table3 from "../../Assets/table3.png"
const BarArea = () => {
    return ( 
        <div className="bar-area-arrange bar-area-page">
            <div className="title-arrange">
                <div className="arrange-tag bar-area">
                    <p>Bar Area</p>
                </div>
            </div>
            <div className="sits bar-sits">
                <div className="sits-row">
                    <div className="sit-image">
                        <img src={table1}></img>
                    </div>
                    <div className="sit-image">
                        <img src={table2}></img>
                    </div>
                </div>
                <div className="sits-row">
                    <div className="sit-image">
                        <img src={table1}></img>
                    </div>
                    <div className="sit-image">
                        <img src={table2}></img>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default BarArea;