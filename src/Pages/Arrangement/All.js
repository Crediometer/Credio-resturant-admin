import { useState } from "react"
import table1 from "../../Assets/table1.png"
import table2 from "../../Assets/table2.png"
import table3 from "../../Assets/table3.png"
import QrModal from "../../Components/Modal/Qrmodal"
const All = () => {
    const [show, setShow] = useState(false)
    const handletoggle = () =>{
        setShow(!show)
    }
    return ( 
        <div className="arrangement-body-inner">
        <div className="arrangement-body-top">
            <div className="main-hall-arrange">
                <div className="title-arrange">
                    <div className="arrange-tag main-hall">
                        <p>Main Hall</p>
                    </div>
                </div>
                <div className="sits bar-sits">
                    <div className="sits-row">
                        <div className="sit-image" onClick={handletoggle}>
                            <img src={table1}></img>
                        </div>
                        <div className="sit-image">
                            <img src={table2}></img>
                        </div>
                        <div className="sit-image">
                            <img src={table3}></img>
                        </div>
                    </div>
                    <div className="sits-row">
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
            <div className="bar-area-arrange">
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
        </div>
        <div className="arrangement-body-bottom">
            <div className="roof-top-arrange">
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
            <div className="garden-arrange">
                <div className="title-arrange">
                    <div className="arrange-tag garden">
                        <p>Garden</p>
                    </div>
                </div>
                <div className="sits bar-sits">
                    <div className="sits-row roof-sits-row">
                        <div className="sit-image">
                            <img src={table1}></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {show && (<QrModal toggle={handletoggle}/>)}
    </div>
    );
}
 
export default All;