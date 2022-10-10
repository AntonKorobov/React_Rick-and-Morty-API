// import React, { Component } from 'react';
import React from 'react';

interface CheckboxProps {
  className: string;
  category: string;
  handleChangeCheckbox: (event: { target: { name: string; checked: boolean } }) => void;
  id: string;
  checked: boolean;
}

export default function Checkbox(props: CheckboxProps) {
  return (
    <label className="checkbox-wrapper">
      <input
        type="checkbox"
        checked={props.checked}
        name={props.category}
        className={props.className}
        onChange={props.handleChangeCheckbox}
      />
      <span>{props.category}</span>
    </label>
  );
}
