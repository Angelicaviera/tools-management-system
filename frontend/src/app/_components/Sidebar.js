import Image from "next/image";
import { MdDashboard, MdOutbox } from "react-icons/md";
import { PiToolboxFill } from "react-icons/pi";

export default function Sidebar({ children, activePage, setActivePage }) {
  const menuItems = [
    {
      id: "dashboard",
      label: "Dashboard",
      icon: <MdDashboard size={24} />,
    },
    {
      id: "all-tools",
      label: "All Tools",
      icon: <PiToolboxFill size={24} />,
    },
    {
      id: "borrowed-tools",
      label: "Borrowed Tools",
      icon: <MdOutbox size={24} />,
    },
  ];

  return (
    <div className="flex h-screen">
      <aside className="w-1/6 bg-black text-white p-4">
        {/* Profile Section */}
        <div className="flex flex-col items-center my-6">
          <Image className="rounded-full w-2/5" src="/DTETI-profile.jpg" width={500} height={500} alt="DTETI Profile Picture" />
          <p className="text-yellow text-xl font-bold mt-2">Lab IC DTETI</p>
        </div>

        {/* Navigation Menu */}
        <nav className="flex flex-col gap-4">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActivePage(item.id)}
              className={`flex items-center gap-2 p-2 rounded text-left ${activePage === item.id ? "bg-yellow text-black" : "hover:bg-darkgrey"}`}
            >
              {item.icon}
              <span className="font-medium">{item.label}</span>
            </button>
          ))}
        </nav>
      </aside>

      <main className="flex-1 bg-lightgrey p-6">{children}</main>
    </div>
  );
}
