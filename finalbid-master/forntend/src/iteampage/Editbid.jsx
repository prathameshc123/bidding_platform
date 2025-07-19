import React, { useState } from 'react';
import axios from "axios";
import { useNavigate, useParams } from 'react-router-dom';

export default function Editbid() {
  const { id } = useParams();
  const [name, setname] = useState('');
  const [baseprice, setbaseprice] = useState('');
  const [email, setemail] = useState('');
  const navigate = useNavigate();

  const handlesubmit = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:3000/product/${id}`, {name,baseprice, email })
      .then(result => {
        console.log(result);
        navigate("/product");
      })
      .catch((err) => console.log(err));
  };
  
   
      

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-blue-600 mb-6">Place Your Bid</h2>
        <form onSubmit={handlesubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 mb-1">Name:</label>
            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setname(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1">Bid Price:</label>
            <input
              type="number"
              
                    
              value={baseprice}
              onChange={(e) => setbaseprice(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1">Email:</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setemail(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Submit Bid
          </button>
        </form>
      </div>
    </div>
  );
}
