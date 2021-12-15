import React, {useState} from 'react';
import Display from './components/Display'
import TabOne from './components/TabOne'
import TabTwo from './components/TabTwo'
import TabThree from './components/TabThree'
import './App.css';

function App() {

  const [tab, setTab] = useState([
    {
      text: <TabOne />
    },
    {
      text: <TabTwo />
    },
    {
      text: <TabThree />
    }
  ])

  const [active, setActive] = useState(0)

  return (
    <div className="App">
      <Display setActive={setActive} />

      <p>{tab[active].text}</p>
    </div>
  );
}

export default App;
