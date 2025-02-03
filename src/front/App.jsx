import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import './style/stylesheet.css'
import Footer from "./components/Footer";
import routes from "../routes/route";


console.log(routes);

function FrontApp(){
    return (
       <Router>
        <Header />
        <Routes>
            {routes.map((route, index) => (
                <Route key={index} path={route.path} element={route.element} />
            ))}
        </Routes>
        <Footer />
       </Router>
    );
}

export default FrontApp;

