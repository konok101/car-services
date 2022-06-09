import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import About from './component/Pages/About/About';
import Home from './component/Pages/Home/Home/Home';
import Header from './component/Pages/Shared/Header/Header';
import Footer from './component/Pages/Shared/Footer/Footer';
import Login from './component/Pages/Login/Login'
import ServiceDetails from './component/Pages/ServiceDetails/ServiceDetails';
import Register from './component/Pages/Login/Register/Register';
import NotFond from './component/NotFond/NotFond';

function App() {
  return (
    <div>
<Header></Header>

      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/service/:serviceId' element={<ServiceDetails></ServiceDetails>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='*' element={<NotFond></NotFond>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
