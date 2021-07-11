import React from "react";

// props로 user 받기
function User({user}) {
    return (
        <div>
            <b>{user.username}</b><span>({user.email})</span>
        </div>
    )
}

function UserList(users) {
    users = users.users;
    return (
        <div>
            {
                users.map(
                    user => (<User user={user} key={user.id} />) 
                    //key 없을 경우 index 사용. 그러나 key값으로 index를 사용하는게 효율적이진 않다.(효과없음.)
                )
            }
        </div>
    )
}

export default UserList;