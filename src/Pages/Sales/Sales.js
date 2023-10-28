import './Sales.css'
import food from '../../Assets/food.jpeg'
import { BsArrowDownShort, BsArrowUpShort } from 'react-icons/bs';
const Sales = () => {
    return ( 
        <div className="sales">
            <p className='sales-head'>Sales</p>
            <div className="sales-outer">
                <p className="sales-outer-head">Fast selling product</p>
                <div className="dash-sales-body">
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
                        <p className='sales-food-revenue green'><span><BsArrowUpShort/></span>15%</p>
                    </div>
                    <div className="sales-food">
                        <img src={food}></img>
                        <p className='sales-food-name'>Salmon Salad</p>
                        <p className='sales-food-revenue green'><span><BsArrowUpShort/></span>15%</p>
                    </div>
                </div>
            </div>
            <div className="sales-outer">
                <p className="sales-outer-head">Product on less demand</p>
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
                        <p className='sales-food-revenue red'><span><BsArrowDownShort/></span>15%</p>
                    </div>
                    <div className="sales-food">
                        <img src={food}></img>
                        <p className='sales-food-name'>Salmon Salad</p>
                        <p className='sales-food-revenue red'><span><BsArrowDownShort/></span>15%</p>
                    </div>
                </div>
                
            </div>
        </div>

     );
}
 
export default Sales;