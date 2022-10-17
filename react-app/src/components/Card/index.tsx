import React from 'react';
import { CardInterface } from '../../data/CardInterface';
import './Card.scss';

export default function card(props: { info: CardInterface }) {
  return (
    <a href="#" className="card link" data-testid="card">
      <h2 className="card_title">{props.info.title}</h2>
      <img className="card_img" src={props.info.img} alt="" />
      <div className="card_description">
        <p className="card_author">
          <b>Author:</b> {props.info.author}
        </p>
        <p className="card_price">
          <b>Price:</b> {props.info.price}
        </p>
        <p className="card_cover-type">
          <b>Cover type:</b> {props.info.coverType}
        </p>
        <p className="card_language">
          <b>Language:</b> {props.info.language}
        </p>
      </div>
    </a>
  );
}
