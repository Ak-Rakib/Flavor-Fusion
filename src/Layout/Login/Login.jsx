import React, { useEffect, useRef, useState } from "react";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";

const Login = () => {
    const captchaRef = useRef(null);
    const [disable, setDisable] = useState(true);
  const foundLoginData = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const pass = form.password.value;
    console.log(email, pass);
  };

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleValidateCaptcha = () => {
    let user_captcha_value = captchaRef.current.value;
    if(validateCaptcha(user_captcha_value)){
        setDisable(false);
    } else {
        setDisable(true);
    }
  }

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col-reverse lg:flex-row-reverse">
        <form
          onSubmit={foundLoginData}
          className="card  w-full max-w-sm shadow-2xl bg-base-100"
        >
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Email"
                name="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Password"
                name="password"
                className="input input-bordered"
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control">
              <LoadCanvasTemplate />
              <input
              ref={captchaRef}
                type="text"
                placeholder="Enter Your value"
                name=""
                className="input input-bordered"
              />
              <button onClick={handleValidateCaptcha} className="btn btn-outline btn-xs">Validate</button>
            </div>

            <div className="form-control mt-6">
              <button disabled={disable} className="btn btn-primary">Login</button>
            </div>
          </div>
        </form>
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
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

export default Login;
