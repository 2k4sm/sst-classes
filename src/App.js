import "./App.css";
import { a, b } from "./components/Products/Products";
import Products from "./components/Products/Products";
function App() {
  console.log(a, b);
  return (
    <div className="App">
      <Products />
    </div>
  );
}

export default App;

// {1:{id: 1, quantity: 11}, 2:{id: 2, quantity: 10}, 3:{id: 3, quantity: 10}, 4:{id: 4, quantity: 10}}

// button
// - 1 +

// let a = {b:10, c:20};
//a.b = 30;
// let b = {...a};

// a => 1234
// a => 12

// {cart: cart, increaseQuantity: increaseQuantity}

// Global Parent
// Global state
// way to manipulate the state
// way to consume the state

//  Provider
//  Store
// State
// Reducer
// Action
// Dispatcher
// Selectors
