import React, { useState } from 'react';

const AddSupportAgentForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!name.trim() || !email.trim() || !role.trim()) return;
    onSubmit({ name, email, role });
    setName('');
    setEmail('');
    setRole('');
  };

  return (
    <div>
      <h2>Add Support Agent</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label>
          Role:
          <input
            type="text"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            required
          />
        </label>
        <button type="submit">Add Support Agent</button>
      </form>
    </div>
  );
};

export default AddSupportAgentForm;
