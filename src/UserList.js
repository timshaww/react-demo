import React, { useContext } from 'react';
import { UserContext } from './UserContex';
import UserCard from './UserCard';

function UserList() {
  const { users } = useContext(UserContext);

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      {users.map(user => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
}

export default UserList;
