import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../Components/Mainlayout";
import UpadateCoffe from "../Pages/UpadateCoffe";
import AddCoffe from "../Pages/AddCoffe";

const route = createBrowserRouter([
    {
        path:'/',
        element:<Mainlayout></Mainlayout>,
        children:[
            {
                path:"/updatecoffe",
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