import './Footer.scss';
import React from 'react';

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer__links-wrapper">
        <a href="https://github.com/NewAnton/" className="footer__link social-link">
          <img
            src="assets/iconmonstr-github-2.svg"
            alt="github logo"
            className="social-link__img"
          />
        </a>
        <a href="https://rs.school/" className="footer__link social-link">
          <img
            src="assets/rs_school_js.svg"
            alt="rolling scope school logo"
            className="social-link__img"
          />
        </a>
      </div>
      <p className="footer__copyright">© 2022 Anton Korobov</p>
    </footer>
  );
}
