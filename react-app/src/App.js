import './App.css';
import { useState } from 'react';
import Sun from './Sun';
import Moon from './Moon';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <>
      <link
        rel="stylesheet"
        type="text/css"
        href={isDarkMode ? 'DarkTheme.css' : 'LightTheme.css'}
      />
      <div class="app">
        <div className="hero-header">
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            class="dark-mode-switcher"
          >
            {isDarkMode ? <Sun /> : <Moon />}
          </button>
          <div class="blob"></div>
          <h1>Hello Web Zürich</h1>
          <div class="wave-container">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <defs>
                <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" class="linear-gradient-0" />
                  <stop offset="100%" class="linear-gradient-1" />
                </linearGradient>
              </defs>
              <path
                fill="url(#grad1)"
                fill-opacity="1"
                d="M0,224L34.3,218.7C68.6,213,137,203,206,186.7C274.3,171,343,149,411,128C480,107,549,85,617,69.3C685.7,53,754,43,823,42.7C891.4,43,960,53,1029,80C1097.1,107,1166,149,1234,154.7C1302.9,160,1371,128,1406,112L1440,96L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
