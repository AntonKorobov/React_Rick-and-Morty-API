import React from 'react';
import './Pagination.scss';

interface Props {
  currentPage: number;
  maxPageNumber: number;
  nextPage: () => void;
  prevPage: () => void;
}

export function Pagination(props: Props) {
  return (
    <div className="pagination">
      <button className="pagination__button" onClick={props.prevPage}>
        PREV
      </button>
      <p className="pagination__page-number">
        {props.currentPage}/{props.maxPageNumber}
      </p>
      <button className="pagination__button" onClick={props.nextPage}>
        NEXT
      </button>
    </div>
  );
}
