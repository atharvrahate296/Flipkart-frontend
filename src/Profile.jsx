import React from "react";

function Profile() {
  return (
    <div className="bg-white min-h-screen py-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-6">
        {/* Sidebar */}
        <div className="w-full md:w-80 bg-white rounded shadow p-4 mb-6 md:mb-0">
          {/* User Info */}
          <div className="flex items-center gap-4 mb-8">
            <div className="w-20 h-20 rounded-full bg-yellow-300 flex items-center justify-center text-5xl font-bold text-white">
              <span role="img" aria-label="avatar">
                👦
              </span>
            </div>
            <div>
              <div className="text-gray-600 ">Hello,</div>
              <div className="font-semibold text-lg text-gray-850">
                JOHN DOE
              </div>
            </div>
          </div>
          {/* Navigation */}
          <nav>
            <div className="mb-4">
              <div className="flex items-center gap-2 text-blue-600 font-semibold mb-2">
                <span className="material-icons mr-10">Home</span>
                My Orders
              </div>
            </div>
            <br />
            <div className="mb-4">
              <div className="text-gray-400 font-semibold mb-2">
                ACCOUNT SETTINGS
              </div>
              <ul className="ml-2">
                <li className="text-blue-600 font-semibold bg-blue-50 rounded px-2 py-1 mb-1">
                  Profile Information
                </li>
                <li className="text-gray-700 px-2 py-1 mb-1 cursor-pointer hover:bg-gray-100 rounded">
                  Manage Addresses
                </li>
                <li className="text-gray-700 px-2 py-1 mb-1 cursor-pointer hover:bg-gray-100 rounded">
                  PAN Card Info
                </li>
              </ul>
            </div>
            <div className="mb-4">
              <div className="text-gray-400 font-semibold mb-2">PAYMENTS</div>
              <ul className="ml-2">
                <li className="text-gray-700 px-2 py-1 mb-1 cursor-pointer hover:bg-gray-100 rounded flex items-center justify-between">
                  Gift Cards{" "}
                  <span className="text-green-600 font-semibold">₹120</span>
                </li>
                <li className="text-gray-700 px-2 py-1 mb-1 cursor-pointer hover:bg-gray-100 rounded">
                  Saved UPI
                </li>
                <li className="text-gray-700 px-2 py-1 mb-1 cursor-pointer hover:bg-gray-100 rounded">
                  Saved Cards
                </li>
              </ul>
            </div>
            <div className="mb-4">
              <div className="text-gray-400 font-semibold mb-2">MY STUFF</div>
              <ul className="ml-2">
                <li className="text-gray-700 px-2 py-1 mb-1 cursor-pointer hover:bg-gray-100 rounded flex items-center justify-between">
                  My Coupons
                  <span className="text-red-600 font-semibold">No Coupons</span>
                </li>
              </ul>
            </div>
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 bg-white rounded shadow p-8">
          {/* Personal Information */}
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold">Personal Information</h2>
            <button className="text-blue-600 font-semibold text-sm">
              Edit
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              value="John"
              readOnly
              className="border rounded px-3 py-2 bg-gray-100"
            />
            <input
              type="text"
              value="Doe"
              readOnly
              className="border rounded px-3 py-2 bg-gray-100"
            />
          </div>
          <div className="mb-4">
            <div className="text-gray-700 mb-2">Your Gender</div>
            <label className="mr-6">
              <input type="radio" checked readOnly className="mr-1" /> Male
            </label>
            <label>
              <input type="radio" readOnly className="mr-1" /> Female
            </label>
          </div>

          {/* Email Address */}
          <div className="flex items-center justify-between mb-2 mt-8">
            <h3 className="text-lg font-semibold">Email Address</h3>
            <button className="text-blue-600 font-semibold text-sm">
              Edit
            </button>
          </div>
          <input
            type="text"
            value="test@gmail.com"
            readOnly
            className="border rounded px-3 py-2 bg-gray-100 w-full mb-4"
          />

          {/* Mobile Number */}
          <div className="flex items-center justify-between mb-2 mt-8">
            <h3 className="text-lg font-semibold">Mobile Number</h3>
            <button className="text-blue-600 font-semibold text-sm">
              Edit
            </button>
          </div>
          <input
            type="text"
            value="+91 1234567890"
            readOnly
            className="border rounded px-3 py-2 bg-gray-100 w-full mb-4"
          />

          {/* FAQs */}
          <div className="mt-10">
            <h3 className="text-lg font-semibold mb-2">FAQs</h3>
            <div className="text-gray-700 mb-1">
              What happens when I update my email address (or mobile number)?
              <br />
              Where to view my current ongoing orders? <br />
              How to view my order history?
            </div>
            {/* Add more FAQ items as needed */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
