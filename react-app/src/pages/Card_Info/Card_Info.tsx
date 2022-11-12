import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './CardInfo.scss';
import { RootState, setCurrentPath } from '../../store';
import { useSelector, useDispatch } from 'react-redux';

export function CardInfo() {
  const dispatch = useDispatch();
  const currentCharacterIndex = useSelector((state: RootState) => state.currentCharacterIndex);
  const characters = useSelector((state: RootState) => state.characters);

  const navigate = useNavigate();

  useEffect(() => {
    dispatch(setCurrentPath('Card information'));
    return () => {
      dispatch(setCurrentPath(''));
    };
  }, []);

  useEffect(() => {
    if (!characters[currentCharacterIndex]) navigate('/main_page'); //!!! could be useless
  }, [characters, currentCharacterIndex, navigate]);

  return (
    <div className="character-info">
      <h2 className="character-info__name">{characters[currentCharacterIndex].name}</h2>
      <img
        className="character-info__img"
        src={characters[currentCharacterIndex].image}
        alt="character picture"
      />
      <ul className="character-info__description">
        <li className="character-info__status">
          <b>status:</b> {characters[currentCharacterIndex].status}
        </li>
        <li className="character-info__species">
          <b>species:</b> {characters[currentCharacterIndex].species}
        </li>
        <li className="character-info__type">
          <b>type:</b> {characters[currentCharacterIndex].type}
        </li>
        <li className="character-info__gender">
          <b>gender:</b> {characters[currentCharacterIndex].gender}
        </li>
      </ul>
      <a href="/" className="go-back-button link">
        Go back
      </a>
    </div>
  );
}
