import './App.css';
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Home from './Pages/Home';
import Projects from './Pages/HeroProjects';
import Contact from './Pages/Contact';
import NotFound from './Pages/NotFound';

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </>
  );
}

export default App;
