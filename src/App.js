import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import About from './component/Pages/About/About';
import Home from './component/Pages/Home/Home/Home';
import Header from './component/Pages/Shared/Header/Header';
import Footer from './component/Pages/Shared/Footer/Footer';

function App() {
  return (
    <div>
<Header></Header>

      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
