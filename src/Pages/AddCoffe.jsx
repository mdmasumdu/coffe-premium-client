import Swal from 'sweetalert2'


const AddCoffe = () => {


    const addcoffehandler=(e)=>{
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
        fetch('http://localhost:5000/coffee',{
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body: JSON.stringify(newCoffe)
           })
           .then(res=>res.json())
           .then(data=> {
            if(data.insertedId){
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
            <h1 className="text-4xl text-center text-black pt-5 pb-5">Add a coffe</h1>
            <form onSubmit={addcoffehandler}>

                {/* form name and quantity row */}
                  <div className="flex justify-center gap-5 text-black">
                        <div className="form-control md:w-1/2">
                        <label className="label">
                        <span className="label-text text-black">Your NAME</span>
                        </label>
                        <label className="input-group input-group-vertical">
                        <input type="text" placeholder="YOUR NAME" name="name" className="input input-bordered md:w-full bg-[#F4F3F0]" />
                        </label>
                        </div>

                        <div className="form-control md:w-1/2">
                        <label className="label">
                        <span className="label-text text-black">Available Quantiy</span>
                        </label>
                        <label className="input-group input-group-vertical">
                        <input type="text" placeholder="Available Quantity" name="quantity" className="input input-bordered md:w-full bg-[#F4F3F0]" />
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
                        <input type="text" placeholder="Suplier NAME" name="supplier" className="input input-bordered md:w-full bg-[#F4F3F0]" />
                        </label>
                        </div>

                        <div className="form-control md:w-1/2">
                        <label className="label">
                        <span className="label-text text-black">TASTE</span>
                        </label>
                        <label className="input-group input-group-vertical">
                        <input type="text" placeholder="taste" name="taste" className="input input-bordered md:w-full bg-[#F4F3F0]" />
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
                        <input type="text" placeholder="category" name="category" className="input input-bordered md:w-full bg-[#F4F3F0]" />
                        </label>
                        </div>

                        <div className="form-control md:w-1/2">
                        <label className="label">
                        <span className="label-text text-black">Details</span>
                        </label>
                        <label className="input-group input-group-vertical">
                        <input type="text" placeholder="Details" name="details" className="input input-bordered md:w-full bg-[#F4F3F0]" />
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
                        <input type="text" placeholder="PhotoURL" name="photo" className="input input-bordered md:w-full bg-[#F4F3F0]" />
                        </label>
                        </div>
                  </div>
                  <input type="submit" value="ADD COFFE" className="btn btn-block mt-5" />
            </form>
            
        </div>
    );
};

export default AddCoffe;