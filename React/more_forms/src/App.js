import React, {useState} from 'react';
import './App.css';
import Form from './components/Form';
import Display from './components/Display';



function App() {

  const [userList, setUserList] = useState([]);


  return (

    <div className="App">
      <Form userList={userList} setUserList={setUserList}/>
      <Display userList={userList}/>

    </div>
  );
}

export default App;