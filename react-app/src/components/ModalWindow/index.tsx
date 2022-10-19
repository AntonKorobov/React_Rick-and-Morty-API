import React from 'react';
import './ModalWindow.scss';

export default function ModalWindow(props: {
  isVisible: boolean;
  className: string;
  children: JSX.Element;
}) {
  return props.isVisible ? (
    <div className={props.className + ' modal-window'}>
      <div className="modal-window__background"></div>
      <div className="modal-window__body">{props.children}</div>
    </div>
  ) : (
    <span></span>
  );
}
