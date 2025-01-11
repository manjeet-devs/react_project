import React from "react";
import { Link } from "react-router-dom";

function AdminHeader(){
    return (
        <nav>
            <Link to="/admin">Dashboard</Link>
            <Link to="/admin/user">user</Link>
        </nav>
    );
}

export default AdminHeader;
