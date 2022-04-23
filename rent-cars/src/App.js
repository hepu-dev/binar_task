import { Route, Routes } from 'react-router-dom';
import './App.css';
import CarDetail from './CarDetail';
import CarList from './CarList';
import Layout from './Layout';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<CarList/>}/>
          <Route path='detail/:id' element={<CarDetail/>}/>
          <Route path='*' element={<div>Error 404:Page not found</div>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
