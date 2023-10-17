/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const Coffecard = ({coffe,setdisCoffe,discoffe}) => {



    const deltehanler= id =>{
        console.log(id)
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {

              console.log('delte confirmed')
                fetch(`http://localhost:5000/coffee/${id}`,{
                    method:"DELETE"
                })
                .then(res=>res.json())
                .then(data=>{

                    if(data.deletedCount){
                              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
               
              )
              const remaining = discoffe.filter(cof=>cof._id !==id)
              setdisCoffe(remaining)

                    }
                })
        
            }
          })

    }

    const {_id,name,quantity,supplier,taste,category,details,photo} = coffe
    return (
        <div>
            <div className="card card-side bg-base-100 shadow-xl">
  <figure><img src={photo} alt="Movie"/></figure>
  <div className="card-body flex-row">
    <div>
    <h2 className="card-title">{name}</h2>
    <p>{details}</p>
    <h1><span className="font-bold">Quantity:</span> {quantity}</h1>
    <h1><span className="font-bold">Supplier:</span> {supplier}</h1>
    <h1><span className="font-bold">Taste: </span>{taste}</h1>
    <h1><span className="font-bold">Category:</span> {category}</h1>
    </div>
    <div className="card-actions">
    <div className="btn-group btn-group-vertical space-y-5">
  <button className="btn">View</button>
  <Link to={`/updatecoffee/${_id}`} ><button className="btn">Edit</button></Link>
  <button className="btn" onClick={()=>deltehanler(_id)}>X</button>
</div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Coffecard;