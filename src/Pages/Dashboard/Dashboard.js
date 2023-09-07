import './Dashboard.css'
import Card from "../../Components/Card/Card";
import { BsArrowDownShort, BsArrowUpShort, BsBoxSeam, BsCalendar4 } from 'react-icons/bs';
import { IoPeopleOutline } from 'react-icons/io5';
import {PiCoins, PiFunnel} from 'react-icons/pi'
import {HiOutlineCurrencyDollar} from 'react-icons/hi'
import food from '../../Assets/food.jpeg'
import Graph from '../../Components/Graph/Graph';
import { useEffect, useState } from 'react';
const Dashboard = () => {
    const [show, setShow] = useState(false)
    const [graph,setGraph] = useState('line')
    const handleToggle = () =>{
        setShow(!show)
    }
    const handleGraph = (type) =>{
        setGraph(type)
        console.log(graph)
    }

    return ( 
        <div className="dashboard">
            <div className="dashboard-card">
                <Card icon={<IoPeopleOutline/>} title="Visitor" number="251" value=""/>
                <Card icon={<BsBoxSeam/>} title="Order Received" number="351" value="+0.00%"/>
                <Card icon={<PiCoins/>} title="Net earning" number="NGN 1.300.000" value="+0.00%"/>
                <Card icon={<HiOutlineCurrencyDollar/>} title="Cost" number="NGN 200.00" value="+0.00%"/>
            </div>
            <div className="dashboard-body">
                <div className="dashboard-body-inner">
                    <div className="dashboard-graph">
                        <div className="graph-top">
                            <p className="graph-header">Sales & Purchase</p>
                            <div className="graph-filter">
                                <div className="filter-outer">
                                    <div className="filter" onClick={handleToggle}>
                                        <BsCalendar4/>
                                        <p>Change Chart</p>
                                    </div>
                                    {show && (
                                        <div className="filter-dropdown">
                                            <p onClick={()=>{handleGraph('bar');handleToggle()}}>Bar Chart</p>
                                            <p onClick={()=>{handleGraph('line');handleToggle()}}>Line Chart</p>
                                            <p onClick={()=>{handleGraph('scatter');handleToggle()}}>Scatter Chart</p>
                                            <p onClick={()=>{handleGraph('area');handleToggle()}}>Area Chart</p>
                                            <p onClick={()=>{handleGraph('radar');handleToggle()}}>Radar</p>
                                            <p onClick={()=>{handleGraph('boxplot');handleToggle()}}>BoxPlot</p>
                                        </div>
                                    )}
                                </div>
                                <div className="filter">
                                    <BsCalendar4/>
                                    <p>Custom</p>
                                </div>
                                <div className="filter">
                                    <PiFunnel/>
                                    <p>Weekly</p>
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
                            <div className="recent-order">
                                <div className="recent-left">
                                    <div className="recent-image">
                                        <img src={food}></img>
                                    </div>
                                    <div className="recent-details">
                                        <p className="recent-food-name">Salmon Salad</p>
                                        <p className="recent-food-detail">Baked Salmon Fish</p>
                                    </div>
                                </div>
                                <div className="recent-right">
                                    <div className="recent-status">
                                        <p className="recent-date">12 Aug 2023</p>
                                        <div className="recent-status-inner outgoing">
                                            <p>Ongoing</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="recent-order">
                                <div className="recent-left">
                                    <div className="recent-image">
                                        <img src={food}></img>
                                    </div>
                                    <div className="recent-details">
                                        <p className="recent-food-name">Salmon Salad</p>
                                        <p className="recent-food-detail">Baked Salmon Fish</p>
                                    </div>
                                </div>
                                <div className="recent-right">
                                    <div className="recent-status">
                                        <p className="recent-date">12 Aug 2023</p>
                                        <div className="recent-status-inner outgoing">
                                            <p>Ongoing</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="recent-order">
                                <div className="recent-left">
                                    <div className="recent-image">
                                        <img src={food}></img>
                                    </div>
                                    <div className="recent-details">
                                        <p className="recent-food-name">Salmon Salad</p>
                                        <p className="recent-food-detail">Baked Salmon Fish</p>
                                    </div>
                                </div>
                                <div className="recent-right">
                                    <div className="recent-status">
                                        <p className="recent-date">12 Aug 2023</p>
                                        <div className="recent-status-inner outgoing">
                                            <p>Ongoing</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="recent-order">
                                <div className="recent-left">
                                    <div className="recent-image">
                                        <img src={food}></img>
                                    </div>
                                    <div className="recent-details">
                                        <p className="recent-food-name">Salmon Salad</p>
                                        <p className="recent-food-detail">Baked Salmon Fish</p>
                                    </div>
                                </div>
                                <div className="recent-right">
                                    <div className="recent-status">
                                        <p className="recent-date">12 Aug 2023</p>
                                        <div className="recent-status-inner outgoing">
                                            <p>Ongoing</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="button-con">
                            <button className='see-more'>See more</button>
                        </div>   
                    </div>
                </div>
                <div className="dashboard-sales">
                    <div className="dash-sales-top">
                        <div className="dash-order-header">
                            <p>Sales</p>
                        </div>
                        <button>See All</button>
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