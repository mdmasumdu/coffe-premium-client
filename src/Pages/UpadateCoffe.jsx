import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpadateCoffe = () => {
    const toupdate = useLoaderData()



    const updatecoffehandler=(e)=>{
        e.preventDefault()

        const form = e.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo= form.photo.value;

        const newCoffe= {name,quantity,supplier,taste,category,details,photo}
        fetch(`http://localhost:5000/coffee/${toupdate._id}`,{
            method:"PUT",
            headers:{
                "content-type":"application/json"
            },
            body: JSON.stringify(newCoffe)
           })
           .then(res=>res.json())
           .then(data=> {
            console.log(data)
            if(data.modifiedCount){
                Swal.fire({
                    title: 'success!',
                    text: 'succsesfully added',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
           })
    }
    return (
      
        <div className="bg-[#D2B48C] p-10">
            <h1 className="text-4xl text-center text-black pt-5 pb-5">Update:{toupdate.name}</h1>
            <form onSubmit={updatecoffehandler}>

                {/* form name and quantity row */}
                  <div className="flex justify-center gap-5 text-black">
                        <div className="form-control md:w-1/2">
                        <label className="label">
                        <span className="label-text text-black">Your NAME</span>
                        </label>
                        <label className="input-group input-group-vertical">
                        <input type="text" defaultValue={toupdate.name} placeholder="YOUR NAME" name="name" className="input input-bordered md:w-full bg-[#F4F3F0]" />
                        </label>
                        </div>

                        <div className="form-control md:w-1/2">
                        <label className="label">
                        <span className="label-text text-black">Available Quantiy</span>
                        </label>
                        <label className="input-group input-group-vertical">
                        <input type="text" placeholder="Available Quantity" defaultValue={toupdate.quantity} name="quantity" className="input input-bordered md:w-full bg-[#F4F3F0]" />
                        </label>
                        </div>
               
                  
                  </div>
                {/* form supplier and taste row */}
                  <div className="flex justify-center gap-5 text-black">
                        <div className="form-control md:w-1/2">
                        <label className="label">
                        <span className="label-text text-black">Supplier Name</span>
                        </label>
                        <label className="input-group input-group-vertical">
                        <input type="text" defaultValue={toupdate.supplier} placeholder="Suplier NAME" name="supplier" className="input input-bordered md:w-full bg-[#F4F3F0]" />
                        </label>
                        </div>

                        <div className="form-control md:w-1/2">
                        <label className="label">
                        <span className="label-text text-black">TASTE</span>
                        </label>
                        <label className="input-group input-group-vertical">
                        <input type="text" placeholder="taste" defaultValue={toupdate.taste} name="taste" className="input input-bordered md:w-full bg-[#F4F3F0]" />
                        </label>
                        </div>
               
                  
                  </div>
                {/* form category and details row */}
                  <div className="flex justify-center gap-5 text-black">
                        <div className="form-control md:w-1/2">
                        <label className="label">
                        <span className="label-text text-black">Category</span>
                        </label>
                        <label className="input-group input-group-vertical">
                        <input type="text" placeholder="category" defaultValue={toupdate.category} name="category" className="input input-bordered md:w-full bg-[#F4F3F0]" />
                        </label>
                        </div>

                        <div className="form-control md:w-1/2">
                        <label className="label">
                        <span className="label-text text-black">Details</span>
                        </label>
                        <label className="input-group input-group-vertical">
                        <input type="text" placeholder="Details" defaultValue={toupdate.details} name="details" className="input input-bordered md:w-full bg-[#F4F3F0]" />
                        </label>
                        </div>
               
                  
                  </div>
                {/* form row */}
                  <div className="flex justify-center gap-5 text-black">
                        <div className="form-control w-full">
                        <label className="label">
                        <span className="label-text text-black">PhotoURL</span>
                        </label>
                        <label className="input-group input-group-vertical">
                        <input type="text" defaultValue={toupdate.photo} placeholder="PhotoURL" name="photo" className="input input-bordered md:w-full bg-[#F4F3F0]" />
                        </label>
                        </div>
                  </div>
                  <input type="submit" value="Update COFFE" className="btn btn-block mt-5" />
            </form>
            
        </div>
    );
};

export default UpadateCoffe;