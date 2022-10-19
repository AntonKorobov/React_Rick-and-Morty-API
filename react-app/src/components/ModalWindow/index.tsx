import React from 'react';
import './ModalWindow.scss';

export default function ModalWindow(props: {
  isVisible: boolean;
  className: string;
  children: JSX.Element;
  onChangeModal: () => void;
}) {
  return props.isVisible ? (
    <div className={props.className + ' modal-window'}>
      <div className="modal-window__background" onClick={props.onChangeModal}></div>
      <div className="modal-window__body">
        <button className="modal-window__exit-button exit-button" onClick={props.onChangeModal}>
          <img className="exit-button__img" src="xmark-solid.svg" alt="exit button" />
        </button>
        {props.children}
      </div>
    </div>
  ) : (
    <></>
  );
}
