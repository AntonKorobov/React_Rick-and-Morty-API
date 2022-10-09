import React from 'react';
import { CardInterface } from '../date/CardInterface';
import './Card.scss';

export default function card(props: { info: CardInterface }) {
  return (
    <a href="#" className="card link" data-testid="card">
      <h2 className="card__title">{props.info.title}</h2>
      <img className="card__img" src={props.info.img} alt="" />
      <div className="card__description">
        <p className="card__author">
          <b>Author:</b> {props.info.author}
        </p>
        <p className="card__price">
          <b>Price:</b> {props.info.price}
        </p>
        <p className="card__cover-type">
          <b>Cover type:</b> {props.info.coverType}
        </p>
        <p className="card__language">
          <b>Language:</b> {props.info.language}
        </p>
        <p className="card__written">
          <b>Written:</b> {props.info.written ? 'Yes' : 'No'}
        </p>
      </div>
    </a>
  );
}
