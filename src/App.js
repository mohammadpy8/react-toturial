import React from 'react';
import './App.css';
import Fliters from './components/Fliters';
import MenuBar from './components/MenuBar';
import Pagination from './components/Pagination';
import ShowContacts from './components/ShowContacts';
import Header from './components/Header';
import Slider from './components/slider/Slider';

function App() {
  return (
    <>
      <Header />
      <Fliters />
      <MenuBar />
      <ShowContacts />
      <Pagination />
      <Slider />
    </>
  );
}

export default App;
