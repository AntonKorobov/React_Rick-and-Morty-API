import React from 'react';
import './App.scss';
import { AboutUs } from 'pages/About_Us/About_Us';
import { Page404 } from 'pages/Page_404/Page_404';
import { Routes, Route } from 'react-router-dom';
import { MainPage } from 'pages/Main_Page/Main_Page';
import { Forms } from 'pages/Form/Forms';
import { CardInfo } from 'pages/Card_Info/Card_Info';
import { store } from './store';
import { Provider } from 'react-redux';

export function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/form" element={<Forms />}></Route>
        <Route path="/about_us" element={<AboutUs />}></Route>
        <Route path="/character/:id" element={<CardInfo />}></Route>
        <Route path="*" element={<Page404 />} />
      </Routes>
    </Provider>
  );
}
