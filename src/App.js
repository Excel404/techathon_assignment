import React from 'react'
import { Form } from 'react-bootstrap';
import './App.css';
import Homepage from './components/Homepage/Homepage';
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </div>

    
  );
}

export default App;
