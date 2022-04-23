import './App.css';
import {Routes, Route} from 'react-router-dom'
import Home from './Home';
import About from './About';
import { Link } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <ol>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ol>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/About" element={<About/>}/>
      </Routes>
    </div>
    
  );
}

export default App;
