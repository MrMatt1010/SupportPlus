import React, { useState } from 'react';

const ChangeRoleForm = ({ agent, onChange }) => {
  const [newRole, setNewRole] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!newRole.trim()) return;
    onChange(agent.id, newRole);
    setNewRole('');
  };

  return (
    <div>
      <h2>Change Role</h2>
      <form onSubmit={handleSubmit}>
        <label>
          New Role:
          <input
            type="text"
            value={newRole}
            onChange={(e) => setNewRole(e.target.value)}
            required
          />
        </label>
        <button type="submit">Change Role</button>
      </form>
    </div>
  );
};

export default ChangeRoleForm;
