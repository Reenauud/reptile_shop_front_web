import './App.css';
import { Routes, Route } from 'react-router-dom';
import Equipments from './pages/Equipments/Equipments';
import Food from './pages/Food/Food';
import Home from './pages/Home/Home';
import Reptiles from './pages/Reptiles/Reptiles';
import Header from './components/Header/Header';
import Advice from './pages/Advice/Advice';
import Footer from './components/Footer/Footer';
import Register from './components/Auth/Register/Register';
import Login from './components/Auth/Login/Login';
import Order from './pages/Order/Order';
import Payment from './pages/Payment/Payment';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/auth/register' element={<Register />} />  
        <Route path='/auth/login' element={<Login />} />
        <Route path='/' element={<Home />} />
        <Route path='/reptiles' element={<Reptiles />} />
        <Route path='/food' element={<Food />} />
        <Route path='/equipments' element={<Equipments />} />
        <Route path='/advice' element={<Advice />} />
        <Route path='/final-order' element={<Order />} />
        <Route path='/checkout' element={<Payment />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
