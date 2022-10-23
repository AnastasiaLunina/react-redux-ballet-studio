import { Routes, Route } from 'react-router-dom';
import { Fragment } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Classes from './components/Classes/Classes';
import Shop from './components/Shop/Shop/Shop';

function App() {
  return (
    <Fragment>
      <Routes>
        <Route path='/' element={<Navbar/>} />
        <Route path='about' element={<About />} />
        <Route path='contact' element={<Contact />} />
        <Route path='classes' element={<Classes />} />
        <Route path='shop' element={<Shop />} />
      </Routes>
    </Fragment>
  );
}

export default App;
