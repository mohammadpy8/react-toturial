import React from 'react';
import './App.css';
import Fliters from './components/Fliters';
import MenuBar from './components/MenuBar';
import Pagination from './components/Pagination';
import ShowContacts from './components/ShowContacts';
import Header from './components/Header';

function App() {
  return (
    <div>
      <Header />
      <Fliters />
      <MenuBar />
      <ShowContacts />
      <Pagination />
    </div>
  );
}

export default App;
