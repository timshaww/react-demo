import React from 'react';
import { UserProvider } from './UserContext';
import UserList from './UserList';
import Search from './Search';

function App() {
  return (
    <UserProvider>
      <div style={{ textAlign: 'center', padding: '20px' }}>
        <h1>User Directory</h1>
        <Search />
        <UserList />
      </div>
    </UserProvider>
  );
}

export default App;
