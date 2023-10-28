import { FaCheck } from "react-icons/fa";
import { HiOutlineTrash } from "react-icons/hi";
import './Message.css'
import { useState } from "react";
import { BsCheckAll } from "react-icons/bs";
const Message = ({toggle,title,body, id,getid}) => {
    const [read, setRead] = useState(false)
    const handleRead = ()=>{
        setRead(true)
    }
    return ( 
        <div className="message">
            <div className="message-left">
                <div className="message-image">
                    <p>UD</p>
                </div>
                <div className="message-text">
                    <h2>{title}</h2>
                    <p className="text-overview">{body}</p>
                    <p className="message-date">02:15 PM May 15</p>
                </div>
            </div>
            <div className="message-right">
                <button className="message-delete" onClick={()=>{toggle(); getid(id)}}>
                    <HiOutlineTrash/>
                    Delete
                </button>
                <button className="message-tick" onClick={handleRead}>
                    
                    {read ? (<BsCheckAll/>) : (<FaCheck/>)}
                    {read ? ("Read") : "Mark as Read"}
                </button>
            </div>
        </div>
    );
}
 
export default Message;