import React, { useState } from 'react';
import './App.css';
import FormikLoginForm from "./loginform";
function App() {
  const [users, setUsers] = useState([])
  const updateUsers = update => {
    setUsers([...users, update])
  }
  console.log(users)
  return (
    <div className="App">
      <FormikLoginForm updateUsers={updateUsers} />
      <div>
        {users.map(user => {
          return (
            <div key={user.id}>
              <h1>User</h1>
              <h2>Name: {user.name}</h2>
              <p>Email: {user.email}</p>
            </div>
          )
        })}
      </div>
    </div>
    
  );
}

export default App;
