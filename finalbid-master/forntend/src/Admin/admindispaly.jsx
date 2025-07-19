import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

export default function Admindisplayproduct() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:3000/adminproduct")
      .then(res => setUsers(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <>
      {/* Navbar */}
      <nav className="bg-blue-600 text-white px-6 py-4 flex justify-between items-center shadow-md">
        <div className="text-xl font-bold">Bid pro acution </div>
        <div className="flex space-x-4">
          <Link to="/pricepredition">
            <button className="bg-white text-blue-600 font-semibold px-4 py-2 rounded hover:bg-green-100">
              Price Prediction
            </button>
          </Link>
          <button
            className="bg-white text-blue-600 font-semibold px-4 py-2 rounded hover:bg-green-100"
            onClick={() => navigate("/registerproduct")}
          >
            ADD Product
          </button>
        </div>
      </nav>

      {/* Product Display */}
      <div className="py-8">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Live Auction Items</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {users.map(user => (
              <div key={user.email} className="bg-white rounded-lg shadow-md p-4">
                <h1 className="text-xl font-semibold mb-2 text-gray-800">Product: {user.product}</h1>
                <h3 className="text-lg font-medium text-gray-700">Name: {user.name}</h3>
                <h3 className="text-lg text-gray-600">Price: ₹{user.baseprice}</h3>
                <p className="text-gray-600 mb-4">{user.description}</p>

                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-2">
                    <label htmlFor={`bid-${user.email}`} className="text-sm text-gray-700">Bid Price:</label>
                    <input
                      id={`bid-${user.email}`}
                      type="number"
                      min={user.baseprice + 1}
                      placeholder={`Min: ₹${user.baseprice + 1}`}
                      className="p-2 border border-gray-300 rounded w-full"
                    />
                  </div>
                  <Link to={`/adminproduct/${user._id}`}>

                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition-colors duration-200">
                   Delete
                  </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
