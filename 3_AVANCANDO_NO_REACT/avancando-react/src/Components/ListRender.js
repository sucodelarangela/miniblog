import { useState } from "react";

const ListRender = () => {
  const [list] = useState(["Matheus", "Pedro", "Josias", "Maria"]);

  const [users, setUsers] = useState([
    { id: 1, name: "Matheus", age: 31 },
    { id: 2, name: "João", age: 28 },
    { id: 3, name: "Pedro", age: 44 }
  ]);

  const deleteRandom = () => {
    let randomNumber = Math.floor(Math.random() * 4);

    // Using previous state to set a new state
    setUsers((prevUsers) => {
      // the function returns the list of users above without the one with the selected random number and sets it as the new users stats
      return prevUsers.filter((user) => randomNumber !== user.id);
    });
  };

  return (
    <div>
      <ul>
        {list.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name} - {user.age}</li>
        ))}
      </ul>
      <button onClick={deleteRandom}>Delete random user</button>
    </div>
  );
};

export default ListRender;