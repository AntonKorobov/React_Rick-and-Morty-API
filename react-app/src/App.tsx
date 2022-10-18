import React from 'react';
import './App.scss';
import Header from 'components/Header';
import AboutUs from 'pages/AboutUs';
import Page404 from 'pages/Page404';
import { Routes, Route } from 'react-router-dom';
import MainPage from 'pages/MainPage';
import Form from 'pages/Form';

function App() {
  return (
    <div className="app">
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />}></Route>
          <Route path="/form" element={<Form />}></Route>
          <Route path="/about_us" element={<AboutUs />}></Route>
          <Route path="*" element={<Page404 />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
