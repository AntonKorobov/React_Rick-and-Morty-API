import { APISingleCharacterInterface } from 'data/API_Interface';
import React from 'react';
import './Card.scss';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setCurrentCharacterIndex } from '../../store';

interface CardProps {
  info: APISingleCharacterInterface;
}

export function Card(props: CardProps) {
  const dispatch = useDispatch();

  return (
    <div className="card" data-testid="card">
      <h2 className="card__name">{props.info.name}</h2>
      <Link
        className={'nav__link link'}
        to="/card_info"
        onClick={() => dispatch(setCurrentCharacterIndex(props.info.id))}
      >
        <img className="card__img" src={props.info.image} alt="show more button" />
      </Link>
    </div>
  );
}
