import React from "react";

export default function AddToolModal({ formData, handleInputChange, closeModal, handleAddTool }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded shadow-lg w-1/3">
        <h2 className="text-black text-xl font-bold mb-4">Add Tool</h2>
        <input type="text" name="name" value={formData.name} placeholder="Tool Name" onChange={handleInputChange} className="text-black w-full mb-4 p-2 border rounded" />
        <input type="number" name="qty" value={formData.qty} placeholder="Quantity" onChange={handleInputChange} className="text-black w-full mb-4 p-2 border rounded" />
        <input type="file" name="picture" onChange={handleInputChange} className="w-full mb-4 p-2 border rounded" />
        <div className="flex ml-auto gap-4 w-1/2">
          <button className="w-full bg-lightgrey text-black px-4 py-2 rounded" onClick={closeModal}>
            Cancel
          </button>
          <button className="w-full bg-black px-4 py-2 rounded text-white" onClick={handleAddTool}>
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
