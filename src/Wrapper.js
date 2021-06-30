import React from "react";
// children 사용법
// vue에선 scope 같은 거
function Wrapper({ children }) {
    const style = {
        border: "solid 2px black",
        padding: 16
    }

    return <div style={style}>{children}</div>
}

export default Wrapper;