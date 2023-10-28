import { useState } from "react";
import { FaCheck, FaTrash } from "react-icons/fa";
import './Notification.css'
import { IoFunnelOutline, IoPaperPlaneOutline, IoSearchOutline } from "react-icons/io5";
import CustomFilter from "../../Components/Filter/CustomFilter";
import { BsCalendar2Week } from "react-icons/bs";
import Message from "../../Components/Message/Message";
import DeleteModal from "../../Components/Modal/DeleteModal";
import TablePagination from '@mui/material/TablePagination';
const Notification = () => {
    const [show1, setShow1] = useState(1);
    const [id, setid] = useState('')
    const [show, setShow] = useState(false)
    const [showdelete, setShowDelete] = useState(false)
    const [page, setPage] = useState(2);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [notifications, setNotifications] = useState([
        {
            id: 1,
            title: "Take out",
            body: "Their was a takeout order on the 2093 terminal located at Akure south gate, which cost NGN 40,000"
        },
        {
            id: 2,
            title: "Take In",
            body: "Their was a takeout order on the 2093 terminal located at Akure south gate, which cost NGN 40,000"
        },
        {
            id: 3,
            title: "Fish was Purchased",
            body: "Their was a takeout order on the 2093 terminal located at Akure south gate, which cost NGN 40,000"
        },
        {
            id: 4,
            title: "Fish was Purchased",
            body: "Their was a takeout order on the 2093 terminal located at Akure south gate, which cost NGN 40,000"
        },
        {
            id: 5,
            title: "Fish was Purchased",
            body: "Their was a takeout order on the 2093 terminal located at Akure south gate, which cost NGN 40,000"
        },
        {
            id: 6,
            title: "Take In",
            body: "Their was a takeout order on the 2093 terminal located at Akure south gate, which cost NGN 40,000"
        },
        {
            id: 7,
            title: "Take In",
            body: "Their was a takeout order on the 2093 terminal located at Akure south gate, which cost NGN 40,000"
        },
        {
            id: 8,
            title: "Fish was Purchased",
            body: "Their was a takeout order on the 2093 terminal located at Akure south gate, which cost NGN 40,000"
        },
        {
            id: 9,
            title: "Fish was Purchased",
            body: "Their was a takeout order on the 2093 terminal located at Akure south gate, which cost NGN 40,000"
        },
        // Add more location entries here
      ]);
    const handleid =(id)=>{
    setid(id)
    }
    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };
  
    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(parseInt(event.target.value, 10));
      setPage(0);
    };
  
    const handleToggle = () =>{
        setShow(!show)
    }
    const handleDelete = ()=>{
        setShowDelete(!showdelete)
    }
    const handleAccount = ()=>{
        setShow1(1)
    }
    const handleBusiness = ()=>{
        setShow1(2)
    }
    const handleRead = ()=>{
        setShow1(4)
    }
    const handleReceipt = ()=>{
        setShow1(3)
    }
    return ( 
        <div className="notification">
             <div className="notification-box">
                <nav>
                    <li onClick={handleAccount} className={show1 === 1 ? `nav-active notification-nav`: 'notification-nav'}> <div className="all-number"><p>5</p></div> All</li>
                    <li onClick={handleBusiness} className={show1 === 2 ? `nav-active notification-nav`: 'notification-nav'}><div className="today-number"><p>4</p></div>Today</li>
                    <li onClick={handleRead} className={show1 === 4 ? `nav-active notification-nav`: 'notification-nav'}><div className="today-number"><p><FaCheck/></p></div>Read</li>
                    <li onClick={handleReceipt} className={show1 === 3 ? `nav-active notification-nav-close`: 'notification-nav-close'}><div className="clear icon"><FaTrash/></div>Clear all</li>
                </nav>
            </div>
            <div className="notification-body">
                <div className="table-top">
                    <p>Inventory Item</p>
                    <div className="table-filters">
                        <div className="table-search">
                            <IoSearchOutline/>
                            <input
                                type='text'
                                placeholder='Search'
                            >
                            </input>
                        </div>
                        <div className="table-filter-outer">
                            <div className="table-filter" onClick={handleToggle}>
                                <IoFunnelOutline/>
                                <p >Filter</p>
                            </div>
                            {show && (
                                <div className="custom custom-2">
                                    <CustomFilter toggle={handleToggle}/>
                                </div>
                            )}
                        </div>
                        
                        <div className="table-filter">
                            <BsCalendar2Week/>
                            <p>Filter</p>
                        </div>
                        <div className="table-filter">
                            <IoPaperPlaneOutline/>
                            <p>Search</p>
                        </div>
                    </div>
                </div>
                <div className="notification-message">
                {notifications.map((notification)=>{
                    return(
                        <div key={notification.id}>
                            <Message toggle={handleDelete} title={notification.title} body={notification.body} id={notification.id} getid={handleid}/>
                        </div>
                    )
                })}
                </div>
                <div className="notification-pagination">
                <TablePagination
                    component="div"
                    count={100}
                    page={page}
                    onPageChange={handleChangePage}
                    rowsPerPage={rowsPerPage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
                </div>
            </div>
           {showdelete && (<DeleteModal toggle={handleDelete} id={id} locations={notifications} setLocations={setNotifications}/>)} 
        </div>
    );
}
 
export default Notification;