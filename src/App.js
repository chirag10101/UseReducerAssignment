import './App.css';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import {CartProvider} from './components/CartProvider';

function App() {
  return (
    <div className="App">
      <CartProvider>
        <div>
          <h1>Shopping Cart Example</h1>
          <ProductList />
          <Cart/>
        </div>
      </CartProvider>
    </div>
  );
}

export default App;
