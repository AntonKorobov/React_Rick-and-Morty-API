import ModalWindow from 'components/ModalWindow';
import { APISingleCharacterInterface } from 'data/APIInterface';
import React, { Component } from 'react';
import './Card.scss';

interface Props {
  info: APISingleCharacterInterface;
}

interface State {
  isModalVisible: boolean;
}

export default class Card extends Component<Props, State> {
  state = {
    isModalVisible: false,
  };

  onChangeModal = () => {
    this.setState({ isModalVisible: !this.state.isModalVisible });
  };

  render() {
    return (
      <a href="#" className="card link" onClick={this.onChangeModal}>
        <h2 className="card__title">{this.props.info.name}</h2>
        <img className="card__img" src={this.props.info.image} alt="" />
        <div className="card__description"></div>
        <ModalWindow isVisible={this.state.isModalVisible} className="card__modal">
          <div className="card__description">
            <h2 className="card__title">{this.props.info.name}</h2>
            <img className="card__img" src={this.props.info.image} alt="" />
            <p className="card__author">
              <b>status:</b> {this.props.info.status}
            </p>
            <p className="card__price">
              <b>species:</b> {this.props.info.species}
            </p>
            <p className="card__cover-type">
              <b>type:</b> {this.props.info.type}
            </p>
            <p className="card__language">
              <b>gender:</b> {this.props.info.gender}
            </p>
          </div>
        </ModalWindow>
      </a>
    );
  }
}
