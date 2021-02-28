import "./App.css";
import data from "./data/data.json";
import User from "./components/Users/User";
import { useState } from "react";

function App() {
  const [users, setUsers] = useState([]);
  let totalSalary = 0;
  for (let i = 0; i < users.length; i++) {
    const user = users[i];
    totalSalary = totalSalary + user.salary;
  }
  const handleUserAddition = (user) => {
    const newUser = [...users, user];
    setUsers(newUser);
  };
  return (
    <div className="app">
      <div className="users-container">
        {data.map((user) => (
          <User handleUserAddition={handleUserAddition} user={user}></User>
        ))}
      </div>
      <div className="selected-user-container">
        <div className="selected-box">
          <h4>user added: {users.length}</h4>
          <h4>user salary: {totalSalary}</h4>
        </div>
      </div>
    </div>
  );
}

export default App;
