import React from "react";
import { Link } from "react-router-dom";


function Header(){
    return (
        <nav>
            <Link to="/">Homepage</Link>
            <Link to="/about">Homepage</Link>
        </nav>
    );
}

export default Header;