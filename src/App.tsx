import React from 'react';
import {Routes, Route} from "react-router-dom"
import HomePage from './pages/HomePage';
import FavoritesPage from './pages/FavoritesPage';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/favorites' element={<FavoritesPage/>}/>
    </Routes>
    </>
  );
}

export default App;
