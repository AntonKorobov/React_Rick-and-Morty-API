import React from 'react';
import './ModalWindow.scss';

export default function ModalWindow(props: { className: string; message: string }) {
  return <div className={props.className + ' modal-window'}>{props.message}</div>;
}
