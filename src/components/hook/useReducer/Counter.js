import React, { useReducer } from "react";

/* function reducer(state, action) {
    // 새로운 상태를 만드는 로직
    // const nextState = ...
    return nextState;
  }
 */

function reducer(state, action) {
    switch (action.type) {
        case 'INCREMENT':
        return state + 1;
        case 'DECREMENT':
        return state - 1;
        default:
        return state;
    }
}

function UseReducerCounter() {
    // const [state, dispatch] = useReducer(reducer, initialState);
    const [number, dispatch] = useReducer(reducer, 0);


    // const [ number, setNumber ] = useState(0);

    const onIncrease = () => {
        console.log("+1");
        dispatch({ type: 'INCREMENT' });
    }
    const onDecrease = () => {
        console.log("-1");
        dispatch({ type: 'DECREMENT' });
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
export default UseReducerCounter;