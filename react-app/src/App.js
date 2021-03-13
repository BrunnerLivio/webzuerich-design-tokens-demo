import './App.css';
import { useState } from 'react';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <>
      <link
        rel="stylesheet"
        type="text/css"
        href={isDarkMode ? 'DarkTheme.css' : 'LightTheme.css'}
      />
      <div className="App">
        <header className="App-header">My Awesome App</header>

        <h1>Hello Web Zürich</h1>
        <button className="App-btn" onClick={() => setIsDarkMode(!isDarkMode)}>
          Toggle Theme!
        </button>
      </div>
    </>
  );
}

export default App;
