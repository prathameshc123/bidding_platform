import React, { useEffect } from 'react';
import axios from "axios";
import { useNavigate, useParams } from 'react-router-dom';

export default function Delect() {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios.delete(`http://localhost:3000/adminproduct/${id}`)
      .then(result => {
        console.log(result);
        navigate("/adminproduct");
      })
      .catch((err) => console.log(err));
  }, [id, navigate]);

  return (
    <div className="flex justify-center items-center h-screen">
      <p className="text-gray-600 text-lg">Deleting item...</p>
    </div>
  );
}
