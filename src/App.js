
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import MainPage from './Component1/MainPage';
import NavBlock from './Component1/NavBlock';
import TimeAndDate from './Component1/TimeAndDate';

function App() {

  return (


<div className="container">
<Router>
      <Routes>
      <Route exact path='/' element={<div className='blockNavbar'><NavBlock/><MainPage/></div>} />
      <Route exact path='/timing' element={<div className='blockNavbar'><NavBlock/><TimeAndDate/></div>} />
  </Routes>
  </Router>
</div>







  );
}

export default App;
