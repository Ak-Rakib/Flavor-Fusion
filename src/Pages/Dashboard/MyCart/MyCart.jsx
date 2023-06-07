import React from "react";
import useCart from "../../../Hooks/useCart";
import { FaTrashAlt } from 'react-icons/fa';
import Swal from "sweetalert2";


const MyCart = () => {
  // eslint-disable-next-line no-unused-vars
  const [cart, refetch] = useCart();
  // eslint-disable-next-line no-unused-vars
  const itemPrice = cart.reduce((sum, item) => item.price + sum, 0);



  const deleteHandler = item => {
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
            fetch(`http://localhost:5000/cart/${item._id}`, {
                method: "DELETE",
            })
            .then(res => res.json())
            .then(data => {
                if(data.deletedCount>0){
                    refetch()
                    Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                      )
                }
            })
          
        }
      })
  }

  
  return (
    <div>
      <div className="flex justify-between items-center mb-5 gap-5">
        <p className="uppercase text-xl font-bold">
          Total Orders: {cart.length}
        </p>
        <p className="uppercase text-xl font-bold">Total Price: ${itemPrice}</p>
        <button className="btn bg-[#7FD8BE] border-0">Pay</button>
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                #
              </th>
              <th className="uppercase font-bold">Item Image</th>
              <th className="uppercase font-bold">Item Name</th>
              <th className="uppercase font-bold">Price</th>
              <th className="uppercase font-bold">Action</th>
            </tr>
          </thead>
          <tbody>
            {
                cart.map((item, index) =>  <tr key={item._id}>
                <th>
                  {index+1}
                </th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={item.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{}</div>
                    </div>
                  </div>
                </td>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <th>
                  <button onClick={() => deleteHandler(item)} className="btn btn-ghost btn-lg bg-[#7FD8BE] border-0"><FaTrashAlt></FaTrashAlt></button>
                </th>
              </tr> )
            }
           
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyCart;
