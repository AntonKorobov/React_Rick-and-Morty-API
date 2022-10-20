import React from 'react';

interface CheckboxProps {
  className: string;
  category: string;
  handleChangeCheckbox: (event: { target: { name: string; checked: boolean } }) => void;
  id: string;
  checked: boolean;
}

export function Checkbox(props: CheckboxProps) {
  return (
    <label className={props.className}>
      <input
        type="checkbox"
        checked={props.checked}
        name={props.category}
        className={'checkbox__input'}
        onChange={props.handleChangeCheckbox}
      />
      <span className="checkbox__label">{props.category}</span>
    </label>
  );
}
