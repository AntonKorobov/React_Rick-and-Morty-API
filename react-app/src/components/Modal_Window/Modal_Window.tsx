import React from 'react';
import './ModalWindow.scss';

interface ModalWindowProps {
  isVisible: boolean;
  className: string;
  children: JSX.Element;
  onChangeModal: () => void;
}

export function ModalWindow(props: ModalWindowProps) {
  return props.isVisible ? (
    <div className={props.className + ' modal-window'} onClick={(event) => event.stopPropagation()}>
      <div className="modal-window__background" onClick={props.onChangeModal}></div>
      <div className="modal-window__body">
        <button
          className="modal-window__exit-button exit-button button"
          onClick={props.onChangeModal}
        >
          <img className="exit-button__img" src="xmark-solid.svg" alt="exit button" />
        </button>
        {props.children}
      </div>
    </div>
  ) : (
    <></>
  );
}
