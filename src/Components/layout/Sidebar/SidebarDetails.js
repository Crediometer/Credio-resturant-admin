import {FiHome} from 'react-icons/fi'
import {BiCategory, BiSolidCategory} from 'react-icons/bi'
import {IoLocationOutline, IoNotifications, IoNotificationsOutline} from 'react-icons/io5'
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
        title:"Inventory",
        icon:<MdShoppingCartCheckout/>,
        link:"/inventory"
    },
    {
        title:"Location",
        icon:<IoLocationOutline/>,
        link:"/location"
    },
    {
        title:"Orders",
        icon:<BsBoxSeam/>,
        link:"/orders"
    },
    {
        title:"Notification",
        icon:<IoNotificationsOutline/>,
        link:"/notification"
    },
]
