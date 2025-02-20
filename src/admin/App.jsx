import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState, useEffect } from "react"
import AdminHeader from "./components/AdminHeader";
import Sidebar from './components/SideBar';
import routes from "../routes/adminRoute";
import Navbar from "./components/Navbar";
import './style/styleSheet.css';



function AdminApp(){
    const [sidebarOpen, setSidebarOpen] = useState(true)
    const [darkMode, setDarkMode] = useState(false)
  
    useEffect(() => {
      const isDarkMode =
        localStorage.getItem("darkMode") === "true" ||
        (!("darkMode" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)
      setDarkMode(isDarkMode)
    }, [])
  
    useEffect(() => {
      document.body.classList.toggle("dark", darkMode)
      localStorage.setItem("darkMode", darkMode.toString())
    }, [darkMode])
    return (
        <Router>
            <div className={`flex h-screen ${darkMode ? "dark" : ""}`}>
                <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />
                    <div className="flex flex-col flex-1 overflow-hidden">
                        <Navbar
                        sidebarOpen={sidebarOpen}
                        setSidebarOpen={setSidebarOpen}
                        darkMode={darkMode}
                        setDarkMode={setDarkMode}
                        />
                            <Routes> 
                                {routes.map((route, index) => (
                                    <Route key={index} path={route.path} element={route.element} />
                                ))}
                            </Routes>
                    </div>
            </div>
        </Router>
    );
}


export default AdminApp;