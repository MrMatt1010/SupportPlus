import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './openTickets.css';

const OpenTickets = () => {
  const [openTickets, setOpenTickets] = useState([]);
  const [filter, setFilter] = useState({
    supportAgent: '',
    user: '',
    priority: '',
  });

  useEffect(() => {
    // Fetch open tickets data from the backend with applied filters
    fetchOpenTickets();
  }, [filter]);

  const fetchOpenTickets = async () => {
    try {
      const response = await fetch(`/api/opentickets?supportAgent=${filter.supportAgent}&user=${filter.user}&priority=${filter.priority}`);
      const data = await response.json();
      setOpenTickets(data);
    } catch (error) {
      console.error('Error fetching open tickets:', error);
    }
  };

  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    setFilter({ ...filter, [name]: value });
  };

  const handleCloseTicket = () => {
    // Handle close ticket action
  };

  const handleEscalate = () => {
    // Handle escalate action
  };

  const handleUpdate = () => {
    // Handle update action
  };

  const handleCancel = () => {
    // Handle cancel action
  };

  return (
    <div className="open-tickets-container">
        <div className="nav-menu">
        <ul>
          <li><a href="./dashboard">Dashboard</a></li>
          <li><a href="#feedback">Feedback</a></li>
          <li><a href="./closedTickets">Closed</a></li>
          <li><a href="./admin">Admin</a></li>
        </ul>
        <Link to="./createNewTicket"><button>New Ticket</button></Link>
      </div>
      <div className="open-tickets-content">
        <h2>Open Tickets</h2>
        <div className="filter-options">
          <input
            type="text"
            name="supportAgent"
            placeholder="Support Agent"
            value={filter.supportAgent}
            onChange={handleFilterChange}
          />
          <input
            type="text"
            name="user"
            placeholder="User"
            value={filter.user}
            onChange={handleFilterChange}
          />
          <select name="priority" value={filter.priority} onChange={handleFilterChange}>
            <option value="">Select Priority</option>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>
        <div className="ticket-list">
          {openTickets.map(ticket => (
            <div key={ticket.id} className="ticket">
              <p>Ticket ID: {ticket.id}</p>
              <p>Description: {ticket.description}</p>
              {/* Add more ticket details as needed */}
            </div>
          ))}
        </div>
        <div className="action-buttons">
          <button onClick={handleCloseTicket}>Close Ticket</button>
          <button onClick={handleEscalate}>Escalate</button>
          <button onClick={handleUpdate}>Update</button>
          <button onClick={handleCancel}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default OpenTickets;
