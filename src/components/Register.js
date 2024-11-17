/*import React, { useState } from 'react';
import API from '../services/api';

function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await API.post('/admin/register', { name, email, password });
            setMessage('Registration successful!');
        } catch (error) {
            setMessage('Registration failed!');
        }
    };

    return (
        <div>
            <h2>Admin Register</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                <button type="submit">Register</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
}

export default Register;*/

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import API from '../services/api';
import './Register.css';

function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await API.post('/admin/register', { name, email, password });
            setMessage('Registration successful! You can now log in.');
        } catch (error) {
            if (error.response) {
                setMessage(error.response.data.message || 'Registration failed! Please try again.');
            } else {
                setMessage('Unable to connect to the server. Please try again.');
            }
        }
    };

    return (
        <div>
            <h2>Admin Register</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit">Register</button>
            </form>
            {message && <p>{message}</p>}
            <p>
                Already have an account? <Link to="/">Back to Login</Link>
            </p>
        </div>
    );
}

export default Register;


