import React, { useState } from "react";

function Counter() {
    const [ number, setNumber ] = useState(0);

    const onIncrease = () => {
        console.log("+1");
        setNumber(number + 1);
    }
    const onDecrease = () => {
        console.log("-1");
        // setNumber(number - 1);
        setNumber(preNumber => preNumber - 1); // 함수를 파라미터로 넣어주는 방법
    }
    return (
        <div> 
            <h1>{number}</h1>
            {/* 함수를 넎어주는 거지 호출하는게 아니다 */}
            <button onClick={onIncrease}>+1</button>
            <button onClick={onDecrease}>-1</button>
        </div>
    )
}
export default Counter;