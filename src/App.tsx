import React from 'react';

import './App.css';
import { Button } from './components/Button';
import { Container } from './components/Container';
import { Greet } from "./components/Greet"
import { Heading } from './components/Heading';
import { Input } from './components/input';
import { Oscar } from './components/Oscar';
import { Person } from "./components/Person"
import { PersonList } from './components/PersonList';
import { Status } from './components/Status';
import { User } from './components/state/User';
import { ThemeContextProvider } from './components/context/ThemeContext';
import { Box } from './components/context/Box';




function App() {
  const personName = {
    first: 'Bruce',
    last: 'James'
  }
  const nameList = [
    {
      first: 'Bruce',
      last: 'Wayne'
    },
    {
      first: 'Clark',
      last: 'Kent'
    },
    {
      first: 'Princess',
      last: 'Diana'
    },
  ]
  
  return (
    <div className="App">
      <Greet name='cheol' messageCount={10} isLoggedIn={true} />
      <Person name={personName} />
      <PersonList names={nameList} />
      <Status status='loading' />
      <Oscar>
        <Heading>Oscar goes to Leonardo Dicprio! </Heading>
      </Oscar>
      <Button name='newButton' clickHandler={(event) => {console.log('button', event)}} />
      <Input />
      <Container styles={{border: '1px solid black'}} />
      <User />
      <ThemeContextProvider> 
        <Box />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
