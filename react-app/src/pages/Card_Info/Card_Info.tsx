import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './CardInfo.scss';
import { RootState } from '../../store';
import { useSelector } from 'react-redux';
import { routeParams } from 'data/RouterType';
import { APISingleCharacterInterface } from 'data/API_Interface';
import { Header } from 'components/Header/Header';

const findCharacterIndex = (array: APISingleCharacterInterface[], id: number): number => {
  let characterIndex = 0;
  array.map((item, index) => {
    if (item.id === id) characterIndex = index;
  });
  return characterIndex;
};

export function CardInfo() {
  const routeParams = useParams<routeParams>();
  const characterId = Number(routeParams.id) || 0;
  const characters = useSelector((state: RootState) => state.characters);
  const navigate = useNavigate();

  const characterIndex = findCharacterIndex(characters, characterId);

  useEffect(() => {
    if (!characters[characterIndex]) navigate('/');
  }, []);

  return !characters.length ? (
    <></>
  ) : (
    <>
      <Header currentPage="Card info" />
      <main className="main-container">
        <div className="character-info">
          <h1 className="character-info__name h1">{characters[characterIndex].name}</h1>
          <img
            className="character-info__img"
            src={characters[characterIndex].image}
            alt="character picture"
          />
          <ul className="character-info__description">
            <li className="character-info__status">
              <b>status:</b> {characters[characterIndex].status}
            </li>
            <li className="character-info__species">
              <b>species:</b> {characters[characterIndex].species}
            </li>
            <li className="character-info__type">
              <b>type:</b> {characters[characterIndex].type}
            </li>
            <li className="character-info__gender">
              <b>gender:</b> {characters[characterIndex].gender}
            </li>
          </ul>
          <a href="/" className="link">
            <button className="go-back-button">Go back</button>
          </a>
        </div>
      </main>
    </>
  );
}
