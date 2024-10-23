import { Navigate, useRoutes } from 'react-router-dom';
import Layout from './Components/layout/Layout';
import Dashboard from './Pages/Dashboard/Dashboard';
import Location from './Pages/Location/Location';
import Categories from './Pages/Categories/Categories';
import AddProduct from './Pages/Categories/AddProduct';
import ViewProduct from './Pages/Categories/ViewProduct';
import Order from './Pages/Order/Order';
import Settings from './Pages/Settings/Settings';
import Notification from './Pages/Notification/Notification';
import Draft from './Pages/Categories/Draft';
import Login from './Pages/Login/Login';
import Signin from './Pages/SignIn/Sigin';
import Sales from './Pages/Sales/Sales';
import Employees from './Pages/Clockinout/Employee';
import Clockinout from './Pages/Clockinout/Clockinout';
import Transaction from './Pages/Sales/Transaction';
import Arrangement from './Pages/Arrangement/Arrangement';
import AddSit from './Pages/Arrangement/AddSit';
export default function Router() {
    const routes = useRoutes([
        // {
        //     path: '/',
        //     element: <LoginPage />, // Renders LoginPage component when the root path is accessed
        // },
        {
          path: '/',
          element: <Login/>, // Renders LoginPage component when the root path is accessed
        },
        {
          path: '/signin',
          element: <Signin/>, // Renders LoginPage component when the root path is accessed
        },
        {
            path: '/dashboard',
            element: <Layout/>,
            children: [
              { index: true, element: <Dashboard/> },
              { path: 'location', element: <Location/> },
              { path: 'sales', element: <Categories/> },
              { path: 'sales/product', element: <AddProduct/> },
              { path: 'sales/product/draft', element: <Draft/> },
              { path: 'sales/product/view', element: <ViewProduct/> },
              { path: 'employee', element: <Employees/> },
              { path: 'clocking', element: <Clockinout/> },
              { path: 'orders', element: <Order/> },
              { path: 'settings', element: <Settings/> },
              { path: 'notification', element: <Notification/> },
              { path: 'reports', element: <Sales/> },
              { path: 'transaction', element: <Transaction/> },
              { path: 'arrangement', element: <Arrangement/> },
              { path: 'add-sit', element: <AddSit/> },
            //   { path: 'employee', element: <Notfound/> },
            //   { path: 'document', element: <Notfound/> },
            //   { path: 'report', element: <Notfound/> },
            ],
        },
    ]);
    
  
    return routes;
  }