import React from "react";

export default function DeleteToolModal({ closeModal, handleDeleteTool }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded shadow-lg w-1/3">
        <h2 className="text-black text-xl font-bold mb-4">Delete Tool</h2>
        <p className="text-black mb-4">Are you sure you want to delete this tool?</p>
        <div className="w-1/2 flex ml-auto gap-4">
          <button className="w-full text-black bg-lightgrey px-4 py-2 rounded" onClick={closeModal}>
            Cancel
          </button>
          <button className="w-full text-white bg-black px-4 py-2 rounded" onClick={handleDeleteTool}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
