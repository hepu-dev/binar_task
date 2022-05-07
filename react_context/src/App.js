import './App.css';
import { ThemeContext, themes } from './Context';
import { useState } from 'react';
import HelloWorld from './HelloWorld';


function App() {
  const [selectedTheme, setSelectedTheme] = useState(themes.dark);
  return (
    <div className="App">
      <ThemeContext.Provider value={selectedTheme}/>
        <nav>
          <button>switch theme</button>
        </nav>
        <HelloWorld/>
      <ThemeContext.provider/>
    </div>
  );
}

export default App;
