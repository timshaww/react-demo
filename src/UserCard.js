import React from 'react';

function UserCard({ user }) {
  return (
    <div
      style={{
        border: '1px solid #ccc',
        borderRadius: '5px',
        padding: '15px',
        margin: '10px',
        width: '200px',
        textAlign: 'center',
      }}
    >
      <h3>{user.name}</h3>
      <p>Email: {user.email}</p>
      <button onClick={() => alert(`Contacting ${user.name}`)}>Contact</button>
    </div>
  );
}

export default UserCard;
