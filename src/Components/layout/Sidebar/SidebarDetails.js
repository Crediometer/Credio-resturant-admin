import {FiHome} from 'react-icons/fi'
import {BiCategory, BiSolidCategory} from 'react-icons/bi'
import {IoLocationOutline, IoNotifications, IoNotificationsOutline} from 'react-icons/io5'
import { TbClockCheck } from "react-icons/tb";
import {MdShoppingCartCheckout} from 'react-icons/md'
import {BsBoxSeam} from 'react-icons/bs'
export const mainsidebar = [
    {
        title:"Dashboard",
        icon:<FiHome/>,
        link:"/dashboard"
    },
    // {
    //     title:"Categories",
    //     icon:<BiCategory/>,
    //     link:"/category"
    // },
    {
        title:"Clocking in/out",
        icon:<TbClockCheck/>,
        link:"/dashboard/clocking"
    },
    {
        title:"Seat Arrangement",
        icon:<IoLocationOutline/>,
        // link:"/dashboard/location"
    },
    {
        title:"Sales processing ",
        icon:<BsBoxSeam/>,
        link:"/dashboard/sales"
    },
    {
        title:"Staff Management",
        icon:<TbClockCheck/>,
        link:"/dashboard/employee"
    },
    {
        title:"End of Day Report",
        icon:<BsBoxSeam/>,
        link:"/dashboard/transaction"
    },
    {
        title:"Analytics",
        icon:<BsBoxSeam/>,
        // link:"/dashboard/orders"
    },
    {
        title:"Notification",
        icon:<IoNotificationsOutline/>,
        link:"/dashboard/notification"
    },
    
]
