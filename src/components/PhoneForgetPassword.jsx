import React, { useState } from "react";
import { FaLock } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";

function PhoneForgetPassword() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [numberEntry, setNumberEntry] = useState([]);
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation for Phone number
    if (phoneNumber.trim() === "") {
      setMessage("*Phone number is required.");
      return;
    }

    const phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(phoneNumber)) {
      setMessage("*Please enter a valid 10-digit phone number.");
      return;
    }

    // If all validations pass, proceed with submission
    const newNumberEntry = {
      phoneNumber: phoneNumber,
    };
    setNumberEntry([...numberEntry, newNumberEntry]);
    setPhoneNumber("");
    setMessage("*OTP has been sent to your phone number.");
  };

  const handlePhoneNumberChange = (e) => {
    const input = e.target.value.replace(/\D/g, "");
    setPhoneNumber(input);
    setMessage(""); // Clear message on input change
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
          Enter the phone number you used to register, and we'll send you an OTP
          to reset your password.
        </p>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="phoneNumber"
              className="block text-sm font-medium text-gray-700"
            >
              Phone Number *
            </label>
            <input
              type="tel"
              id="phoneNumber"
              value={phoneNumber}
              maxLength={10}
              onChange={handlePhoneNumberChange}
              placeholder="Enter your phone number"
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-red-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-red-600 text-white py-2 rounded-md hover:bg-red-700 transition duration-200"
          >
            Send OTP
          </button>
        </form>
        <div className="text-sm mt-2 h-5" id="message"> {/* Fixed height for message */}
          {message && (
            <p
              className={`${
                message.includes("OTP") ? "text-green-500" : "text-red-500"
              }`}
            >
              {message}
            </p>
          )}
        </div>
        <p className="text-center text-sm text-gray-700 mt-3">
          Forgot your phone number?{" "}
          <Link
            to="/eCommerce-reactjs/forget-password"
            className="text-red-500 hover:text-red-600"
          >
            Try using email
          </Link>
        </p>
      </div>
    </div>
  );
}

export default PhoneForgetPassword;
