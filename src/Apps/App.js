import React from "react";
import Card from "../components/Card";
import Hello from "../components/Hello";
import Counter from "../components/Counter";
import InputSample from "../components/InputSample";
import UserView from "../components/hook/Main";

function App() {
  return (
    <>
      {/*
        요렇게 하면 밑에 {1}, {true} 때문에 콘솔에러남.
      */}
      <Card header="props">
        <Hello name="Vue" />
        <Hello name={1} /> 
        <Hello name={['a', '1']} />
        <Hello name={true} />
        <Hello />
      </Card>
      <Card header="단순 보이기">
      보여주고 숨기고의 단순한 처리라면 && 연산자를 사용해서 처리
      <br />
      {true && 'hello'}
      <br />
      {false && 'hello'}
      <br />
      {"hello" && 'bye'}
      <br />
      {/* console.log(true && 'hello'); // hello
      console.log(false && 'hello'); // false
      console.log('hello' && 'bye'); // bye */}
      </Card>
      <Card header="useState">
       <Counter />
      </Card>
      <Card header="useRef">
        {/* useRef 초기화 버튼 누르고 이름에 포커스 가도록 설정 */}
       <InputSample /> 
      </Card>
      <Card header="for문">
        {/* useRef 초기화 버튼 누르고 이름에 포커스 가도록 설정 */}
       <UserView /> 
      </Card>
    </>
  );
}

export default App;
