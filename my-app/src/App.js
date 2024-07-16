import React, { useState, useEffect } from 'react';
import './App.css';

const initialUsers = [
  { name: 'Praveen Singh', email: 'Praveen.Singh@example.com', phone: '123-456-7890', designation: 'Manager', access: 'Active', id: '1' },
  { name: 'Naveen Singh', email: 'Naveen.Singh@example.com', phone: '987-654-3210', designation: 'Developer', access: 'Inactive', id: '2' },
  { name: 'Ramesh Singh', email: 'Ramesh.Singh@example.com', phone: '987-654-3210', designation: 'admin', access: 'Inactive', id: '3' },
  
];

function App() {
  const [users, setUsers] = useState(initialUsers);
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    let filteredUsers = initialUsers;

    if (filter !== 'All') {
      filteredUsers = filteredUsers.filter(user => user.access === filter);
    }

    if (searchTerm) {
      filteredUsers = filteredUsers.filter(user => 
        user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setUsers(filteredUsers);
  }, [searchTerm, filter]);

  return (
    <div className="App">
      <h1>Admin Table</h1>
      <div className="controls">
        <input 
          type="text" 
          placeholder="Search by name or email" 
          value={searchTerm} 
          onChange={e => setSearchTerm(e.target.value)} 
        />
        <select value={filter} onChange={e => setFilter(e.target.value)}>
          <option value="All">All</option>
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>
      </div>
      <table>
        <thead>
          <tr>
            <th>User Name</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Designation</th>
            <th>Access Status</th>
            <th>User ID</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>{user.designation}</td>
              <td>{user.access}</td>
              <td>{user.id}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
