import React from "react";

const Card = ({ title, description }) => (
  <div className="bg-white shadow-md rounded-lg p-6 w-64 text-center hover:scale-105 transition-transform">
    <h3 className="font-bold text-xl mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
    <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
      View
    </button>
  </div>
);

export default Card;
