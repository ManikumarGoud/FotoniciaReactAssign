import React from 'react';
import Header from './components/Header';
import './styles.css';
import Category from './components/Category';
import Banner1 from "./components/Banner1";
import Banner2 from './components/Banner2';
import Banner3 from './components/Banner3';
import Banner4 from './components/Banner4';
import Banner5 from './components/Banner5';
import Banner6 from './components/Banner6';

const App = () => {

  return (
    <div className="App">
      <Header/>
      <Category/>
      <Banner1/>
      <Banner2/>
      <Banner3/>
      <Banner4/>
      <Banner5/>
      <Banner6/>
      <h3>Powered By Fotonicia</h3>
      <h2><b>#Vocal for Local Startup</b></h2>
    </div>
  );
}


export default App;
