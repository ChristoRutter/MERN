import './App.css';
import ProductList from './components/ProductList'
import SingleProduct from './components/SingleProduct'
import {Router} from '@reach/router'


function App() {
  return (
    <div className="App">
      <Router>
        <ProductList path="/" />
        <SingleProduct path="/products/:id" />
      </Router>
      
    </div>
  );
}

export default App;
