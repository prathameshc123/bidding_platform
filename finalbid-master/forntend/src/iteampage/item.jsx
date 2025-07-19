import React, { useState } from 'react'
import axios from "axios"
import { useNavigate } from "react-router-dom"

export default function Item() {
    const [product, setproduct] = useState('');
    const [baseprice, setbaseprice] = useState('');
    const [name, setname] = useState('');
    const [moblie, setmoblie] = useState('');
    const [email, setemail] = useState('');
    const [description, setdescription] = useState('');
    const navigate = useNavigate();
    
    const handlesubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3000/registerproduct", { product, baseprice, name, moblie, email, description })
        .then(result => {
            console.log(result);
            navigate("/product");
        })
        .catch((err) => console.log(err));
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-md">
                <h1 className="text-3xl font-bold text-center text-gray-800">Add Item</h1>
                <form className="mt-8 space-y-6" onSubmit={handlesubmit}>
                    <div className="rounded-md shadow-sm space-y-4">
                        <div>
                            <label htmlFor="product" className="block text-sm font-medium text-gray-700">Name of Product</label>
                            <input
                                id="product"
                                type="text"
                                placeholder="watch"
                                required
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                onChange={(e) => setproduct(e.target.value)}
                            />
                        </div>
                        <div>
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
                        </div>
                        <div>
                            <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
                            <textarea
                                id="description"
                                rows="4"
                                placeholder="Enter text here..."
                                required
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                onChange={(e) => setdescription(e.target.value)}
                            ></textarea>
                        </div>
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Add Product
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}