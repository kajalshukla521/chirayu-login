import React, { useState } from "react";
import loginImg from "../assets/preciousLogoSquare.png";
import googleIcon from "../assets/googleIcon.png";
import facebookIcon from "../assets/facebookIcon.png";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [allEntry, setAllEntry] = useState([]);
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = () => {
    const newErrors = {};
    if (!email) {
      newErrors.email = "*Please enter your email address";
    } else if (!validateEmail(email)) {
      newErrors.email = "*Please enter a valid email";
    }
    if (!password) {
      newErrors.password = "*Please enter your password";
    } else if (password.length < 6) {
      newErrors.password = "*Password must be at least 6 characters";
    }
    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const submitForm = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const newEntry = {
        email: email,
        password: password,
      };
      setAllEntry([...allEntry, newEntry]);
      alert("Login Successful!!");
      setEmail("");
      setPassword("");
      setErrors({});
    }
  };

  return (
    <div
      style={{ backgroundColor: "#202529" }}
      className="flex items-center justify-center min-h-screen"
    >
      <div className="w-full max-w-4xl mx-auto shadow-lg bg-white rounded-lg overflow-hidden m-8">
        <div className="flex flex-col md:flex-row">
          {/* Left-section */}
          <div className="flex items-center justify-center bg-black md:w-1/2">
            <img
              src={loginImg}
              alt="PreciousInfoSystem Background"
              className="max-w-[70%] max-h-[70%] mx-auto mb-3"
            />
          </div>

          {/* Right section */}
          <div className="w-full p-8 py-12 md:w-1/2">
            <h1 className="text-5xl font-extrabold text-center text-red-600 mb-9">
              LogIn
            </h1>

            <form onSubmit={submitForm}>
              <div className="mb-3">
                <input
                  type="text"
                  name="email"
                  placeholder="Enter your email address"
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-red-400"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <div className="h-5">
                  {errors.email && (
                    <p className="text-red-500 text-sm">{errors.email}</p>
                  )}
                </div>
              </div>
              <div className="mb-3 relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Enter password"
                  className="w-full p-3 pr-10 border border-gray-300 rounded focus:outline-none focus:border-red-400"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <div>
                  {showPassword ? (
                    <AiFillEye
                      className="absolute right-3 top-6 transform -translate-y-1/2 w-6 h-6 text-gray-800 cursor-pointer"
                      onClick={handleShowPassword}
                    />
                  ) : (
                    <AiFillEyeInvisible
                      className="absolute right-3 top-6 transform -translate-y-1/2 w-6 h-6 text-gray-800 cursor-pointer"
                      onClick={handleShowPassword}
                    />
                  )}
                </div>
                <div className="h-5">
                  {errors.password && (
                    <p className="text-red-500 text-sm">{errors.password}</p>
                  )}
                </div>
                <Link
                  to="/eCommerce-reactjs/forget-password"
                  className="text-red-600 block text-right mb-4 "
                >
                  Forget password?
                </Link>
              </div>
              <button
                type="submit"
                className="w-full bg-red-600 text-white text-xl p-3 rounded font-bold hover:bg-red-700 transition duration-200"
              >
                Log In
              </button>
            </form>
            <div className="flex items-center my-6">
              <hr className="flex-grow border-gray-300" />
              <p className="text-center text-gray-500 font-semibold mx-4">OR</p>
              <hr className="flex-grow border-gray-300" />
            </div>

            <button className="flex items-center justify-center w-full border border-gray-300 rounded p-3 mb-3 hover:bg-gray-100">
              <img src={googleIcon} alt="Google Icon" className="w-6" />
              <span className="flex-grow text-center text-xl text-gray-700">
                Login with Google
              </span>
            </button>

            <button className="flex items-center justify-center w-full border border-gray-300 rounded p-3 hover:bg-gray-100">
              <img
                src={facebookIcon}
                alt="Facebook Icon"
                className="w-5 mr-3"
              />
              <span className="flex-grow text-center text-xl text-gray-700">
                Login with Facebook
              </span>
            </button>

            <div className="text-center mt-6">
              <p className="text-gray-700 mt-9">
                Don't have an account?{" "}
                <Link
                  to="/eCommerce-reactjs/sign-up"
                  className="text-red-600 mt-3"
                >
                  Signup
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
