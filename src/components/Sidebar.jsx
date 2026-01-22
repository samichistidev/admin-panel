import {
  LayoutDashboard as DashboardIcon,
  Users as UsersIcon,
  FileText as PostsIcon,
  MessageSquare as CommentsIcon,
  BarChart3 as AnalyticsIcon,
  Bell as NotificationsIcon,
  Mail as MessagesIcon,
  CheckSquare as TasksIcon,
  FileText as ReportsIcon,
  Settings as SettingsIcon,
  ChevronRight as ArrowRightIcon,
  ChevronLeft as ArrowLeftIcon,
} from "lucide-react";

export default function Sidebar({
  activePage,
  setActivePage,
  collapsed,
  setCollapsed,
}) {
  const menuItems = [
    { key: "dashboard", label: "Dashboard", svg: <DashboardIcon /> },
    { key: "users", label: "Users", svg: <UsersIcon /> },
    { key: "posts", label: "Posts", svg: <PostsIcon /> },
    { key: "comments", label: "Comments", svg: <CommentsIcon /> },
    { key: "analytics", label: "Analytics", svg: <AnalyticsIcon /> },
    {
      key: "notifications",
      label: "Notifications",
      svg: <NotificationsIcon />,
    },
    { key: "messages", label: "Messages", svg: <MessagesIcon /> },
    { key: "tasks", label: "Tasks", svg: <TasksIcon /> },
    { key: "reports", label: "Reports", svg: <ReportsIcon /> },
    { key: "settings", label: "Settings", svg: <SettingsIcon /> },
  ];

  return (
    <div
      className={`bg-gray-800 text-white h-screen p-4 flex flex-col ${
        collapsed ? "w-fit" : "w-64"
      } transition-all`}
    >
      {/* Collapse Button */}
      <button
        className="mb-6 text-white"
        onClick={() => setCollapsed(!collapsed)}
      >
        {collapsed ? <ArrowRightIcon /> : <ArrowLeftIcon />}
      </button>

      {!collapsed && <h2 className="text-2xl font-bold mb-8">Admin Panel</h2>}

      <ul className="flex flex-col gap-2">
        {menuItems.map((item) => (
          <li key={item.key}>
            <button
              className={`w-full text-left px-2 py-2 gap-3 flex items-center rounded ${
                activePage === item.key
                  ? "bg-gray-700 font-bold"
                  : "hover:bg-gray-700"
              }`}
              onClick={() => setActivePage(item.key)}
            >
              {item.svg}
              {!collapsed && item.label}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
