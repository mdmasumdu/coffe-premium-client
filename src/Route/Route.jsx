import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../Components/Mainlayout";
import UpadateCoffe from "../Pages/UpadateCoffe";
import AddCoffe from "../Pages/AddCoffe";
import Home from "../Pages/Home";

const route = createBrowserRouter([
    {
        path:'/',
        element:<Mainlayout></Mainlayout>,
        children:[
            {
                path:"/",
                loader:()=>fetch('http://localhost:5000/coffee'),
                element:<Home></Home>

            },
            {
                path:"/updatecoffee/:id",
                loader:({params})=>fetch(`http://localhost:5000/coffee/${params.id}`),
                element:<UpadateCoffe></UpadateCoffe>
            },
            {
                path:"addcoffe",
                element:<AddCoffe></AddCoffe>
            }
        ]
    }
])

export default route;