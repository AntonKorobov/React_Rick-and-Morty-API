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

  onChangeModal = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation(); // doesn't work
    this.setState({ isModalVisible: !this.state.isModalVisible });
  };

  render() {
    return (
      <div className="card" onClick={this.onChangeModal}>
        <h2 className="card__name">{this.props.info.name}</h2>
        <button className="card__modal-button button">
          <img className="card__img" src={this.props.info.image} alt="" />
        </button>
        {/* <div className="card__description"></div> */}
        <ModalWindow
          isVisible={this.state.isModalVisible}
          className="card__modal"
          onChangeModal={this.onChangeModal}
        >
          <div className="modal-window__information">
            <h2 className="modal-window__name">{this.props.info.name}</h2>
            <img className="modal-window__img" src={this.props.info.image} alt="" />
            <ul className="modal-window__description">
              <li className="modal-window__status">
                <b>status:</b> {this.props.info.status}
              </li>
              <li className="modal-window__species">
                <b>species:</b> {this.props.info.species}
              </li>
              <li className="modal-window__type">
                <b>type:</b> {this.props.info.type}
              </li>
              <li className="modal-window__gender">
                <b>gender:</b> {this.props.info.gender}
              </li>
            </ul>
          </div>
        </ModalWindow>
      </div>
    );
  }
}
