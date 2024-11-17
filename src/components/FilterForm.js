//FilterForm.js


/*import React, { useState } from 'react';
import API from '../services/api';

function FilterForm() {
    const [filters, setFilters] = useState({ totalSpent: '', visits: '', lastVisit: '' });
    const [audience, setAudience] = useState(null);

    const handleChange = (e) => {
        setFilters({ ...filters, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await API.post('/customers/filter', filters);
            setAudience(response.data.audience);
        } catch (error) {
            console.error('Error fetching data');
        }
    };

    return (
        <div>
            <h3>Filter Customers</h3>
            <form onSubmit={handleSubmit}>
                <input
                    type="number"
                    placeholder="Total Spent >= "
                    name="totalSpent"
                    value={filters.totalSpent}
                    onChange={handleChange}
                />
                <input
                    type="number"
                    placeholder="Visits >= "
                    name="visits"
                    value={filters.visits}
                    onChange={handleChange}
                />
                <input
                    type="date"
                    placeholder="Last Visit on or before"
                    name="lastVisit"
                    value={filters.lastVisit}
                    onChange={handleChange}
                />
                <button type="submit">Apply Filters</button>
            </form>
            {audience !== null && <p>Number of customers: {audience}</p>}
        </div>
    );
}

export default FilterForm;*/

import React, { useState } from 'react';
import API from '../services/api';
import { useNavigate } from 'react-router-dom';

function FilterForm() {
    const [filters, setFilters] = useState({ totalSpent: '', visits: '', lastVisit: '' });
    const [audience, setAudience] = useState(null);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFilters({ ...filters, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await API.post('/customers/filter', filters);
            setAudience(response.data.audience);
        } catch (error) {
            console.error('Error fetching data');
        }
    };

    const handleSaveAndMessage = () => {
        navigate('/message');
    };

    return (
        <div>
            <h3>Filter Customers</h3>
            <form onSubmit={handleSubmit}>
                <input
                    type="number"
                    placeholder="Total Spent >= "
                    name="totalSpent"
                    value={filters.totalSpent}
                    onChange={handleChange}
                />
                <input
                    type="number"
                    placeholder="Visits >= "
                    name="visits"
                    value={filters.visits}
                    onChange={handleChange}
                />
                <input
                    type="date"
                    placeholder="Last Visit on or before"
                    name="lastVisit"
                    value={filters.lastVisit}
                    onChange={handleChange}
                />
                <button type="submit">Apply Filters</button>
            </form>
            {audience !== null && (
                <div>
                    <p>Number of customers: {audience}</p>
                    <button onClick={handleSaveAndMessage}>Save and Message</button>
                </div>
            )}
        </div>
    );
}

export default FilterForm;


