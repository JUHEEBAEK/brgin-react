import React from "react";
import Hello from "./Hello";
import Wrapper from "./Wrapper";

function App() {
  return (
    <Wrapper>
      <Hello name="react" color="red" isSpecial={true} /> {/* isSpecial 요렇게만 써도 됨. */}
      <Hello color="pink" />
    </Wrapper>
  );
}

export default App;
