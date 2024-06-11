import bogdann from './bogdann.jpeg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header down">
        <img src={bogdann} className="App-logo" alt="logo" />
        <p>
          Разумейко Богдан. 19 годиков. м.Запорожье 
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
