import './App.css';
import Hello from './component/hello/Hello';
import HelloClassComponent from './component/HelloComponent/HelloClassComponent';
import input from './Input'

function App() {
  return (
    <div className="App">
      
      <div className="container">
      <navbar>
        <ul className='navbar'>
          <li>
            Home
          </li>
          <li>
            Feature
          </li>
          <li>
            Portofolio
          </li>
          <li>
            Layanan
          </li>
        </ul>
      </navbar>
      </div>
      <Hello message="hello world" name="heru" class="frontend"/>
      <HelloClassComponent message="nama"/>
    </div>
  );
}

export default App;
