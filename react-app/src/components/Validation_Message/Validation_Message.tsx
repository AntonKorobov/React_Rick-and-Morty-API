import React from 'react';
import './Validation_Message.scss';

interface ValidationMessageProps {
  className: string;
  message: string;
  isPositive?: boolean;
}

export function ValidationMessage(
  props: ValidationMessageProps = { className: '', message: '', isPositive: false }
) {
  return (
    <div
      className={
        props.className +
        '__validation-message' +
        ' validation-message ' +
        (props.isPositive ? 'validation-message_positive' : 'validation-message_negative')
      }
      data-testid="validation-message"
    >
      {props.message}
    </div>
  );
}
