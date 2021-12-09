import logo from './logo.svg';
import './App.css';
import PersonCard from "./components/PersonCard";

function App() {
  const person = [{
    firstName: 'Jane',
    lastName: 'Doe',
    age: 45,
    hairColor: 'Black'
  },
  {
    firstName: 'John',
    lastName: 'Smith',
    age: 88,
    hairColor: 'Brown'
  },
  {
    firstName: 'Millard',
    lastName: 'Fillmore',
    age: 50,
    hairColor: 'Brown'
  },
  {
    firstName: 'Maria',
    lastName: 'Smith',
    age: 62,
    hairColor: 'Brown'
  }]

  return (
    <div className="App">
      {/* <PersonCard person = {person[0]}/>
      <PersonCard person = {person[1]}/>
      <PersonCard person = {person[2]}/>
      <PersonCard person = {person[3]}/> */}
      {
        person.map((member, index) => 
          (
            <PersonCard 
              key={index}
              firstName = {member.firstName}
              lastName = {member.lastName}
              age = {member.age}
              hairColor = {member.hairColor}
            />
          )
        )
      }
    </div>
  );
}

export default App;
