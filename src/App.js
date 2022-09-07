import React,{ useState, useEffect } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';

//HEADER
import Header from './components/Header';
import Menu from './components/Menu';
//PAGES
import Home from './Pages/Home';
import Projects from './Pages/HeroProjects';
import Contact from './Pages/Contact';
import NotFound from './Pages/NotFound';


function App() {

  const [menuState, setMenuState] = useState(false)

  useEffect(() => {
    menuState
      ? document.body.classList.add("body-lock")
      : document.body.classList.remove("body-lock")
  }, [menuState])

  return (
    <>
      <Header setMenuState={setMenuState} />
      <Menu menuState={menuState} setMenuState={setMenuState} />
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
