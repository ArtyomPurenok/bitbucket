import React from 'react';
import logo from './logo.svg';
import './App.css';

import {Header} from './components/Header'
import {MainPage} from './Pages/MainPage'
import {Footer} from './components/Footer'
import {Authorization} from './Pages/Authorization'
import {PersonalAccountPage} from './Pages/PersonalAccountPage'

function App() {
  return (
    <div className="App">
      <Header/>
      {/* <PersonalAccountPage/> */}
      {/* <Authorization/> */}
      <MainPage/>
      <Footer/>
    </div>
  );
}

export default App;
