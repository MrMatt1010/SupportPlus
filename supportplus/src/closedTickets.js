import React, { useState, useEffect } from 'react';
import './closedTickets.css';

const ClosedTickets = () => {
  const [closedTickets, setClosedTickets] = useState([]);
  const [filter, setFilter] = useState({
    supportAgent: '',
    user: '',
    priority: '',
  });

  useEffect(() => {
    // Fetch closed tickets data from the backend with applied filters
    fetchClosedTickets();
  }, [filter]);

  const fetchClosedTickets = async () => {
    try {
      const response = await fetch(`/api/closedtickets?supportAgent=${filter.supportAgent}&user=${filter.user}&priority=${filter.priority}`);
      const data = await response.json();
      setClosedTickets(data);
    } catch (error) {
      console.error('Error fetching closed tickets:', error);
    }
  };

  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    setFilter({ ...filter, [name]: value });
  };

  return (
    <div className="closed-tickets-container" style={{ backgroundColor: 'lightblue' }}>
      <div className="nav-menu">
        <ul>
          <li><a href="./openTickets">Tickets</a></li>
          <li><a href="./feedBack">Feedback</a></li>
          <li><a href="./dashboard">Dashboard</a></li>
          <li><a href="./Admin">Admin</a></li>
        </ul>
        <button>New Ticket</button>
      </div>
      <div className="closed-tickets-content">
        <h2>Closed Tickets</h2>
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
          {closedTickets.map(ticket => (
            <div key={ticket.id} className="ticket">
              <p>Ticket ID: {ticket.id}</p>
              <p>Description: {ticket.description}</p>
              <p>Priority: {ticket.priority}</p>
              <p>Area: {ticket.area}</p>
              <p>Allocated to: {ticket.allocatedTo}</p>
              <p>Closed Date: {ticket.closedDate}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClosedTickets;
