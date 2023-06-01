/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import React, { useContext } from "react";
import { AuthContext } from "../../Layout/ContextProvider/ContextProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const SharedCard = ({ menu }) => {
  // eslint-disable-next-line no-unused-vars
  const { user } = useContext(AuthContext);
  const { image, name, recipe } = menu;
  const navigate = useNavigate();
  const findMenuData = (menu) => {
    console.log(menu);
    if (user) {
      fetch("http://localhost:5000/cart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(menu),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if(data.insertedId){
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Added Successfully',
              showConfirmButton: false,
              timer: 1500
            })
          } 
        });
    } else {
      Swal.fire({
        title: 'Please Login First',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Login First!'
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/login')
        }
      })
    }
  };
  return (
    <div>
      <div className="card w-96 bg-base-300 shadow-xl">
        <figure>
          <img src={image} alt="Shoes" className="w-full" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>
          <div className="card-actions">
            <button
              onClick={() => findMenuData(menu)}
              className="btn bg-[#7FD8BE] uppercase border-0"
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SharedCard;
