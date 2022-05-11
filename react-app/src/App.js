import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom'

import './pages/styles/home.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages';
import Seguranca from './pages/Seguranca';
import Testes from './pages/Testes';
import Sobre from './pages/Sobre';
import Vulnerabilidades from './pages/Vulnerabilidades';
function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/seguranca" element={<Seguranca/>} />
          <Route path="/testes" element={<Testes />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/vulnerabilidades" element={<Vulnerabilidades />} />
      </Routes>


      <Footer />
    </Router>
  );
}

export default App;
