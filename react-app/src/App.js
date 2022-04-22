import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom'

import Home from './pages/Home';
import Seguranca from './pages/Seguranca';
import Testes from './pages/Testes';
import Sobre from './pages/Sobre';
import Vulnerabilidades from './pages/Vulnerabiliades';

function App() {
  return (
    <Router>
      <NavBar />

      <Routes>

        <Route path='/' exact>
          <Home />
        </Route>
        <Route path='/testes'>
          <Testes />
        </Route>
        <Route path='/Sobre'>
          <Sobre />
        </Route>
        <Route path='/vulnerabilidades'>
          <Vulnerabilidades />
        </Route>
        <Route path='/seguranca'>
          <Seguranca />
        </Route>

      </Routes>
    </Router>
  );
}

export default App;
