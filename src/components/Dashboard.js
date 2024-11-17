/*import React from 'react';
import { useNavigate } from 'react-router-dom';
import FilterForm from './FilterForm';

function Dashboard() {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/');
    };

    return (
        <div>
            <h2>Welcome to the Admin Dashboard</h2>
            <FilterForm />
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
}

export default Dashboard;*/

//Dashboard.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import FilterForm from './FilterForm';
import './Dashboard.css';

function Dashboard() {
    const navigate = useNavigate();

    const handleLogout = () => {
        // Remove the token from localStorage
        localStorage.removeItem('token');

        // Redirect to the login page
        navigate('/');
    };

    return (
        <div>
            <h2>Welcome to the Admin Dashboard</h2>
            <FilterForm />
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
}

export default Dashboard;



