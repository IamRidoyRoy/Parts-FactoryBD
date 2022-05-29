import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Pages/Home/Home';
import Purchase from './components/Pages/Purchase/Purchase';
import Footer from './components/Pages/Shared/Footer/Footer';
import Navbar from './components/Pages/Shared/Header/Navbar';

function App() {
  return (
    <div >
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/purchase' element={<Purchase></Purchase>}></Route>

      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
