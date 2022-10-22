import { Routes, Route } from 'react-router-dom';
import { Fragment } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Classes from './components/Classes/Classes';

function App() {
  return (
    <Fragment>
      <Routes>
        <Route path='/' element={<Navbar/>} />
        <Route path='about' element={<About />} />
        <Route path='contact' element={<Contact />} />
        <Route path='classes' element={<Classes />} />
      </Routes>
    </Fragment>
  );
}

export default App;
