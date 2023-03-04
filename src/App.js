import logo from './logo.svg';
import { Button } from 'react-reusable-button-library';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Button
          colorScheme="red"
          size="sm"
        >
          Button
        </Button>;
        Learn React
      </header>
    </div>
  );
}

export default App;
