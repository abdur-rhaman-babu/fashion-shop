import { createBrowserRouter } from "react-router-dom";
import MainLayout from './../components/MainLayout/MainLayout';
import Home from "../Pages/Home/Home";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Fashion from "../components/Fashion/Fashion";
import Fashions from './../Pages/Fashions/Fashions';

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <Home />,
                loader: () => fetch('../categories.json'),
                children:[
                    {
                        path:'category/:category',
                        element:<Fashion/>,
                        loader: ()=> fetch('../fashions.json')
                    },
                    {
                        path:'/',
                        element:<Fashion/>,
                        loader: ()=> fetch('../fashions.json')
                    }
                ]
            },
            {
                path:'/fashions',
                element:<Fashions/>
            },
            {
                path: '/dashboard',
                element: <Dashboard />
            }
        ]
    }
]);



export default router;