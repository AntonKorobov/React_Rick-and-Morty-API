import { useGlobalStateContext } from 'context/GlobalStateContext';
import React from 'react';
import './PageSelector.scss';

export function PageSelector() {
  const { currentPage, setCurrentPage } = useGlobalStateContext();
  const { maxPageNumber } = useGlobalStateContext();
  const { cardsOnPage, setCardsOnPage } = useGlobalStateContext();

  return (
    <div className="page-selector">
      <label className="current-page-input input-element">
        Current page:
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
      <label className="current-page-input input-element">
        Cards on page:
        <select
          name="cards-on-page"
          className="input-element__select current-page-input__select"
          value={cardsOnPage}
          onChange={(event: { target: { name: string; value: string } }) =>
            setCardsOnPage(Number(event.target.value))
          }
        >
          <option className="input-element__option" value={20}>
            {20}
          </option>
          <option className="input-element__option" value={10}>
            {10}
          </option>
          <option className="input-element__option" value={5}>
            {5}
          </option>
          <option className="input-element__option" value={2}>
            {2}
          </option>
          <option className="input-element__option" value={1}>
            {1}
          </option>
        </select>
      </label>
    </div>
  );
}
