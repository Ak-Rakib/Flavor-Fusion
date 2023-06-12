/* eslint-disable no-undef */
import React from "react";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../ContextProvider/ContextProvider";
import { useForm } from "react-hook-form";




const SignUp = () => {

  const { signUp, userUpdate } = useContext(AuthContext);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();


  const onSubmit = (data) => {

    signUp(data.email, data.password, data.photoURL)
    .then(result => {
        const loggedUser = result.user;
        userUpdate(data.name, data.photoURL)
        .then(() => {
          const usersData = {name: data.name, email: data.email}
          fetch('http://localhost:5000/users', {
            method: "POST",
            headers: {
              'content-type': 'application/json'
            },
            body: JSON.stringify(usersData)
          })
          .then(res => res.json())
          .then(data => {
            console.log(data);
          })
        })
    });
    navigate('/login');
};

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col-reverse lg:flex-row-reverse">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="card  w-full max-w-sm shadow-2xl bg-base-100"
        >
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="name"
                placeholder="Name"
                name="name"
                {...register("name", { required: true })}
                className="input input-bordered"
              />
              {errors.name && (
                <span className="text-red-600">This field is required</span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">photoURL</span>
              </label>
              <input
                type="photo"
                placeholder="photoURL"
                name="photoURL"
                {...register("photoURL", { required: true })}
                className="input input-bordered"
              />
              {errors.photoURL && (
                <span className="text-red-600">This field is required</span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Email"
                name="email"
                {...register("email", { required: true })}
                className="input input-bordered"
              />
              {errors.email && (
                <span className="text-red-600">This field is required</span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Password"
                name="password"
                {...register(
                  "password",
                  { required: true, minLength: 6, maxLength: 10 },
                  { pattern: /(?:([A-Z])*([a-z]))/ }
                )}
                className="input input-bordered"
              />
              {errors.password?.type === "required" && (
                <p className="text-red-600" role="alert">
                  First name is required
                </p>
              )}
              {errors.password?.type === "minLength" && (
                <p className="text-red-600" role="alert">
                  Minimum Length 6 character
                </p>
              )}
              {errors.password?.type === "maxLength" && (
                <p className="text-red-600" role="alert">
                  Maximum Length 10 character
                </p>
              )}
              {errors.password?.type === "pattern" && (
                <p className="text-red-600" role="alert">
                  Must be One Uppercase and Lowercase
                </p>
              )}

              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Already Have an account? please <Link to="/login">LogIn</Link>
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">SignUp</button>
            </div>
          </div>
        </form>
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">SignUp now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
