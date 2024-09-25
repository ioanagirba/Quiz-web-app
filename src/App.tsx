import React from 'react';

import './App.css';

import { Navbar } from './components/navbar/Navbar';
import { Math } from './pages/Math';
import { Geography } from './pages/Geography';
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className='container'>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path='math' element={<Math/>}/>
          <Route path='geography' element={<Geography/>}/>
        </Routes>

      </div>
     
    </div>
  );
}

export default App;
