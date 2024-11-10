import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import loginImg from "../assets/preciousLogoSquare.png";
import googleIcon from "../assets/googleIcon.png";
import facebookIcon from "../assets/facebookIcon.png";
import { Link } from "react-router-dom";

const formValidationSchema = Yup.object().shape({
  fullName: Yup.string()
    .min(3, "*Full name must be at least 3 characters")
    .required("*Full name is required"),
  email: Yup.string()
    .email("*Please enter a valid email")
    .required("*Email is required"),
  phoneNumber: Yup.string()
    .matches(/^\d{10}$/, "*Phone number must be exactly 10 digits")
    .required("*Phone number is required"),
  password: Yup.string()
    .min(8, "*Password should have at least 8 characters")
    .matches(/[a-zA-Z]/, "*Password must contain letters")
    .matches(/\d/, "*Password must contain numbers")
    .required("*Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "*Passwords must match")
    .required("*Confirm password is required"),
});

const handleFormSubmission = (values) => {
  console.log("Form data", values);
};

const SignUp = () => {
  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      phoneNumber: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: formValidationSchema,
    onSubmit: handleFormSubmission,
  });

  return (
    <div
      style={{ backgroundColor: "#202529" }}
      className="flex items-center justify-center min-h-screen"
    >
      <div className="w-full max-w-4xl mx-auto shadow-lg bg-white rounded-lg overflow-hidden m-8">
        <div className="flex flex-col md:flex-row">
          <div className="flex items-center justify-center bg-black md:w-1/2">
            <img
              src={loginImg}
              alt="PreciousInfoSystem Background"
              className="max-w-[70%] max-h-[70%] mx-auto mb-3"
            />
          </div>

          <div className="w-full p-8 py-12 md:w-1/2">
            <h1 className="text-5xl font-extrabold text-center text-red-600 mb-9">
              SignUp
            </h1>
            <form onSubmit={formik.handleSubmit}>
              <div className="mb-4">
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-red-400"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.fullName}
                />
                {formik.touched.fullName && formik.errors.fullName ? (
                  <div className="text-red-500 text-sm">
                    {formik.errors.fullName}
                  </div>
                ) : null}
              </div>

              <div className="mb-4">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-red-400"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                />
                {formik.touched.email && formik.errors.email ? (
                  <div className="text-red-500 text-sm">
                    {formik.errors.email}
                  </div>
                ) : null}
              </div>

              <div className="mb-4">
                <input
                  type="tel"
                  name="phoneNumber"
                  placeholder="Phone Number"
                  pattern="[0-9]{10}"
                  maxLength={10}
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-red-400"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.phoneNumber.replace(/\D/g, "")}
                />
                {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
                  <div className="text-red-500 text-sm">
                    {formik.errors.phoneNumber}
                  </div>
                ) : null}
              </div>

              <div className="mb-4">
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-red-400"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                />
                {formik.touched.password && formik.errors.password ? (
                  <div className="text-red-500 text-sm">
                    {formik.errors.password}
                  </div>
                ) : null}
              </div>

              <div className="mb-4">
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-red-400"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.confirmPassword}
                />
                {formik.touched.confirmPassword &&
                formik.errors.confirmPassword ? (
                  <div className="text-red-500 text-sm">
                    {formik.errors.confirmPassword}
                  </div>
                ) : null}
              </div>

              <button
                type="submit"
                className="w-full bg-red-600 text-white text-xl p-3 rounded font-bold hover:bg-red-700 transition duration-200"
              >
                Sign Up
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
                Sign up with Google
              </span>
            </button>

            <button className="flex items-center justify-center w-full border border-gray-300 rounded p-3 hover:bg-gray-100">
              <img
                src={facebookIcon}
                alt="Facebook Icon"
                className="w-5 mr-3"
              />
              <span className="flex-grow text-center text-xl text-gray-700">
                Sign up with Facebook
              </span>
            </button>

            <div className="text-center mt-6">
              <p className="text-gray-700 mt-9">
                Already have an account?{" "}
                <Link
                  to="/eCommerce-reactjs"
                  className="text-red-600 hover:underline"
                >
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
