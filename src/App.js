import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

const App = () => {
    const [tickets, setTickets] = useState([]);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    // Fetch tickets from the backend
    useEffect(() => {
        const fetchTickets = async () => {
            try {
                const response = await axios.get('/api/tickets');
                setTickets(response.data);
            } catch (error) {
                console.error('Error fetching tickets:', error);
            }
        };
        fetchTickets();
    }, []);

    // Handle new ticket submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/tickets', { title, description });
            setTickets([...tickets, response.data]);
            setTitle('');
            setDescription('');
        } catch (error) {
            console.error('Error creating ticket:', error);
        }
    };

    return (
        <div className="container">
            <h1>Disaster Response Ticket Platform</h1>

            <form onSubmit={handleSubmit} className="form">
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Enter Ticket Title"
                    required
                />
                <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Enter Ticket Description"
                    required
                ></textarea>
                <button type="submit">Submit Ticket</button>
            </form>

            <div className="ticket-list">
                {tickets.map(ticket => (
                    <div key={ticket._id} className="ticket-item">
                        <h3>{ticket.title}</h3>
                        <p>{ticket.description}</p>
                        <span>Status: {ticket.status}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default App;