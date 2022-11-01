import React, { useState } from 'react';
import './App.scss';
import { Header } from 'components/Header/Header';
import { AboutUs } from 'pages/About_Us/About_Us';
import { Page404 } from 'pages/Page_404/Page_404';
import { Routes, Route } from 'react-router-dom';
import { MainPage } from 'pages/Main_Page/Main_Page';
import { Forms } from 'pages/Form/Forms';
import { GlobalStateContext, GlobalStateDefaultValues } from 'context/GlobalStateContext';
import { APISingleCharacterInterface } from 'data/API_Interface';

export function App() {
  const [searchBarInput, setSearchBarInput] = useState('');
  const [cards, setCards] = useState<APISingleCharacterInterface[]>([]);

  return (
    <div className="app">
      <Header />
      <div className="container">
        <GlobalStateContext.Provider
          value={{
            ...GlobalStateDefaultValues,
            searchBarInput,
            setSearchBarInput,
            cards,
            setCards,
          }}
        >
          <Routes>
            <Route path="/" element={<MainPage />}></Route>
            <Route path="/form" element={<Forms />}></Route>
            <Route path="/about_us" element={<AboutUs />}></Route>
            <Route path="*" element={<Page404 />} />
          </Routes>
        </GlobalStateContext.Provider>
      </div>
    </div>
  );
}
