import './App.css';
import PersonAdd from './components/PersonAdd';
import PersonRemove from './components/PersonRemove';
import MethodPost from './components/MethodPost';

function App() {
  return (
    <div className="App">
      <div>
        <p>Api 1</p>
           <PersonAdd/>
           <PersonRemove/>
      </div>
      <p>Api 2</p>
          <MethodPost/>
    </div>
  );
}

export default App;
