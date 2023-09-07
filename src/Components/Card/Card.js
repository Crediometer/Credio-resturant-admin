import { IoPeopleOutline } from 'react-icons/io5';
import './Card.css';
import { BiChevronDown } from "react-icons/bi";
const Card = ({icon, title, number, value}) => {
    return (
        <div className="card">
            <div className="card-top">
                <div className="card-icon">
                    {icon}
                </div>
                <div className="card-filter">
                    <p>This Week</p>
                    <BiChevronDown/>
                </div>
            </div>
            <div className="card-body">
                <p className="card-title">{title}</p>
                <p className="card-number">{number}<span className='gain'>{value}</span></p>
            </div>
        </div>
    );
}
 
export default Card;