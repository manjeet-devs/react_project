import React, { useState } from "react";
import { useForm } from "@inertiajs/react";

const UserList = ({ users }) => {
    const { data, setData, post, put, delete: destroy, reset } = useForm({
        name: "",
        email: "",
    });

    const [editingUser, setEditingUser] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        editingUser ? put(`/users/${editingUser.id}`) : post("/users");
        reset();
        setEditingUser(null);
    };

    const handleEdit = (user) => {
        setEditingUser(user);
        setData(user);
    };

    return (
        <div>
            <h1>User Management</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Name"
                    value={data.name}
                    onChange={(e) => setData("name", e.target.value)}
                    required
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={data.email}
                    onChange={(e) => setData("email", e.target.value)}
                    required
                />
                <button type="submit">{editingUser ? "Update" : "Create"}</button>
                {editingUser && <button onClick={() => setEditingUser(null)}>Cancel</button>}
            </form>

            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        {user.name} ({user.email})
                        <button onClick={() => handleEdit(user)}>Edit</button>
                        <button onClick={() => destroy(`/users/${user.id}`)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserList;
