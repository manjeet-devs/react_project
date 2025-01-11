import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AdminHeader from "./components/AdminHeader";
import routes from "../routes/adminRoute";
import './style/styleSheet.css';


function AdminApp(){
    return (
        <Router>
            <AdminHeader />
            <Routes>
            {routes.map((route, index) => (
                <Route key={index} path={route.path} element={route.element} />
            ))}
            </Routes>
        </Router>
    );
}


export default AdminApp;