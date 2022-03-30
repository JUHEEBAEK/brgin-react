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
import { UserContextProvider } from './components/context/UserContext';
import { UserWithContext } from './components/context/User';
import { ManualCounter } from './components/ref/MutableRef';
import { Private } from './components/auth/Private';
import { Profile } from './components/auth/Profile'
import { Size } from './components/effect/Size';

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
      <Size />
      <PersonList names={nameList} />
      <Private isLoggedIn={false} Component={Profile} />
      {/* <Button name='newButton' clickHandler={(event) => {console.log('button', event)}} />
      <Greet name='cheol' messageCount={10} isLoggedIn={false} /> */}
      {/* 
      <Person name={personName} />
      
      <Status status='loading' />
      <Oscar>
        <Heading>Oscar goes to Leonardo Dicprio! </Heading>
      </Oscar>
      
      <Input />
      <Container styles={{border: '1px solid black'}} />
      <User />
      <ThemeContextProvider> 
        <Box />
      </ThemeContextProvider>
      <UserContextProvider>
        <UserWithContext /> 
      </UserContextProvider> */}
    </div>
  );
}

export default App;
