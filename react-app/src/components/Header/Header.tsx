import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.scss';

export function Header(props: { currentPage?: string } = { currentPage: '' }) {
  return (
    <header className="header">
      <nav className="header__nav nav">
        <ul className="nav__list">
          <>
            {[
              { title: 'Main page', to: '/' },
              // { title: 'Form', to: '/form' },
              // { title: 'About me', to: '/about_us' },
            ].map((element) => {
              return (
                <li className="nav__item" key={element.title}>
                  <NavLink end className="nav__link link" to={element.to}>
                    {element.title}
                  </NavLink>
                </li>
              );
            })}
            {props.currentPage && (
              <li className="nav__item">
                <NavLink className="nav__link link active" to={''}>
                  {props.currentPage}
                </NavLink>
              </li>
            )}
          </>
        </ul>
      </nav>
    </header>
  );
}
