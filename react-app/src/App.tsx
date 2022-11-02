import React from 'react';
import './App.scss';
import { Header } from 'components/Header/Header';
import { AboutUs } from 'pages/About_Us/About_Us';
import { Page404 } from 'pages/Page_404/Page_404';
import { Routes, Route } from 'react-router-dom';
import { MainPage } from 'pages/Main_Page/Main_Page';
import { Forms } from 'pages/Form/Forms';
import { GlobalStateProvider } from 'context/GlobalStateContext';
import { CardInfo } from 'pages/Card_Info/Card_Info';

export function App() {
  return (
    <div className="app">
      <Header />
      <div className="container">
        <GlobalStateProvider>
          <Routes>
            <Route path="/" element={<MainPage />}></Route>
            <Route path="/form" element={<Forms />}></Route>
            <Route path="/about_us" element={<AboutUs />}></Route>
            <Route path="/card_info" element={<CardInfo />}></Route>
            <Route path="*" element={<Page404 />} />
          </Routes>
        </GlobalStateProvider>
      </div>
    </div>
  );
}
