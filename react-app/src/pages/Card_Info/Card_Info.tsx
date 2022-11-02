import { useGlobalStateContext } from 'context/GlobalStateContext';
import React from 'react';

export function CardInfo() {
  const { characters } = useGlobalStateContext();
  const { currentCharacterIndex } = useGlobalStateContext();

  return (
    <section className="card_info">
      <h1 className="card_info__h1 h1">Card information</h1>
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
    </section>
  );
}
