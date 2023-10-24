import { FaCheck } from "react-icons/fa";
import { HiOutlineTrash } from "react-icons/hi";
import './Message.css'
const Message = ({toggle}) => {
    return ( 
        <div className="message">
            <div className="message-left">
                <div className="message-image">
                    <p>UD</p>
                </div>
                <div className="message-text">
                    <h2>Take out</h2>
                    <p className="text-overview">Their was a takeout order on the 2093 terminal located at Akure south gate, which cost NGN 40,000</p>
                    <p className="message-date">02:15 PM May 15</p>
                </div>
            </div>
            <div className="message-right">
                <button className="message-delete" onClick={toggle}>
                    <HiOutlineTrash/>
                    Delete
                </button>
                <button className="message-tick">
                    <FaCheck/>
                    Mark as Read
                </button>
            </div>
        </div>
    );
}
 
export default Message;