import React, { Fragment, useState } from "react";
import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UserList";

function App() {
  const [userData, setUserData] = useState([]);
  
  const userDataHandler = (enteredData) => {
    setUserData((prevData) => {
      const updateUser = [...prevData];
      updateUser.unshift({
        name: enteredData.username,
        age: enteredData.age,
        id: Math.random().toString()
      });
      return updateUser;
    });
  };
  return (
    <Fragment>
      <AddUser onAddUser={userDataHandler} />
      <UserList users={userData}/>
    </Fragment>
  );
}

export default App;
