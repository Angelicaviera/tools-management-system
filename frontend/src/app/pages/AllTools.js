import Image from "next/image";
import { useState } from "react";
import { IoIosAddCircle } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import AddToolModal from "../_components/AddToolModal";
import EditToolModal from "../_components/EditToolModal";
import BorrowToolModal from "../_components/BorrowToolModal";
import DeleteToolModal from "../_components/DeleteToolModal";

export default function AllTools() {
  const [toolsData, setToolsData] = useState([
    {
      id: 1,
      name: "ESP32",
      picture: "/DTETI-profile.jpg",
      qty: 20,
      borrowed: 5,
      available: 15,
    },
    {
      id: 2,
      name: "PC",
      picture: "/DTETI-profile.jpg",
      qty: 10,
      borrowed: 10,
      available: 0,
    },
  ]);

  const [modal, setModal] = useState(null); // Modal type (add, borrow, edit, delete)
  const [currentTool, setCurrentTool] = useState(null); // Tool data for edit/borrow/delete
  const [formData, setFormData] = useState({
    name: "",
    qty: 0,
    picture: "",
    studentName: "",
    studentEmail: "",
    borrowDate: "",
    borrowQty: 0,
  });

  // Open modal
  const openModal = (type, tool = null) => {
    setModal(type);
    setCurrentTool(tool);
    setFormData(tool || {});
  };

  // Close modal
  const closeModal = () => {
    setModal(null);
    setCurrentTool(null);
    setFormData({
      name: "",
      qty: 0,
      picture: "",
      studentName: "",
      studentEmail: "",
      borrowDate: "",
      borrowQty: 0,
    });
  };

  // Handle form input change
  const handleInputChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "file" ? files[0] : value,
    }));
  };

  // Add tool
  const handleAddTool = () => {
    setToolsData((prev) => [
      ...prev,
      {
        id: prev.length + 1,
        name: formData.name,
        picture: URL.createObjectURL(formData.picture),
        qty: formData.qty,
        borrowed: 0,
        available: formData.qty,
      },
    ]);
    closeModal();
  };

  // Edit tool
  const handleEditTool = () => {
    setToolsData((prev) =>
      prev.map((tool) =>
        tool.id === currentTool.id
          ? {
              ...tool,
              name: formData.name,
              picture: formData.picture ? URL.createObjectURL(formData.picture) : tool.picture,
              qty: formData.qty,
              available: formData.qty - tool.borrowed,
            }
          : tool
      )
    );
    closeModal();
  };

  // Borrow tool
  const handleBorrowTool = () => {
    setToolsData((prev) =>
      prev.map((tool) =>
        tool.id === currentTool.id
          ? {
              ...tool,
              borrowed: tool.borrowed + formData.borrowQty,
              available: tool.available - formData.borrowQty,
            }
          : tool
      )
    );
    closeModal();
  };

  // Delete tool
  const handleDeleteTool = () => {
    setToolsData((prev) => prev.filter((tool) => tool.id !== currentTool.id));
    closeModal();
  };

  return (
    <div className="px-24">
      <div className="text-4xl text-center my-4 text-black font-bold">All Tools</div>
      <div className="w-full flex items-center justify-between my-4">
        <div className="flex items-center border rounded-lg px-3 py-2 bg-white">
          <CiSearch className="text-darkgrey mr-2" size={28} />
          <input
            type="text"
            placeholder="Search tools..."
            className="bg-transparent outline-none text-sm w-full text-darkgrey"
            onFocus={(e) => (e.target.placeholder = "")}
            onBlur={(e) => (e.target.placeholder = "Search tools...")}
          />
        </div>
        <button className="flex items-center gap-2 mb-4 px-4 py-2 inline-block bg-black rounded text-white font-bold" onClick={() => openModal("add")}>
          <IoIosAddCircle size={28} /> Add Tools
        </button>
      </div>
      <table className="w-full text-center bg-white text-black shadow">
        <thead>
          <tr className="bg-yellow">
            <th className="p-2">No</th>
            <th className="p-2">Name</th>
            <th className="p-2">Picture</th>
            <th className="p-2">Qty</th>
            <th className="p-2">Borrowed</th>
            <th className="p-2">Available</th>
            <th className="p-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {toolsData.map((tool, index) => (
            <tr key={tool.id}>
              <td className="p-2">{index + 1}</td>
              <td className="p-2">{tool.name}</td>
              <td className="p-2">
                <Image src={tool.picture} alt={`${tool.name} Picture`} width={50} height={50} className="mx-auto rounded" />
              </td>
              <td className="p-2">{tool.qty}</td>
              <td className="p-2">{tool.borrowed}</td>
              <td className="p-2">{tool.available}</td>
              <td className="p-2 flex gap-2 font-bold my-2">
                <button className="w-full bg-green p-1 rounded" onClick={() => openModal("borrow", tool)}>
                  Borrow
                </button>
                <button className="w-full bg-blue p-1 rounded" onClick={() => openModal("edit", tool)}>
                  Edit
                </button>
                <button className="w-full bg-red p-1 rounded" onClick={() => openModal("delete", tool)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modals */}
      {modal === "add" && <AddToolModal formData={formData} handleInputChange={handleInputChange} handleAddTool={handleAddTool} closeModal={closeModal} />}
      {modal === "edit" && <EditToolModal formData={formData} handleInputChange={handleInputChange} handleEditTool={handleEditTool} closeModal={closeModal} />}
      {modal === "borrow" && <BorrowToolModal formData={formData} handleInputChange={handleInputChange} handleBorrowTool={handleBorrowTool} closeModal={closeModal} />}
      {modal === "delete" && <DeleteToolModal handleDeleteTool={handleDeleteTool} closeModal={closeModal} />}
    </div>
  );
}
