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
import {Routes, Route, BrowserRouter} from "react-router-dom"
import { Home } from './pages/Home';
import { SubRouter } from './pages/SubRouter';

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
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/size" element={<Size />} />
        <Route path="/personlist" element={<PersonList names={nameList} />} />
        <Route path="/profile" element={<Private isLoggedIn={false} Component={Profile} />} />
        <Route path="/sub/*" element={<SubRouter />} />
      </Routes>
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
    </BrowserRouter >
  );
}

export default App;
