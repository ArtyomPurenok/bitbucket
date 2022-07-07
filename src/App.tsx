import React from 'react';
import logo from './logo.svg';
import './App.css';

import {Header} from './components/Header'
import {MainPage} from './Pages/MainPage'
import {Footer} from './components/Footer'

function App() {
  return (
    <div className="App">
      <Header/>
      <MainPage/>
      <Footer/>
    </div>
  );
}

export default App;
