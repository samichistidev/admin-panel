import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Dashboard from "./Dashboard";
import Users from "./Users";
import Posts from "./Posts";
import Comments from "./Comments";
import Settings from "./Settings";

export default function AdminPanel() {
  const [activePage, setActivePage] = useState("dashboard");
  const [collapsed, setCollapsed] = useState(false);

  const renderPage = () => {
    switch (activePage) {
      case "dashboard":
        return <Dashboard />;
      case "users":
        return <Users />;
      case "posts":
        return <Posts />;
      case "comments":
        return <Comments />;
      case "settings":
        return <Settings />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="flex">
      <Sidebar
        activePage={activePage}
        setActivePage={setActivePage}
        collapsed={collapsed}
        setCollapsed={setCollapsed}
      />
      <div className="flex-1 bg-gray-50 min-h-screen">{renderPage()}</div>
    </div>
  );
}
