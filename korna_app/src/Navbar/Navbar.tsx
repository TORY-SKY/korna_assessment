// src/components/MediumNavbar.tsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion"; // for animations
import {
  Home,
  BookOpen,
  User,
  FileText,
  BarChart,
  Plus,
  Menu,
  X,
  Search,
  SquarePen,
  Bell
} from "lucide-react";
// import { Routes, Route } from "react-router-dom";
// import  SearchPage from "./Compnents/SearchPage.tsx"
const Navbar: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const menuItems = [
    { icon: <Home size={20} />, label: "Home", href: "#" },
    { icon: <BookOpen size={20} />, label: "Library", href: "#" },
    { icon: <User size={20} />, label: "Profile", href: "#" },
    { icon: <FileText size={20} />, label: "Stories", href: "#" },
    { icon: <BarChart size={20} />, label: "Stats", href: "#" },
  ];

  const following = [
    { name: "Astropomeai", online: true },
    { name: "Temiloluwa Gboyega", online: false },
    { name: "preciouscancode", online: false },
  ];

  return (
    <div className="">
      {/*<SearchPage />*/}
      {/* Top Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-white border-b shadow-sm z-50">
        <div className="flex justify-between items-center px-4 py-3 max-w-6xl mx-auto">
          {/* Left: Hamburger + Logo */}
          <div className="flex items-center gap-3">
            <button onClick={toggleSidebar} className="">
              <Menu size={24} />
            </button>
            <span className="text-2xl font-serif font-bold">Medium</span>
          </div>

          {/* Center: Search */}
          <div className="hidden md:flex items-center w-1/3">
            <div className="flex items-center w-full bg-gray-100 rounded-full px-3 py-1">
              <Search size={18} className="text-gray-500 mr-2" />
              <input
                type="text"
                placeholder="Search"
                className="bg-transparent outline-none w-full text-sm p-2"
              />
            </div>
          </div>
          <div>
          
          </div>

          {/* Right: Profile */}
          <div className="flex items-center gap-8">
            <div className="hidden md:flex flex-row gap-1">
              <SquarePen className="font-thin" />
              <span className="font-thin">Write</span>
            </div>
            <div className="hidden md:flex">
              <Bell className="w-8 text-thin" />

            </div>
            <div className="flex md:hidden">
              <Search />
            </div>
            <button className="w-8 h-8 rounded-full overflow-hidden border">
              <img
                src="https://i.pravatar.cc/40"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Sidebar Overlay */}
      <AnimatePresence>
        {isSidebarOpen && (
          <>
            {/* Dark overlay */}
            <motion.div
              className="fixed inset-0 bg-black/40 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleSidebar}
            />

            {/* Sidebar */}
            <motion.aside
              className="fixed top-0 left-0 h-full w-72 bg-white shadow-lg z-50 p-4 flex flex-col"
              initial={{ x: -300 }}
              animate={{ x: 0 }}
              exit={{ x: -300 }}
              transition={{ type: "spring", stiffness: 200, damping: 25 }}
            >
              {/* Header */}
              <div className="flex justify-between items-center mb-6">
                <span className="text-2xl font-serif font-bold">Medium</span>
                <button onClick={toggleSidebar}>
                  <X size={22} />
                </button>
              </div>

              {/* Menu items */}
              <div className="space-y-4">
                {menuItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="flex items-center gap-3 text-gray-700 hover:text-black transition"
                  >
                    {item.icon}
                    <span>{item.label}</span>
                  </a>
                ))}
              </div>

              <hr className="my-6" />

              {/* Following */}
              <div>
                <h3 className="text-sm font-semibold text-gray-500 mb-3">
                  Following
                </h3>
                <ul className="space-y-3">
                  {following.map((f) => (
                    <li key={f.name} className="flex items-center gap-3">
                      <div className="relative w-8 h-8 rounded-full overflow-hidden">
                        <img
                          src={`https://i.pravatar.cc/40?u=${f.name}`}
                          alt={f.name}
                          className="w-full h-full object-cover"
                        />
                        {f.online && (
                          <span className="absolute bottom-0 right-0 w-2 h-2 bg-green-500 rounded-full" />
                        )}
                      </div>
                      <span className="text-gray-700">{f.name}</span>
                    </li>
                  ))}
                  <li className="flex items-center gap-3 text-indigo-600 cursor-pointer">
                    <Plus size={20} />
                    <span>Find writers and publications</span>
                  </li>
                </ul>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
