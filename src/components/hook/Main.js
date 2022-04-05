import React, { useRef, useState } from "react";

import UserList from "./UserList";
import CreateUser from "./CreateUser";

function UserView() {
    const [inputs, setInputs] = useState({
        username: "",
        email: ""
      });
    
    const { username, email } = inputs;

    const onChange = e => {
        const { name, value } = e.target;
        setInputs({
          ...inputs, // 스프레드 연산자 사용
          [name]: value
        });
    };
    

    const [users, setUsers] = useState([
        {
            id: 1,
            username: "Grizz",
            email: "grizz@bears.com",
            active: true
        },
        {
            id: 2,
            username: "Panda",
            email: "panda@bears.com",
            active: true
        },
        {
            id: 3,
            username: "IceBear",
            email: "iceBear@bears.com",
            active: true
        }
    ]);

    const nextId = useRef(4);
    const onCreate = () => {
    const user = {
        id: nextId.current,
        username,
        email
    };

    setUsers([...users, user]);
    // 배열에 값 추가하는 방법2 
    // concat함수 사용
    // setUsers(users.concat(user));
    
    setInputs({
        username: "",
        email: ""
    });
    
    nextId.current += 1; 
    // useRef로 관리하는 이유
    // 값이 바뀐다고 컴포넌트가 리레더링이 되지 않도록 하기 위해서. 
    };

    const onRemove = id => {
        setUsers(users.filter(user => user.id !== id));
    };

    const onToggle = id => {
        setUsers(
            users.map(
            user => user.id === id
                ? { ...user, active: !user.active }
                : user
            )
        );
    };


      return (
        <>
            <CreateUser 
                username={username}
                email={email}
                onChange={onChange}
                onCreate={onCreate} 
            />
            <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
        </>
      )
}

export default UserView;