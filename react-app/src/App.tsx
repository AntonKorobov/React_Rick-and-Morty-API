import React from 'react';
import './App.scss';
import Header from 'components/Header';
import AboutUs from 'components/AboutUs';
import Page404 from 'components/Page404';
import { Routes, Route } from 'react-router-dom';
import MainPage from 'components/MainPage';

function App() {
  return (
    <div className="app">
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />}></Route>
          <Route path="/about_us" element={<AboutUs />}></Route>
          <Route path="*" element={<Page404 />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
