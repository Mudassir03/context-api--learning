import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Cartpage from './components/Cart';
// import Cart from './components/Cart';
import Header from './components/Header';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cartpage/>}/>
      </Routes>
      </BrowserRouter>

     
    </div>
  );
}

export default App;
