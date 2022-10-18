import { APISingleCharacterInterface } from 'data/APIInterface';
import React from 'react';
import './Card.scss';

export default function card(props: { info: APISingleCharacterInterface }) {
  return (
    <a href="#" className="card link">
      <h2 className="card__title">{props.info.name}</h2>
      <img className="card__img" src={props.info.image} alt="" />
      <div className="card__description">
        <p className="card__author">
          <b>status:</b> {props.info.status}
        </p>
        <p className="card__price">
          <b>species:</b> {props.info.species}
        </p>
        <p className="card__cover-type">
          <b>type:</b> {props.info.type}
        </p>
        <p className="card__language">
          <b>gender:</b> {props.info.gender}
        </p>
      </div>
    </a>
  );
}
