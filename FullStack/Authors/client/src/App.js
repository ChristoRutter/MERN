import './App.css';
import AuthorList from './components/AuthorList'
import EditAuthor from './components/EditAuthor'
import AddAuthor from './components/AddAuthor'
import {Router} from '@reach/router'

function App() {
  return (
    <div className="App">
      <Router>
        <AuthorList path="/" />
        <EditAuthor path="/edit/:id" />
        <AddAuthor path="/add" />
      </Router>
    </div>
  );
}

export default App;
