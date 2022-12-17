import './App.css';
import { Button } from './components/Button.jsx';

function App() {
  return (
    <div className="App">
      <header>
        <h3>Buttons</h3>
      </header>
      <main>
        <div className="button-container">
          <label className="button-container__label">{'<Button />'}</label>
          <Button></Button>
        </div>
      </main>
    </div>
  );
}

export default App;
