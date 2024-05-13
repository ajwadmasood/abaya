import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Products from './components/Products/Products';
import Men from './Pages/Men';
import Women from './Pages/Women';
import All from './Pages/All';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
        <Route path='/' element={<Products/>}/>
        <Route path='/all' element={<All/>}/>
        <Route path='/men' element={<Men/>}/>
        <Route path='/women' element={<Women/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
