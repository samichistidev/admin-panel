import { useState } from "react";
import Sidebar from "./Sidebar";

// Import all 10 feature components
import Dashboard from "./Dashboard";
import Users from "./Users";
import Posts from "./Posts";
import Comments from "./Comments";
import Analytics from "./Analytics";
import Notifications from "./Notifications";
import MessagesComponent from "./Messages";
import Tasks from "./Tasks";
import Reports from "./Reports";
import Settings from "./Settings";

export default function AdminPanel() {
  const [activePage, setActivePage] = useState("dashboard");
  const [collapsed, setCollapsed] = useState(false);

  // Map key → component
  const pages = {
    dashboard: <Dashboard />,
    users: <Users />,
    posts: <Posts />,
    comments: <Comments />,
    analytics: <Analytics />,
    notifications: <Notifications />,
    messages: <MessagesComponent />,
    tasks: <Tasks />,
    reports: <Reports />,
    settings: <Settings />,
  };

  return (
    <div className="flex">
      <Sidebar
        activePage={activePage}
        setActivePage={setActivePage}
        collapsed={collapsed}
        setCollapsed={setCollapsed}
      />
      <div className="flex-1 bg-gray-100 dark:bg-gray-900 min-h-screen p-6 transition-all">
        {pages[activePage]}
      </div>
    </div>
  );
}
