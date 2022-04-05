import React, { useRef, useState, useMemo, useCallback } from "react";

import UserList from "./UserList";
import CreateUser from "./CreateUser";

function countActiveUsers(users) {
    console.log("활성 사용자를 세는 중...");
    return users.filter(user => user.active).length;
}

function UserView() {
    const [inputs, setInputs] = useState({
        username: "",
        email: ""
      });
    
    const { username, email } = inputs;

    const onChange = useCallback (e => {
        const { name, value } = e.target;
        setInputs({
          ...inputs, // 스프레드 연산자 사용
          [name]: value
        });
    }, [inputs]);
    

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
    const onCreate = useCallback( () => {
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
    }, [username, email, users]);

    const onRemove = useCallback(id => {
        setUsers(users.filter(user => user.id !== id));
    }, [users]);

    const onToggle = useCallback(id => {
        setUsers(
            users.map(
            user => user.id === id
                ? { ...user, active: !user.active }
                : user
            )
        );
    }, [users]);
    // useMemo 특정 값이 바뀌었을 때만 특정 함수를 실행시켜줌. 원하는 값이 바뀌지 않으면 원래 있던 것을 재사용할 수 있게 함.
    // 첫 번쨰 parameter = 함수, 두번째 parameter 뎁스
    // useMemo가 computed랑 비슷한거 같기도!!
    const count = useMemo(() => countActiveUsers(users), [users]);

    return (
    <>
        <CreateUser 
            username={username}
            email={email}
            onChange={onChange}
            onCreate={onCreate} 
        />
        <UserList users={users} onRemove={onRemove} onToggle={onToggle} />

        현재 활성화 된 사용자 수: {count}
    </>
    )
}

export default UserView;