import './Dashboard.css'
import Card from "../../Components/Card/Card";
import { BsArrowDownShort, BsArrowUpShort, BsBoxSeam, BsCalendar4 } from 'react-icons/bs';
import { IoPeopleOutline } from 'react-icons/io5';
import {PiCoins, PiFunnel} from 'react-icons/pi'
import {HiOutlineCurrencyDollar} from 'react-icons/hi'
import {Link} from 'react-router-dom'
import food from '../../Assets/food.jpeg'
import Graph from '../../Components/Graph/Graph';
import { useEffect, useRef, useState } from 'react';
import CustomFilter from '../../Components/Filter/CustomFilter';
import { generateOrders } from '../../Components/fakerdata';
const Dashboard = () => {
    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false);
    const [show3, setShow3] = useState(false);
    const [value, setvalue] = useState("Custom")
    const [graph,setGraph] = useState('line');
    const [period,setPeriod] = useState('Monthly');
    const dropdownRef = useRef(null);
    const [orders, setOrders] = useState([]);

    useEffect(() => {
      // Generate 5 mock orders on component mount
      setOrders(generateOrders(4));
    }, []);
    const handleToggle = () =>{
        setShow(!show)
    }
    const handleToggle2 = () =>{
        setShow2(!show2)
    }
    const handleToggle3 = () =>{
        setShow3(!show3)
    }
    const handleGraph = (type) =>{
        setGraph(type)
        console.log(graph)
    }
    const handlePeriod = (type) =>{
        setPeriod(type)
    }
    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
          setShow(false);
          setShow2(false);
          setShow3(false);
        }
    };
    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
          document.removeEventListener('mousedown', handleClickOutside);
        };
    },[]);
    return ( 
        <div className="dashboard">
            <div className="dashboard-card">
                <div className="card-outer">
                    <Card icon={<IoPeopleOutline/>} title="Visitor" number="251" value=""/>
                </div>
                <div className="card-outer">
                    <Card icon={<BsBoxSeam/>} title="Order Received" number="351" value="+0.00%"/>
                </div>
                <div className="card-outer">
                    <Card icon={<PiCoins/>} title="Net earning" number="NGN 1.300.000" value="+0.00%"/>
                </div>
                <div className="card-outer">
                    <Card icon={<HiOutlineCurrencyDollar/>} title="Staff On" number="9" value=""/>
                </div>
                
            </div>
            <div className="dashboard-body" >
                <div className="dashboard-body-inner">
                    <div className="dashboard-graph" >
                        <div className="graph-top">
                            <p className="graph-header">Sales & Purchase</p>
                            <div className="graph-filter">
                                <div className="filter-outer">
                                    <div className="filter" onClick={handleToggle}>
                                        <BsCalendar4/>
                                        <p>{graph} Chart</p>
                                    </div>
                                    {show && (
                                        <div className="filter-dropdown" ref={dropdownRef}>
                                            <p onClick={()=>{handleGraph('bar');handleToggle()}}>Bar Chart</p>
                                            <p onClick={()=>{handleGraph('line');handleToggle()}}>Line Chart</p>
                                            <p onClick={()=>{handleGraph('scatter');handleToggle()}}>Scatter Chart</p>
                                            <p onClick={()=>{handleGraph('area');handleToggle()}}>Area Chart</p>
                                        </div>
                                    )}
                                </div>
                                <div className="filter-outer">
                                    <div className="filter" onClick={handleToggle2}>
                                        <BsCalendar4/>
                                        <p>{value}</p>    
                                    </div>
                                        {show2 && (
                                            <div className="custom" ref={dropdownRef}>
                                                <CustomFilter toggle={handleToggle2} setvalue={setvalue}/>
                                            </div>
                                        )}
                                </div>
                                <div className="filter-outer">
                                    <div className="filter" onClick={handleToggle3}>
                                        <PiFunnel/>
                                        <p>{period}</p>
                                    </div>
                                    {show3 && (
                                        <div className="filter-dropdown" ref={dropdownRef}>
                                            <p onClick={()=>{handleToggle3(); handlePeriod("Daily")}}>Daily</p>
                                            <p onClick={()=>{handleToggle3(); handlePeriod("Weekly")}}>Weekly</p>
                                            <p onClick={()=>{handleToggle3(); handlePeriod("Monthly")}}>Monthly</p>
                                            <p onClick={()=>{handleToggle3(); handlePeriod("Anually")}}>Anually</p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                        <Graph graph={graph}/>
                    </div>
                    <div className="dashboard-orders">
                        <div className="dash-order-header">
                            <p>Recent Orders</p>
                        </div>
                        <div className="dash-order-body">
                        {orders.map((order) => (
                            <div key={order.id} className="recent-order">
                            <div className="recent-left">
                                <div className="recent-image">
                                <img src={order.image} alt={order.foodName} />
                                </div>
                                <div className="recent-details">
                                <p className="recent-food-name">{order.foodName}</p>
                                <p className="recent-food-detail">{order.foodDetail}</p>
                                </div>
                            </div>
                            <div className="recent-right">
                                <div className="recent-status">
                                <p className="recent-date">{order.date}</p>
                                <div className='recent-status-inner outgoing'>
                                    <p>{order.status}</p>
                                </div>
                                </div>
                            </div>
                            </div>
                        ))}
                        </div>
                        <div className="button-con">
                            <Link to='/dashboard/orders'><button className='see-more'>See more</button></Link> 
                        </div>   
                    </div>
                </div>
                <div className="dashboard-sales">
                    <div className="dash-sales-top">
                        <div className="dash-order-header">
                            <p>Sales</p>
                        </div>
                        <Link to='/dashboard/sales'><button>See All</button></Link>
                    </div>
                    <div className="dash-sales-body">
                        <div className="sales-food">
                            <img src={food}></img>
                            <p className='sales-food-name'>Salmon Salad</p>
                            <p className='sales-food-revenue red'><span><BsArrowDownShort/></span>15%</p>
                        </div>
                        <div className="sales-food">
                            <img src={food}></img>
                            <p className='sales-food-name'>Salmon Salad</p>
                            <p className='sales-food-revenue red'><span><BsArrowDownShort/></span>15%</p>
                        </div>
                        <div className="sales-food">
                            <img src={food}></img>
                            <p className='sales-food-name'>Salmon Salad</p>
                            <p className='sales-food-revenue red'><span><BsArrowDownShort/></span>15%</p>
                        </div>
                        <div className="sales-food">
                            <img src={food}></img>
                            <p className='sales-food-name'>Salmon Salad</p>
                            <p className='sales-food-revenue green'><span><BsArrowUpShort/></span>15%</p>
                        </div>
                        <div className="sales-food">
                            <img src={food}></img>
                            <p className='sales-food-name'>Salmon Salad</p>
                            <p className='sales-food-revenue green'><span><BsArrowUpShort/></span>15%</p>
                        </div>
                        <div className="sales-food">
                            <img src={food}></img>
                            <p className='sales-food-name'>Salmon Salad</p>
                            <p className='sales-food-revenue red'><span><BsArrowDownShort/></span>15%</p>
                        </div>
                        <div className="sales-food">
                            <img src={food}></img>
                            <p className='sales-food-name'>Salmon Salad</p>
                            <p className='sales-food-revenue red'><span><BsArrowDownShort/></span>15%</p>
                        </div>
                        <div className="sales-food">
                            <img src={food}></img>
                            <p className='sales-food-name'>Salmon Salad</p>
                            <p className='sales-food-revenue green'><span><BsArrowUpShort/></span>15%</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Dashboard;