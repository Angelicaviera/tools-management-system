import React, { useState } from "react";
import { RemindModal } from "../_components/RemindModal";
import { CompleteModal } from "../_components/CompleteModal";

export default function BorrowedTools() {
  const borrowedToolsData = [
    {
      id: 1,
      toolName: "ESP32",
      qty: 3,
      studentName: "Angelica Callysta",
      studentEmail: "angelica.callysta@gmail.com",
      borrowDate: "17 Jan 2024",
      complete: false,
    },
    {
      id: 2,
      toolName: "PC",
      qty: 1,
      studentName: "Bramjet",
      studentEmail: "bram.jet@gmail.com",
      borrowDate: "15 Jan 2024",
      complete: true,
    },
  ];

  const [showRemindModal, setShowRemindModal] = useState(false);
  const [showCompleteModal, setShowCompleteModal] = useState(false);
  const [currentToolId, setCurrentToolId] = useState(null);

  const handleRemind = () => {
    alert("Reminder sent!");
    setShowRemindModal(false);
  };

  const handleComplete = () => {
    setBorrowedToolsData((prevData) => prevData.map((item) => (item.id === currentToolId ? { ...item, complete: true } : item)));
    setShowCompleteModal(false);
  };

  return (
    <div className="px-24">
      <div className="text-4xl text-center my-4 text-black font-bold">Borrowed Tools</div>
      <table className="w-full text-center bg-white text-black shadow my-4">
        <thead>
          <tr className="bg-yellow">
            <th className="p-2">Borrow Date</th>
            <th className="p-2">Tools Name</th>
            <th className="p-2">Qty</th>
            <th className="p-2">Student Name</th>
            <th className="p-2">Student Email</th>
            <th className="p-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {borrowedToolsData.map((data) => (
            <tr key={data.id}>
              <td className="p-2">{data.borrowDate}</td>
              <td className="p-2">{data.toolName}</td>
              <td className="p-2">{data.qty}</td>
              <td className="p-2">{data.studentName}</td>
              <td className="p-2">{data.studentEmail}</td>
              <td className="p-2">
                {data.complete ? (
                  <div className="text-black font-bold">Completed</div>
                ) : (
                  <div className="flex gap-2 font-bold">
                    <button
                      className="w-full bg-blue p-1 rounded"
                      onClick={() => {
                        setCurrentToolId(data.id);
                        setShowRemindModal(true);
                      }}
                    >
                      Remind
                    </button>
                    <button
                      className="w-full bg-green p-1 rounded"
                      onClick={() => {
                        setCurrentToolId(data.id);
                        setShowCompleteModal(true);
                      }}
                    >
                      Complete
                    </button>
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {showRemindModal && <RemindModal closeModal={() => setShowRemindModal(false)} handleRemind={handleRemind} />}
      {showCompleteModal && <CompleteModal closeModal={() => setShowCompleteModal(false)} handleComplete={handleComplete} />}
    </div>
  );
}
