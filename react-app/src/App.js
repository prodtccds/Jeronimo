import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom'

import './pages/styles/home.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages';
import Hacker from './pages/Hacker';
import Tutoriais from './pages/Tutoriais';
import Blog from './pages/Blog';
import Sobre from './pages/Sobre'
import PilaresPage from './pages/components/BlogPages/PilaresPage';


function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/blog" element={<Blog/>} />
          <Route path="/hacker" element={<Hacker/>} />
          <Route path="/tutoriais" element={<Tutoriais/>} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/pilares" element={<PilaresPage />} />
      </Routes>


      <Footer />
    </Router>
  );
}

export default App;
