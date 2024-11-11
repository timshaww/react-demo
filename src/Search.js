import React, { useContext, useRef } from 'react';
import { UserContext } from './UserContext';

function Search() {
  const { setUsers } = useContext(UserContext);
  const searchRef = useRef();

  const handleSearch = () => {
    const query = searchRef.current.value.toLowerCase();
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        const filteredUsers = data.filter(user =>
          user.name.toLowerCase().includes(query)
        );
        setUsers(filteredUsers);
      });
  };

  return (
    <div>
      <input
        type="text"
        ref={searchRef}
        placeholder="Search users..."
        onChange={handleSearch}
        style={{ padding: '10px', margin: '10px', width: '200px' }}
      />
    </div>
  );
}

export default Search;
