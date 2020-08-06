import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Charts from './components/Charts/Charts';
import './App.scss';

const App = () => (
  <div className='app'>
    <Navbar/>
    <Charts/>
  </div>
);

export default App;