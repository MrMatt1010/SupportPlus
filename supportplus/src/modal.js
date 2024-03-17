import React, { useState } from 'react';
import './openTickets.css';

const OpenTickets = () => {
  const [supportAgent, setSupportAgent] = useState('');
  const [supportAgents, setSupportAgents] = useState([]); // Assuming this stores a list of support agents
  const [resolution, setResolution] = useState(''); // Assuming this stores the resolution status
  const [internalNotes, setInternalNotes] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState('');

  const handleOpenModal = (content) => {
    setModalContent(content);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleCloseTicket = () => {
    // Handle close ticket action
    handleCloseModal();
  };

  const handleEscalateTicket = () => {
    // Handle escalate ticket action
    handleCloseModal();
  };

  const handleUpdateTicket = () => {
    // Handle update ticket action
    handleCloseModal();
  };

  return (
    <div className="open-tickets-container">
      {/* Your existing OpenTickets content */}

      {/* Action buttons */}
      <div className="action-buttons">
        <button onClick={() => handleOpenModal('closeTicket')}>Close Ticket</button>
        <button onClick={() => handleOpenModal('escalate')}>Escalate</button>
        <button onClick={() => handleOpenModal('update')}>Update</button>
        <button onClick={() => handleOpenModal('cancel')}>Cancel</button>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleCloseModal}>&times;</span>
            {modalContent === 'close' && (
  <div>
    <h2>Close Ticket</h2>
    <select onChange={(e) => setSupportAgent(e.target.value)}>
      <option value="">Select Support Agent</option>
      {supportAgents.map(agent => (
        <option key={agent.id} value={agent.name}>{agent.name}</option>
      ))}
    </select>
    <label htmlFor="resolution">Resolution:</label>
    <input
      type="range"
      id="resolution"
      min="0"
      max="100"
      value={resolution}
      onChange={(e) => setResolution(e.target.value)}
    />
    <textarea
      placeholder="Internal Notes"
      value={internalNotes}
      onChange={(e) => setInternalNotes(e.target.value)}
    />
    <button onClick={handleCloseTicket}>Close Ticket</button>
    <button onClick={handleCloseModal}>Cancel</button>
  </div>
)}
            {modalContent === 'escalate' && (
  <div>
    <h2>Escalate Ticket</h2>
    <select onChange={(e) => setSupportAgent(e.target.value)}>
      <option value="">Select Support Agent</option>
      {supportAgents.map(agent => (
        <option key={agent.id} value={agent.name}>{agent.name}</option>
      ))}
    </select>
    <button onClick={handleEscalateTicket}>Escalate</button>
    <button onClick={handleCloseModal}>Cancel</button>
  </div>
)}
            {modalContent === 'update' && (
  <div>
    <h2>Update Ticket</h2>
    <p>Confirm that the ticket has been updated:</p>
    <button onClick={handleUpdateTicket}>Confirm Update</button>
    <button onClick={handleCloseModal}>Cancel</button>
  </div>
)}
            {modalContent === 'cancel' && (
              <div>
                
                <h2>Cancel</h2>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default OpenTickets;

