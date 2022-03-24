import React from 'react';

import './App.css';
import { Greet } from "./components/Greet"
import { Heading } from './components/Heading';
import { Oscar } from './components/Oscar';
import { Person } from "./components/Person"
import { PersonList } from './components/PersonList';
import { Status } from './components/Status';


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
    </div>
  );
}

export default App;
