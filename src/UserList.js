import React from "react";

// props로 user 받기
function User({user}) {
    return (
        <div>
            <b>{user.username}</b><span>({user.email})</span>
        </div>
    )
}

function UserList() {
    const users = [
        {
            id: 1,
            username: "Grizz",
            email: "grizz@bears.com"
        },
        {
            id: 2,
            username: "Panda",
            email: "panda@bears.com"
        },
        {
            id: 3,
            username: "IceBear",
            email: "iceBear@bears.com"
        }
    ];

    return (
        <div>
            <User user={users[0]} />
            <User user={users[1]} />
            <User user={users[2]} />
        </div>
    )

}

export default UserList;