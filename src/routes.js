import { Navigate, useRoutes } from 'react-router-dom';
import Layout from './Components/layout/Layout';
import Dashboard from './Pages/Dashboard/Dashboard';
import Location from './Pages/Location/Location';
import Categories from './Pages/Categories/Categories';
import AddProduct from './Pages/Categories/AddProduct';
import ViewProduct from './Pages/Categories/ViewProduct';
import Order from './Pages/Order/Order';
export default function Router() {
    const routes = useRoutes([
        // {
        //     path: '/',
        //     element: <LoginPage />, // Renders LoginPage component when the root path is accessed
        // },
        {
            path: '/',
            element: <Layout/>,
            children: [
              { index: true, element: <Dashboard/> },
              { path: 'location', element: <Location/> },
              { path: 'category', element: <Categories/> },
              { path: 'category/product', element: <AddProduct/> },
              { path: 'category/product/view', element: <ViewProduct/> },
              { path: 'orders', element: <Order/> },
            //   { path: 'career', element: <Notfound/> },
            //   { path: 'employee', element: <Notfound/> },
            //   { path: 'document', element: <Notfound/> },
            //   { path: 'report', element: <Notfound/> },
            ],
        },
    ]);
    
  
    return routes;
  }