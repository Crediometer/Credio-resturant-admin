import "./Arrangement.css"
import { useEffect, useState } from "react";
import All from "./All";
import MainHall from "./MainHall";
import BarArea from "./BarArea";
import Garden from "./Garden";
import RoofTop from "./RoofTop";
import { Link } from "react-router-dom";
import AssignSit from "./Assign/AssignSit";
import SitModal from "../../Components/Modal/Sitmodal";
const Arrangement = () => {
    const [show, setShow] = useState(1);
    const [sitShow, setSitShow] = useState(1);
    const [show2, setShow2] = useState(1)
    const handleOverview = ()=>{
        setShow(1)
    }
    const handleCumulative = ()=>{
        setShow(2)
    }
    const handleall = ()=>{
        setShow2(1)
    }
    const handlemain = ()=>{
        setShow2(2)
    }
    const handlebar = ()=>{
        setShow2(3)
    }
    const handlegarden = ()=>{
        setShow2(4)
    }
    const handleroof = ()=>{
        setShow2(5)
    }
    const handleToggle = () =>{
        setSitShow(!sitShow)
    }
    useEffect(()=>{
        window.scrollTo(0, 0);
    },[])
    return ( 
        <div className="arrangement">
             <div className="sales-nav">
                <nav>
                    <li onClick={handleOverview} className = {show === 1 ? `sale-nav-active`: ''}>Assign Sit</li>
                    <li onClick={handleCumulative} className={show === 2 ? `sale-nav-active`: ''} >Seat Arrangement</li>
                </nav>
            </div>
            {show === 1 && (
                <AssignSit/>
            )}
            {show === 2 &&
                <div className="arrangement-body">
                    <div className="arrangement-top-right">
                        <button onClick={handleToggle}>Add Area +</button>
                    </div>
                    <div className="arrangement-top">
                        <div className="arrangement-top-left">
                            <nav>
                                <li onClick={handleall} className={show2 == 1 && "arrange-active"}>All</li>
                                <li onClick={handlemain} className={show2 == 2 && "arrange-active"}>Main Hall</li>
                                <li onClick={handlebar} className={show2 == 3 && "arrange-active"}>Bar Area</li>
                                <li onClick={handlegarden} className={show2 == 4 && "arrange-active"}>Garden</li>
                                <li onClick={handleroof} className={show2 == 5 && "arrange-active"}>Rooftop</li>
                            </nav>
                        </div>
                        <div className="arrangement-top-right">
                            <Link to="/dashboard/add-sit"><button>Add new Seat Arrangement +</button></Link>
                        </div>
                    </div>
                    {show2 == 1 && <All/>}
                    {show2 == 2 && <MainHall/>}
                    {show2 == 3 && <BarArea/>}
                    {show2 == 4 && <Garden/>}
                    {show2 == 5 && <RoofTop/>}
                </div>
            }
            {sitShow && (<SitModal toggle={handleToggle}/>)}
        </div>
    );
}
 
export default Arrangement;