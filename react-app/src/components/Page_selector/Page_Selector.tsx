import { useGlobalStateContext } from 'context/GlobalStateContext';
import React from 'react';

export function PageSelector() {
  const { currentPage, setCurrentPage } = useGlobalStateContext();
  const { maxPageNumber } = useGlobalStateContext();

  return (
    <label className="current-page-input input-element">
      Choose page:
      <select
        name="current-page"
        className="input-element__select current-page-input__select"
        value={currentPage}
        onChange={(event: { target: { name: string; value: string } }) =>
          setCurrentPage(Number(event.target.value))
        }
      >
        {[...Array(maxPageNumber).keys()].map((value, index) => {
          return (
            <option className="input-element__option" key={index} value={value + 1}>
              {value + 1}
            </option>
          );
        })}
      </select>
    </label>
  );
}
