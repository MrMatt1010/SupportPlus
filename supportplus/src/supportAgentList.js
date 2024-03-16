import React from 'react';

const SupportAgentList = ({ agents, onDelete }) => {
  return (
    <div>
      <h2>Support Agents</h2>
      <ul>
        {agents.map((agent) => (
          <li key={agent.id}>
            <div>{agent.name}</div>
            <div>{agent.email}</div>
            <div>{agent.phone}</div>
            <div>{agent.role}</div>
            <button onClick={() => onDelete(agent.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SupportAgentList;
