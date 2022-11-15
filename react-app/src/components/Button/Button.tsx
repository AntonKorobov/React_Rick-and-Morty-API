import './Button.scss';
import React, { ButtonHTMLAttributes } from 'react';
import { FC, PropsWithChildren } from 'react';

export const Button: FC<PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>> = (props) => {
  const { children, ...rest } = props;
  const className = `button ${props.className || ''}`;
  return (
    <button {...rest} className={className}>
      {children}
    </button>
  );
};
