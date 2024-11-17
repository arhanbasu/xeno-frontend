import React, { useState, useEffect } from 'react';
import API from '../services/api';
import { useNavigate } from 'react-router-dom';
import './MessagingPage.css';

function MessagingPage() {
    const [message, setMessage] = useState('');
    const [log, setLog] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetchLog();
    }, []);

    const fetchLog = async () => {
        try {
            const response = await API.get('/admin/communication-log');
            setLog(response.data);
        } catch (error) {
            console.error('Error fetching communication log:', error);
        }
    };

    const handleSendMessage = async () => {
        if (!message.trim()) {
            alert('Message cannot be empty');
            return;
        }
        try {
            const adminName = localStorage.getItem('adminName'); // Assuming admin name is stored in localStorage
            
            console.log('Admin Name:', adminName);
            console.log('Message to send:', message);
        
            const response = await API.post('/admin/communication-log', { name: adminName, message });
            
            console.log('Server Response:', response.data);
            
            setMessage(''); // Clear the message input
            fetchLog(); // Refresh the log after sending
        } catch (error) {
            console.error('Error sending message:', error);
            alert('Failed to send message. Please try again.');
        }
    };

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/');
    };

    return (
        <div className="messaging-page">
            <h2>Send a Message to the Audience</h2>
            <textarea
                placeholder="Type your message here..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            />
            <button onClick={handleSendMessage}>Send Message</button>
            <button onClick={handleLogout}>Logout</button>
            <h3>Communication Log</h3>
            <table>
                <thead>
                    <tr>
                        <th>Admin</th>
                        <th>Message</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {log.map((entry, index) => (
                        <tr key={index}>
                            <td>{entry.name}</td>
                            <td>{entry.message}</td>
                            <td>{new Date(entry.created_at).toLocaleString()}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default MessagingPage;



/*import React, { useState, useEffect } from 'react';
import API from '../services/api';
import { useNavigate } from 'react-router-dom';
import './MessagingPage.css';

function MessagingPage() {
    const [message, setMessage] = useState('');
    const [log, setLog] = useState([]);
    const [audience, setAudience] = useState([]);
    const [percentageSent, setPercentageSent] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        fetchLog();
        fetchAudience();
    }, []);

    const fetchLog = async () => {
        try {
            const response = await API.get('/admin/communication-log');
            setLog(response.data);
        } catch (error) {
            console.error('Error fetching communication log:', error);
        }
    };

    const fetchAudience = async () => {
        try {
            const response = await API.post('/customers/filter', {
                totalSpent: 0, // Replace with actual filter criteria if needed
                visits: 0,
                lastVisit: new Date().toISOString(),
            });
            setAudience(response.data.audience || []);
        } catch (error) {
            console.error('Error fetching audience:', error);
        }
    };

    const handleSendMessage = async () => {
        if (!message.trim()) {
            alert('Message cannot be empty');
            return;
        }
        try {
            const adminName = localStorage.getItem('adminName'); // Assuming admin name is stored in localStorage
            
            // Log the message in the communication log
            const logResponse = await API.post('/admin/communication-log', { name: adminName, message });
            
            // Get the newly added communication ID
            const communicationId = logResponse.data.communicationId;

            // Simulate sending messages to the audience
            await API.post('/send-messages', { communicationId, audience });

            setMessage(''); // Clear the message input
            fetchLog(); // Refresh the log after sending
            alert('Message sent successfully and processed for the audience.');
        } catch (error) {
            console.error('Error sending message:', error);
            alert('Failed to send message. Please try again.');
        }
    };

    const handleCalculatePercentage = async (communicationId) => {
        try {
            const response = await API.get(`/message-stats/${communicationId}`);
            setPercentageSent(response.data.percentage);
        } catch (error) {
            console.error('Error calculating message stats:', error);
            alert('Failed to calculate stats. Please try again.');
        }
    };

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/');
    };

    return (
        <div className="messaging-page">
            <h2>Send a Message to the Audience</h2>
            <textarea
                placeholder="Type your message here..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            />
            <button onClick={handleSendMessage}>Send Message</button>
            <button onClick={handleLogout}>Logout</button>

            <h3>Communication Log</h3>
            <table>
                <thead>
                    <tr>
                        <th>Admin</th>
                        <th>Message</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {log.map((entry, index) => (
                        <tr key={index}>
                            <td>{entry.name}</td>
                            <td>{entry.message}</td>
                            <td>{new Date(entry.created_at).toLocaleString()}</td>
                            <td>
                                <button
                                    onClick={() => handleCalculatePercentage(entry.id)}
                                >
                                    Calculate % Sent
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {percentageSent !== null && (
                <div>
                    <h4>Percentage of Sent Messages: {percentageSent}%</h4>
                </div>
            )}
        </div>
    );
}

export default MessagingPage;*/


