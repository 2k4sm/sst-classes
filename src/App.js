import './App.css';
import { a, b } from './components/Products/Products';
import Products from './components/Products/Products';
import useWindowProps from './components/hooks/useWIndowProps';
function App() {
  console.log(a, b);
  const [height, width] = useWindowProps();
  return (
    <div className="App">
      <h1> {height} x {width}</h1>
      <Products />
    </div>
  );
}

export default App;
