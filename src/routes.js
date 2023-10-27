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
              { path: 'inventory', element: <Categories/> },
              { path: 'inventory/product', element: <AddProduct/> },
              { path: 'inventory/product/draft', element: <Draft/> },
              { path: 'inventory/product/view', element: <ViewProduct/> },
              { path: 'orders', element: <Order/> },
              { path: 'settings', element: <Settings/> },
              { path: 'notification', element: <Notification/> },
            //   { path: 'employee', element: <Notfound/> },
            //   { path: 'document', element: <Notfound/> },
            //   { path: 'report', element: <Notfound/> },
            ],
        },
    ]);
    
  
    return routes;
  }