import React from 'react';
import './PageSelector.scss';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, setCurrentPage } from '../../store';

export function PageSelector() {
  const currentPage = useSelector((state: RootState) => state.currentPage);
  const maxPageNumber = useSelector((state: RootState) => state.maxPageNumber);
  const dispatch = useDispatch();

  return (
    <div className="page-selector">
      <label className="current-page-input input-element">
        Current page:
        <select
          name="current-page"
          className="input-element__select current-page-input__select"
          value={currentPage}
          onChange={(event: { target: { name: string; value: string } }) =>
            dispatch(setCurrentPage(Number(event.target.value)))
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
    </div>
  );
}
