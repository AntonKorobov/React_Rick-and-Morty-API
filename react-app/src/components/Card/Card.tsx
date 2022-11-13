import { APISingleCharacterInterface } from 'data/API_Interface';
import React from 'react';
import type { FC } from 'react';
import './Card.scss';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setCurrentCharacterIndex } from '../../store';

interface CardProps {
  info: APISingleCharacterInterface;
}

export const Card: FC<CardProps> = (props) => {
  const dispatch = useDispatch();

  return (
    <li className="card" data-testid="card">
      <Link
        className={'card__link link'}
        to={`/character/${props.info.id}`}
        onClick={() => dispatch(setCurrentCharacterIndex(props.info.id))}
      >
        <img className="card__img" src={props.info.image} alt={'image of ' + props.info.name} />
      </Link>
      <h2 className="card__name">{props.info.name}</h2>
    </li>
  );
};
