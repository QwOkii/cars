import React from 'react';
import { Header } from './componennts/Header/Header';
import { Main } from './componennts/Main/Main';
import { Catalog } from './componennts/Catalog/Catalog';
import { Calculate } from './componennts/Calculate/Calculate';
import { Contact } from './componennts/Contact/Contact';
import { Guarantees } from './componennts/Guarantees/Guarantees';
import { AboutUS } from './componennts/AboutUS/AboutUS';
import { ItemPage } from './componennts/ItemPage/ItemPage';
import {Route, Routes } from 'react-router-dom'
import { Cooperation } from './componennts/Cooperation/Cooperation';

function App() {
  return (
    <div className='flex flex-col items-center  bg-[#f1f1f6] font-mono '>
      <Header/>
      <main>
        <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path='/calalog' element={<Catalog/>}/>
          <Route path='/calculate' element={<Calculate/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/guarantees' element={<Guarantees/>}/>
          <Route path='/car' element={<ItemPage/>}/>
          <Route path='/about' element={<AboutUS/>}/>
          <Route path='/cooperation' element={<Cooperation/>}/>
        </Routes>
      </main>
    </div>
  );
}

export default App;