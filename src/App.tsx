import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/navbar';
import './styles/global.scss'
import Home from './components/home/Home';
import Footer from './components/navbar/Footer';
import About from './components/about/About';

function App() {
  const [pizzaSearch, setPizzaSearch] = useState<string>('');
  return (
    <>
      <BrowserRouter>
        <Navbar setPizzaSearch={setPizzaSearch} />
        <Routes>
          <Route path="/" element={<Home pizzaSearch={pizzaSearch} />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
