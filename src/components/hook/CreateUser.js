import React from "react";

function CreateUser({ username, email, onChange, onCreate }) {
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