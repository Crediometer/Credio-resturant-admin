import './Sales.css'
import food from '../../Assets/food.jpeg'
import { BsArrowDownShort, BsArrowUpShort } from 'react-icons/bs';
import { useEffect, useState } from 'react';
import Overview from './Overview';
const Sales = () => {
    const [show, setShow] = useState(1);
    const handleOverview = ()=>{
        setShow(1)
    }
    const handleCumulative = ()=>{
        setShow(2)
    }
    useEffect(()=>{
        window.scrollTo(0, 0);
    },[])
    return ( 
        <div className="sales">
            <div className="sales-nav">
                <nav>
                    <li onClick={handleOverview} className = {show === 1 ? `sale-nav-active`: ''}>Overview</li>
                    <li onClick={handleCumulative} className={show === 2 ? `sale-nav-active`: ''} >Cumulative</li>
                </nav>
            </div>
            <div className="sales-body">
                {(show === 1) && <Overview/>}
            </div>
        </div>

     );
}
 
export default Sales;