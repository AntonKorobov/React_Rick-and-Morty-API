import { useGlobalStateContext } from 'context/GlobalStateContext';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './CardInfo.scss';

export function CardInfo() {
  const { characters } = useGlobalStateContext();
  const { currentCharacterIndex } = useGlobalStateContext();
  const { setCurrentPath } = useGlobalStateContext();
  const navigate = useNavigate();

  useEffect(() => {
    setCurrentPath('Card information');
    if (!characters[currentCharacterIndex]) navigate('/main_page'); //!!! could be useless
  }, [characters, currentCharacterIndex, navigate]);

  return (
    <section className="card_info">
      <div className="modal-window__information">
        <h2 className="modal-window__name">{characters[currentCharacterIndex].name}</h2>
        <img
          className="modal-window__img"
          src={characters[currentCharacterIndex].image}
          alt="character picture"
        />
        <ul className="modal-window__description">
          <li className="modal-window__status">
            <b>status:</b> {characters[currentCharacterIndex].status}
          </li>
          <li className="modal-window__species">
            <b>species:</b> {characters[currentCharacterIndex].species}
          </li>
          <li className="modal-window__type">
            <b>type:</b> {characters[currentCharacterIndex].type}
          </li>
          <li className="modal-window__gender">
            <b>gender:</b> {characters[currentCharacterIndex].gender}
          </li>
        </ul>
      </div>
      <button className="go-back-button button" onClick={() => navigate(-1)}>
        Go back
      </button>
    </section>
  );
}
