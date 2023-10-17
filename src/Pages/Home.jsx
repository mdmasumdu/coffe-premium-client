import { useLoaderData } from "react-router-dom";
import Coffecard from "./Coffecard";
import { useState } from "react";

const Home = () => {
    const loadedcoffee = useLoaderData()
    const [discoffe,setdisCoffe] = useState(loadedcoffee)
    return (
        <div>
          <h1 className="text-4xl font-bold text-center">Coffe Available {discoffe.length}</h1>
          <div className="grid md:grid-cols-2 gap-5 mt-10 p-10">
            {
                discoffe?.map(coffe=><Coffecard key={coffe._id}  coffe={coffe} discoffe={discoffe} setdisCoffe={setdisCoffe}></Coffecard>)
            }
          </div>
            
        </div>
    );
};

export default Home;