import React from 'react';
import Navbar from './components/Navbar.js';
import Cover from './components/Cover.js';
import Button from './components/Button.js';
import {H1, H4} from './components/Headings';
import Card from './components/Card';
import ContactList from './components/ContactList';
import Table from './components/Tables'
import packagedBottles from './factory.js';
import Toggle from './components/Toggle.js';
import LoginForm from './components/LoginForm.js'
import ObjectHasName from './components/ObjectHasName.js'
import RegistrationForm from './components/RegistrationForm';

const contacts = [
  { name: "Joe", phone: "0912 022 0122" }, 
  { name: "Shammah", phone: "08105456979" }, 
  { name: "Smith", phone: "0812 234 3233" },
];

const dataList = [
  { firstName: 'Sam Smith', age: 32, occupation: 'Musicin' },
  { firstName: 'Nobody Smith', age: 12, occupation: 'Musicin' },
  { firstName: 'Sam Doe', age: 22, occupation: 'Musicin' },
  { firstName: 'Taylor Swift', age: 21, occupation: 'Musicin' },
  { firstName: 'Justin Bieber', age: 18, occupation: 'Musicin' },
];

const MusicianTable = () => {
  return (
  <Table>
    <Table.Row>
      <Table.Cell>FIRSTNAME</Table.Cell>
      <Table.Cell>AGE</Table.Cell>
      <Table.Cell>OCCUPATION</Table.Cell>
    </Table.Row>
    {dataList.map(item => <Table.Row>
        <Table.Cell>{item.firstName}</Table.Cell>
        <Table.Cell>{item.age}</Table.Cell>
        <Table.Cell>{item.occupation}</Table.Cell>
      </Table.Row>)}
  </Table>
  )
}

function App() {
  return (
    <div>  
      <Navbar>
          <li>Home </li>
          <li>Products</li> 
          <li>Pricing </li>
          <li>Contact</li>
      </Navbar>
        <Cover>
          <h1 className = "main-heading" > Hi, am a React Developer </h1> 
          <p className = "after-heading" > Am James Parket, an experienced developer with over 7 years on web development. </p>
            <Button regular>See Profile</Button>
            <Button outline>Buy me coffee</Button>
        </Cover>

        <div>
          <Toggle />
          <H1>Trends</H1>
          <Card  description="the first of its kind" />
          <Card image = "http://www.photoaxe.com/wp-content/uploads/2014/08/cofffecup.jpg" title= "FIrst Card" description="the first of its kind" />
          <Card image = "http://www.photoaxe.com/wp-content/uploads/2014/08/cofffecup.jpg" title= "FIrst Card" description="the first of its kind" />
        </div>

        <div>
          <ContactList list={contacts}/>
          <MusicianTable />
        </div>
        <div>
          <LoginForm onSubmit={(fields) => {console.log(fields)}} />
        </div>
        <div>
          <ObjectHasName 
    object={{name:'James'}} 
    whenTrue={() => console.log('The Object Has a Name')}
    whenFalse={() => console.log('The Object is Without a Name')} />
        </div>
        <div>
          <RegistrationForm onSubmit={(inputFields) => { console.log(inputFields)}} />
        </div>
    </div>
  );
}


export default App;