import React from 'react'
import Navbar from './comps/Navbar/Navbar';
import Home from './comps/Home/Home';
import CardDetails from './comps/CardDetails/CardDetails';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
function App() {

  return ( 
    <div className="App">
        <Navbar />
        <Router>
           <Routes>
              <Route exact path='/' element={<Home />} />
              <Route exact path='/:name' element={<CardDetails  />} />
           </Routes>
        </Router>
    </div>
  );
}

export default App;
