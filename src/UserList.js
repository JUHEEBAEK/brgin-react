import React from "react";

// props로 user 받기
function User({ user, onRemove, onToggle }) {
    const buttonIconStyle = {
        display: "flex",
        justifyContent: "center",
        color: "white",
        backgroundColor: "#ff576e",
        borderRadius: "12px",
        cursor: "pointer",
        width: "16px",
        height: "16px",
        fontSize: "10px",
        fontWeight: "bold",
        border: "solid 1px #ff576e"
    }
    const { username, email, id, active } = user;
    return (
        <div style={{
            display: "flex",
            justifyContent: "space-between",
            width: "50%",
        }}>
            <div style={{ margin: "4px"}}>
                <b 
                    style={{
                    color: active ? "green" : "black",
                    cursor: "pointer"
                    }}
                    onClick={() => onToggle(id)}
                >{username}</b>
                &nbsp;
                <span>({email})</span>
            </div>
            {/* 함수를 부르는게 아니라 함수를 써야함. 
                함수만 부르면 바로 다 사라짐. 
                onClick={onRemove(id)} 이렇게 하면 불러오자 마자 다 사라짐
            */}
            &nbsp;
            <button style={buttonIconStyle} onClick={() => onRemove(id)}> X </button> 
        </div>
    )
}

function UserList({ users, onRemove, onToggle }) {
    return (
        <div>
            {
                users.map(
                    user => (
                        <User
                            user={user}
                            key={user.id}
                            onRemove={onRemove}
                            onToggle={onToggle}
                        />
                    ) 
                    //key 없을 경우 index 사용. 그러나 key값으로 index를 사용하는게 효율적이진 않다.(효과없음.)
                )
            }
        </div>
    )
}

export default UserList;