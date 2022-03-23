import React from "react";
import Hello from "../components/Hello";

function App() {
  return (
    <>
      {/* name 안에 숫자나 다른거 넣어보고 싶은데 어떻게함?? */}
      <Hello name="Vue" />
      <Hello name="1" />
      <Hello />
    </>
  );
}

export default App;
