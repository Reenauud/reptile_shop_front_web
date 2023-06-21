import './App.css';
import { Routes, Route } from 'react-router-dom';
import Equipments from './pages/Equipments/Equipments';
import Food from './pages/Food/Food';
import Home from './pages/Home/Home';
import Reptiles from './pages/Reptiles/Reptiles';
import Header from './components/Header/Header';
import Advice from './pages/Advice/Advice';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/reptiles' element={<Reptiles />}/>
        <Route path='/food' element={<Food />}/>
        <Route path='/equipments' element={<Equipments />}/>
        <Route path='/advice' element={<Advice />}/>
      </Routes>
      
    </div>
  );
}

export default App;
