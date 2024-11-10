import React, { useState } from "react";
import { FaLock } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Custom validation for email
    if (email.trim() === "") {
      setMessage("*Email is required.");
      return;
    }

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
      setMessage("*Please enter a valid email address.");
      return;
    }

    // If all validations pass, proceed with form submission
    setMessage("*A password reset link has been sent to your email.");
    setEmail(""); // Clear the input after submission
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setMessage(""); // Clear the message on input change
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-800">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <div className="flex items-center justify-between mb-4">
          <h5 className="text-lg font-semibold text-gray-700 flex items-center">
            <FaLock className="mr-2" /> Forgot password?
          </h5>
          <button type="button" className="text-gray-500 hover:text-gray-700">
            <Link to="/eCommerce-reactjs">
              <AiOutlineClose className="w-5 h-5" aria-label="Close" />
            </Link>
          </button>
        </div>
        <p className="text-sm text-gray-700 mb-6">
          Enter the email address you used to register, and we'll send you a
          link to reset your password.
        </p>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email *
            </label>
            <input
              type="text"
              id="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="Enter your email"
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-red-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-red-600 text-white py-2 rounded-md hover:bg-red-700 transition duration-200"
          >
            Send link
          </button>
        </form>
        <div
          className="text-sm mt-2 h-5" // Fixed height to avoid expansion
          id="message"
        >
          {message && (
            <p
              className={`${
                message.includes("A password reset link")
                  ? "text-green-500"
                  : "text-red-500"
              }`}
            >
              {message}
            </p>
          )}
        </div>
        <p className="text-center text-sm text-gray-700 mt-3">
          Forgot your email?{" "}
          <Link
            to="/eCommerce-reactjs/forget-password-phone-number"
            className="text-red-500 hover:text-red-600"
          >
            Try phone number instead
          </Link>
        </p>
      </div>
    </div>
  );
}

export default ForgotPassword;
