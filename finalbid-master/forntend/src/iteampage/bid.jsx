import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
export default function Bid() {
    const [baseprice,setbaseprice]=useState();
    const [name,setname]=useState();
    const [email,setemail]=useState();
    const [moblie,setmoblie]=useState();
    const navigate = useNavigate();
    const handlesubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/product/:product", {  baseprice, name, moblie, email })
        .then(result => {
            console.log(result);
            navigate("/product");
        })
        .catch((err) => console.log(err));
    }

  return (
    <div>
    <div onSubmit={handlesubmit}>
      <label htmlFor="baseprice" className="block text-sm font-medium text-gray-700">Base Price $</label>
                            <input
                                id="baseprice"
                                type="number"
                                placeholder="$ 100"
                                required
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                onChange={(e) => setbaseprice(e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="ownername" className="block text-sm font-medium text-gray-700">Owner Name</label>
                            <input
                                id="ownername"
                                type="text"
                                placeholder="name"
                                required
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                onChange={(e) => setname(e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="mobile" className="block text-sm font-medium text-gray-700">Owner Mobile Number</label>
                            <input
                                id="mobile"
                                type="number"
                                placeholder="9087654321"
                                required
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                onChange={(e) => setmoblie(e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Owner Email</label>
                            <input
                                id="email"
                                type="email"
                                placeholder="vy@gmail.com"
                                required
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                onChange={(e) => setemail(e.target.value)}
                            />
                            <button>Submit</button>
                        </div>
      

    </div>
  )
}
