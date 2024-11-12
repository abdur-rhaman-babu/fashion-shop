import { createBrowserRouter } from "react-router-dom";
import MainLayout from './../components/MainLayout/MainLayout';
import Home from "../Pages/Home/Home";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Fashion from "../components/Fashion/Fashion";
import Fashions from './../Pages/Fashions/Fashions';
import ProductDetails from "../components/ProductDetails/ProductDetails";
import AddCart from "../components/AddCart/AddCart";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <Home />,
                loader: ()=> fetch('../fashions.json')
                // children:[
                //     {
                //         path:'category/:category',
                //         element:<Fashion/>,
                //         loader: ()=> fetch('../fashions.json')
                //     },
                //     {
                //         path:'/',
                //         element:<Fashion/>,
                //         loader: ()=> fetch('../fashions.json')
                //     }
                // ]
            },
            {
                path:'/fashions',
                element:<Fashions/>,
                loader: () => fetch('../categories.json'),
                children:[
                    {
                        path:'category/:category',
                        element:<Fashion/>,
                        loader: ()=> fetch('../fashions.json')
                    },
                    {
                        path:'/fashions',
                        element:<Fashion/>,
                        loader: ()=> fetch('../fashions.json')
                    }
                ]
            },
            {
                path: '/dashboard',
                element: <Dashboard />
            },
            {
                path:'/fashion/:fashionId',
                element:<ProductDetails/>,
                loader:()=> fetch('../fashions.json')
            },
            {
                path:'/addCart',
                element:<AddCart/>
            }
        ]
    }
]);



export default router;