import React from "react";

export default function BorrowToolModal({ formData, handleInputChange, closeModal, handleBorrowTool }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded shadow-lg w-1/3">
        <h2 className="text-black text-xl font-bold mb-4">Borrow Tool</h2>
        <input type="text" name="studentName" value={formData.studentName} placeholder="Student Name" onChange={handleInputChange} className="text-black w-full mb-4 p-2 border rounded" />
        <input type="email" name="studentEmail" value={formData.studentEmail} placeholder="Student Email" onChange={handleInputChange} className="text-black w-full mb-4 p-2 border rounded" />
        <input type="date" name="borrowDate" value={formData.borrowDate} onChange={handleInputChange} className="text-darkgrey w-full mb-4 p-2 border rounded" />
        <input type="number" name="borrowQty" value={formData.borrowQty} placeholder="Quantity" onChange={handleInputChange} className="text-black w-full mb-4 p-2 border rounded" />
        <div className="w-1/2 ml-auto flex gap-4">
          <button className="w-full text-black bg-lightgrey px-4 py-2 rounded" onClick={closeModal}>
            Cancel
          </button>
          <button className="w-full text-white bg-black px-4 py-2 rounded text-white" onClick={handleBorrowTool}>
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}
