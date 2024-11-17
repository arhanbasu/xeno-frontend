//App.js

/*import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';

function App() {
    const [token, setToken] = useState(localStorage.getItem('token'));

    return (
        <Router>
            <Routes>
                <Route path="/" element={token ? <Navigate to="/dashboard" /> : <Login setToken={setToken} />} />
                <Route path="/register" element={<Register />} />
                <Route path="/dashboard" element={token ? <Dashboard /> : <Navigate to="/" />} />
            </Routes>
        </Router>
    );
}

export default App;*/

import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import MessagingPage from './components/MessagingPage';

function App() {
    const [token, setToken] = useState(localStorage.getItem('token'));

    return (
        <Router>
            <Routes>
                <Route path="/" element={token ? <Navigate to="/dashboard" /> : <Login setToken={setToken} />} />
                <Route path="/register" element={<Register />} />
                <Route path="/dashboard" element={token ? <Dashboard /> : <Navigate to="/" />} />
                <Route path="/message" element={token ? <MessagingPage /> : <Navigate to="/" />} />
            </Routes>
        </Router>
    );
}

export default App;




