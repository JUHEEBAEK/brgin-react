import React, { useContext, useRef } from "react";
import { UserDispatch } from "./Main";
import useInputs from "./useInputs";


// export const onCreate = (() => {
//     dispatch({
//         type:"CREATE_USER",
//         user: {
//             id: nextId.current,
//             username,
//             email
//         },
//     });
//     nextId.current += 1;
//     reset();
// }

function CreateUser() {
    const containerStyle = {
        display: "flex",
        width: "50%",
        alignItems: "center"
    };
    const buttonStyle = {
        backgroundColor: "#cddc39",
        color: "white",
        width: "120px",
        height: "20px",
        borderRadius: "8px",
        border: "solid 1px #cddc39",
        margin: "2px"
    };
    const inputStyle = {
        margin: "2px",
        height: "16px",
        backgroundColor: "white",
        borderRadius: "4px",
        border: "solid 0.1px black",
        fontSize: "10px",
    };

    const [{ username, email }, onChange, reset] = useInputs({
        username: '',
        email: ''
    });

    const dispatch = useContext(UserDispatch);
    const nextId = useRef(4);

    const onCreate = () => {
        dispatch({
            type:"CREATE_USER",
            user: {
                id: nextId.current,
                username,
                email
            },
        });
        reset()
    }

    return(
        <div style={containerStyle}>
            <input
                style={inputStyle}
                name="username"
                placeholder="계정명"
                onChange={onChange}
                value={username}
            />
            <input
                style={inputStyle}
                name="email"
                placeholder="이메일"
                onChange={onChange}
                value={email}
            />
            <button style={buttonStyle} onClick={onCreate}> 등록 </button>
        </div>
    )
}

export default React.memo(CreateUser);