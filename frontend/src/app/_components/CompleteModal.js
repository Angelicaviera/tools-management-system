import React from "react";

export function CompleteModal({ closeModal, handleComplete }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded shadow-lg w-1/3">
        <h2 className="text-black text-xl font-bold mb-4">Mark as Complete</h2>
        <p className="text-black mb-4">Are you sure you want to mark this tool as returned?</p>
        <div className="w-1/2 flex ml-auto gap-4">
          <button className="w-full text-black bg-lightgrey px-4 py-2 rounded" onClick={closeModal}>
            Cancel
          </button>
          <button className="w-full text-white bg-black px-4 py-2 rounded" onClick={handleComplete}>
            Complete
          </button>
        </div>
      </div>
    </div>
  );
}
