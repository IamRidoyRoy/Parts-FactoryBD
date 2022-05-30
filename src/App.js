import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddReview from './components/Pages/Dashboard/AddReview';
import Dashboard from './components/Pages/Dashboard/Dashboard';
import MyOrders from './components/Pages/Dashboard/MyOrders';
import MyProfile from './components/Pages/Dashboard/MyProfile';
import Home from './components/Pages/Home/Home';
import Login from './components/Pages/Login/Login';
import SignUp from './components/Pages/Login/SignUp';
import Purchase from './components/Pages/Purchase/Purchase';
import Footer from './components/Pages/Shared/Footer/Footer';
import Navbar from './components/Pages/Shared/Header/Navbar';
import RequireAuth from './components/RequireAuth/RequireAuth';

function App() {
  return (
    <div >
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/purchase' element={
          <RequireAuth>
            <Purchase></Purchase>
          </RequireAuth>
        }></Route>
        <Route path='/dashboard' element={
          <RequireAuth>
            <Dashboard></Dashboard>
          </RequireAuth>
        }>
          <Route index element={<MyOrders></MyOrders>}></Route>
          <Route path='review' element={<AddReview></AddReview>}></Route>
          <Route path='myprofile' element={<MyProfile></MyProfile>}></Route>
        </Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/product/:productId' element={
          <RequireAuth>
            <Purchase></Purchase>
          </RequireAuth>
        }></Route>


      </Routes>
      <Footer></Footer>
    </div >
  );
}

export default App;
