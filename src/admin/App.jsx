import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AdminHeader from "./components/AdminHeader";
import Sidebar from './components/SideBar';
import routes from "../routes/adminRoute";
import './style/styleSheet.css';



function AdminApp(){
    return (
        <Router>
            <AdminHeader />
                <div className="min-h-screen flex flex-col bg-gray-100">
                    <div className="flex flex-1">
                        <Sidebar />
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