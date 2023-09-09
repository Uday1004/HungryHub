import './App.css';

import Carts from './components/Cart/Carts';
import { useSelector } from 'react-redux';
import Navbars from './components/Navbar/Navbars';
import Footer from './components/Footer/Footer';
import Contact from './components/Contact/Contact';
import { Routes, Route } from "react-router-dom";
import Home from './components/Home';
import About from './components/About/About';



function App() {
  const showCart = useSelector((state) => state.cartUi.cartIsVisible);
  return (
    <>
      <Navbars />
     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={showCart && <Carts />} />
        <Route path="/about" element={<About/>} />
      </Routes>

      <Footer />

      {/* Define the route for the Contact component */}
    </>
  );
}

export default App;
