import React, { useState } from 'react';
import './feedBack.css';

const Feedback = () => {
  const [feedback, setFeedback] = useState('');
  const [ticketId, setTicketId] = useState(''); // Assuming you have a way to retrieve the ticket ID

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Send feedback data to the backend for storage
      const response = await fetch('/api/feedback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ feedback, ticketId }),
      });
      if (response.ok) {
        // Feedback submitted successfully, you can redirect or show a success message
        console.log('Feedback submitted successfully');
      } else {
        console.error('Failed to submit feedback');
      }
    } catch (error) {
      console.error('Error submitting feedback:', error);
    }
  };

  return (
    <div className="feedback-container">
      <h2>Feedback</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="feedback">Your Feedback:</label>
          <textarea
            id="feedback"
            value={feedback}
            onChange={(event) => setFeedback(event.target.value)}
            required
          ></textarea>
        </div>
        {/* retrieve the ticket ID */}
        <input
          type="hidden"
          value={ticketId}
          onChange={(event) => setTicketId(event.target.value)}
        />
        <button type="submit">Submit Feedback</button>
      </form>
    </div>
  );
};

export default Feedback;
