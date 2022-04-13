import React, { useEffect } from "react";

// props로 user 받기
const User = React.memo(function User({ user, onRemove, onToggle }) {
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

   /*  useEffect(() => {
       // 두번째 param에 빈 배열을 넣을 경우
        console.log("컴포넌트가 화면에 나타났다!!");
        // props => state로 변환할 때
        // REST API 
        // 라이브러리를 사용할 때 d3, video.js
        // dom에 그려지고 나서 실행되는 곳이어서 dom을 만질 때
        return () => {
            // clearInterval, clearTimeout
            // 라이브러리 제거 함수 클리너 함수(뒷정리 함수)
            console.log("컴포넌트가 화면에서 사라집니다!!");
        }
    }, []); */

    useEffect(() => {
        // 값을 넣었을 경우
        // console.log("user 값이 설정 됨")
        // console.log(user);
        return () => {
            // 뒷 정리 함수로 업데이트 하기 전에 호출됨.
            // console.log("user 값이 바뀌기 전")
            // console.log(user);
        }
    }, [user]); // 값을 넣어야지만 최신의 값을 가져올 수가 있다. 안 넣으면 에러남

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
});

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

// React.memo 진짜 사용해야 할 때 사용하기

export default React.memo(UserList);