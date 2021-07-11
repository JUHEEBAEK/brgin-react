import React, { useRef } from "react";
import UserList from "./UserList";
import users from "./sample";

function App() {
  
  const nextId = useRef(4);

  const onCreate = () => {
    console.log(nextId.current);
    nextId.current += 1; 
    // useRef로 관리하는 이유
    // 값이 바뀐다고 컴포넌트가 리레더링이 되지 않도록 하기 위해서. 
  }
  return (
    <UserList users={users}/>
  );
}

export default App;
