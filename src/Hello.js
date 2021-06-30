import React from "react";
// props 사용법
function Hello({color, name, isSpecial}) {
    return (
        <div style={{color}}>
            {/* 
                삼항연산자는 두가지 값이 공존 할 때 사용하는 게 좋다. 
                보여주고 숨길 때는 && 사용 하는게 좋다.
            */}
            {isSpecial ? <b>*</b> : null} 
            {isSpecial && <b>*</b>}
            안녕하세요 {name}
        </div>
    );
}

Hello.defaultProps = {
    name: "이름없음"
}
export default Hello;