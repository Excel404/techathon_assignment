import React from 'react'
import { Form } from 'react-bootstrap';
import './App.css';
import Homepage from './components/Homepage/Homepage';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
        <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    
    </BrowserRouter>
    

    
  );
}

export default App;
