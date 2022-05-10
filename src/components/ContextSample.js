import React, { createContext, useContext, useState} from "react";

const MyContext = createContext("defaultValue");

function Child() {
    const text = useContext(MyContext);
    return <div> 안녕? 오늘의 기분은 어때? { text }</div>
}

function Parent() {
    return <Child />
}

function GrandParent() {
    return <Parent />
}

function ContextSample() {
    const [value, setValue] = useState(true);

    return (
        <MyContext.Provider value={value ? 'GOOD' : 'BAD'}>
            <GrandParent />
            <button onClick={() => setValue(!value)}>Click!</button>
        </MyContext.Provider>
    );
}


export default ContextSample;