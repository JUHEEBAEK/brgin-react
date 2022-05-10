import React, { useReducer, useMemo } from "react";

import UserList from "./UserList";
import CreateUser from "./CreateUser";

function countActiveUsers(users) {
    console.log("활성 사용자를 세는 중...");
    return users.filter(user => user.active).length;
}

const initialState = {
      users: [
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
    ]
}

function reducer(state, action) {
    switch(action.type) {
        case "CREATE_USER":
            return {
                inputs: initialState.inputs,
                users: state.users.concat(action.user)
            };
        case "REMOVE_USER":
            return {
                ...state,
                users: state.users.filter(user => user.id !== action.id)
            };
        case "TOGGLE_USER":
            return {
                ...state,
                users: state.users.map(user => 
                    user.id === action.id 
                        ? { ...user, active: !user.active } : user
                )
            };
        default: 
            throw new Error("Unhandled action");
    } 
}

export const UserDispatch = React.createContext(null);

function UserReducerView() {
    const [state, dispatch] = useReducer(reducer, initialState);

    const { users } = state;
    const count = useMemo(() => countActiveUsers(users), [users]);

    return (
    <UserDispatch.Provider value={dispatch}>
        <CreateUser />
        <UserList users={users} />

        현재 활성화 된 사용자 수: {count}
    </UserDispatch.Provider>
    )
}

export default UserReducerView;