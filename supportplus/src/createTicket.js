import React, { useState } from 'react';
//import './createTicketForm.css';

const CreateTicketForm = () => {
  const [description, setDescription] = useState('');
  const [contactDetails, setContactDetails] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Send ticket details to the server and save to the database
    try {
      const response = await fetch('/api/tickets', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ description, contactDetails }),
      });
      if (response.ok) {
        // Ticket created successfully
        console.log('Ticket created successfully');
        // Optionally, redirect to a success page or dashboard
      } else {
        // Handle error
        console.error('Failed to create ticket');
      }
    } catch (error) {
      console.error('Error creating ticket:', error);
    }
  };

  return (
    <div className="create-ticket-container">
      <h2>Create New Ticket</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="contactDetails">Contact Details:</label>
          <input
            type="text"
            id="contactDetails"
            value={contactDetails}
            onChange={(e) => setContactDetails(e.target.value)}
            required
          />
        </div>
        <button type="submit">Create Ticket</button>
      </form>
    </div>
  );
};

export default CreateTicketForm;
