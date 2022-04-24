import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom'

import Home from './pages';
import Seguranca from './pages/Seguranca';
import Testes from './pages/Testes';
import Sobre from './pages/Sobre';
import Vulnerabilidades from './pages/Vulnerabiliades';

function App() {
  return (
    <Router>
      <NavBar />

      <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/seguranca" element={<Seguranca/>} />
          <Route path="/testes" element={<Testes />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/vulnerabilidades" element={<Vulnerabilidades />} />
      </Routes>
    </Router>
  );
}

export default App;
