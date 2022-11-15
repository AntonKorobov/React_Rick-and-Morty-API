import './ButtonLink.scss';
import React, { LinkHTMLAttributes } from 'react';
import { FC, PropsWithChildren } from 'react';

export const ButtonLink: FC<PropsWithChildren<LinkHTMLAttributes<HTMLElement>>> = (props) => {
  const { children, ...rest } = props;
  const className = `link-button ${props.className || ''}`;
  return (
    <a {...rest} className={className}>
      {children}
    </a>
  );
};
