import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
<<<<<<< HEAD
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AboutUS from 'components/AboutUs';
import Forms from 'components/Forms';
import Page404 from 'components/Page404';
=======
import { BrowserRouter } from 'react-router-dom';
>>>>>>> react_components
import App from 'App';

const container = document.getElementById('root') as HTMLElement;
const root = ReactDOM.createRoot(container);
root.render(
  <BrowserRouter>
<<<<<<< HEAD
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/main_page" element={<MainPage />}></Route>
        <Route path="/about_us" element={<AboutUS />}></Route>
        <Route path="/forms" element={<Forms />}></Route>
        <Route path="*" element={<Page404 />} />
      </Route>
    </Routes>
=======
    <App />
>>>>>>> react_components
  </BrowserRouter>
);
