import { Route, Routes } from 'react-router-dom';
import './App.css';
import CarDetail from './CarDetail';
import CarList from './CarList';
import Layout from './Layout';
import Register from './Register';
import Login from './Login';
import Profile from './Pages/Profile';
import ProtectedRoute from './common/ProtectedRoute';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<CarList/>}/>
          <Route path='/Login' element={<Login/>}/>
          <Route path='/Register' element={<Register/>}/>
          <Route path='detail/:id' element={<CarDetail/>}/>
          <Route element={<ProtectedRoute/>}>
            <Route path='/profile' element={<Profile/>}/>  
            </Route>
          <Route path='*' element={<div>Error 404:Page not found</div>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
