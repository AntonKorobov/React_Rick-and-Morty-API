import { ModalWindow } from 'components/Modal_Window/Modal_Window';
import { APISingleCharacterInterface } from 'data/API_Interface';
import React, { useState } from 'react';
import './Card.scss';

interface CardProps {
  info: APISingleCharacterInterface;
}

export function Card(props: CardProps) {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const onChangeModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  return (
    <div className="card" onClick={onChangeModal}>
      <h2 className="card__name">{props.info.name}</h2>
      <button className="card__modal-button button">
        <img className="card__img" src={props.info.image} alt="" />
      </button>
      <ModalWindow isVisible={isModalVisible} className="card__modal" onChangeModal={onChangeModal}>
        <div className="modal-window__information">
          <h2 className="modal-window__name">{props.info.name}</h2>
          <img className="modal-window__img" src={props.info.image} alt="" />
          <ul className="modal-window__description">
            <li className="modal-window__status">
              <b>status:</b> {props.info.status}
            </li>
            <li className="modal-window__species">
              <b>species:</b> {props.info.species}
            </li>
            <li className="modal-window__type">
              <b>type:</b> {props.info.type}
            </li>
            <li className="modal-window__gender">
              <b>gender:</b> {props.info.gender}
            </li>
          </ul>
        </div>
      </ModalWindow>
    </div>
  );
}
