import React from 'react';
import './Pagination.scss';

interface Props {
  currentPage: number;
  nextPage: () => void;
  prevPage: () => void;
}

export default function index(props: Props) {
  return (
    <div className="pagination">
      <button
        className="pagination__button pagination__button-left-button"
        onClick={props.prevPage}
      >
        PREV
      </button>
      <p className="pagination__page-number">{props.currentPage}</p>
      <button
        className="pagination__button pagination__button-right-button"
        onClick={props.nextPage}
      >
        NEXT
      </button>
    </div>
  );
}
