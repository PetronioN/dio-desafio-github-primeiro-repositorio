import logo from './logo.svg';
import './App.css';

function sum(a, b) {
  return a + b;
}

function primeiroJSX() {
  return (
    <div>
      Petrônio
      <h1>Soma: {sum(10, 20)}</h1>
    </div>
  )
}

const App = () => {
  return (
    <div className="App">
      {primeiroJSX()}
    </div>
  )
}

export default App;
