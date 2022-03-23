import React from "react";
import Card from "../components/Card";
import Hello from "../components/Hello";

function App() {
  return (
    <>
      {/* name 안에 숫자나 다른거 넣어보고 싶은데 어떻게함?? 
        요렇게 하면 밑에 {1}, {true} 때문에 콘솔에러남.
      */}
      <Card header="props">
        <Hello name="Vue" />
        <Hello name={1} /> 
        <Hello name={['a', '1']} />
        <Hello name={true} />
        <Hello />
      </Card>
      <Card header="useState">
       
      </Card>
    </>
  );
}

export default App;
