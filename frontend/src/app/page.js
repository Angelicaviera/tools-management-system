"use client";

import { useState } from "react";
import Sidebar from "./_components/Sidebar";
import Dashboard from "./pages/Dashboard";
import AllTools from "./pages/AllTools";
import BorrowedTools from "./pages/BorrowedTools";

export default function Page() {
  const [activePage, setActivePage] = useState("dashboard");

  const renderContent = () => {
    switch (activePage) {
      case "dashboard":
        return <Dashboard />;
      case "all-tools":
        return <AllTools />;
      case "borrowed-tools":
        return <BorrowedTools />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <Sidebar activePage={activePage} setActivePage={setActivePage}>
      {activePage === "dashboard" && <div>Dashboard Content</div>}
      {activePage === "all-tools" && <div>All Tools Content</div>}
      {activePage === "borrowed-tools" && <div>Borrowed Tools Content</div>}
      {renderContent()}
    </Sidebar>
  );
}
