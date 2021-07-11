import React from "react";

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
            <div>
                <b>{users[0].username}</b><span>({users[0].email})</span>
            </div>
            <div>
                <b>{users[1].username}</b><span>({users[1].email})</span>
            </div>
            <div>
                <b>{users[2].username}</b><span>({users[2].email})</span>
            </div>
        </div>
    )

}

export default UserList;