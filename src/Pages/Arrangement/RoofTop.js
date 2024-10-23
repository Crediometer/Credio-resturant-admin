import table1 from "../../Assets/table1.png"
import table2 from "../../Assets/table2.png"
import table3 from "../../Assets/table3.png"
const RoofTop = () => {
    return ( 
        <div className="roof-top-arrange roof-top-page">
            <div className="title-arrange">
                <div className="arrange-tag roof-top">
                    <p>Rooftop</p>
                </div>
            </div>
            <div className="sits bar-sits">
                <div className="sits-row roof-sits-row">
                    <div className="sit-image">
                        <img src={table1}></img>
                    </div>
                    <div className="sit-image">
                        <img src={table2}></img>
                    </div>
                    <div className="sit-image">
                        <img src={table3}></img>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default RoofTop;