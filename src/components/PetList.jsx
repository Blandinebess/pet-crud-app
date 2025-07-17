// src/components/PetList.jsx
import React from "react";

const PetList = ({ pets = [] }) => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Available Pets</h1>
      <ul className="space-y-2">
        {pets.length > 0 ? (
          pets.map((pet, index) => (
            <li key={index} className="bg-white shadow p-3 rounded">
              <strong>{pet.name}</strong> - {pet.type}
            </li>
          ))
        ) : (
          <li className="text-gray-500">No pets available</li>
        )}
      </ul>
    </div>
  );
};

export default PetList;
