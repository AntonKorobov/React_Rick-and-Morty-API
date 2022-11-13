import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState, setCurrentPage, setMaxPageNumber } from 'store';
import './Pagination.scss';

export function Pagination() {
  const dispatch = useDispatch<AppDispatch>();
  const currentPage = useSelector((state: RootState) => state.currentPage);
  const maxPageNumber = useSelector((state: RootState) => state.maxPageNumber);
  const isLoadingError = useSelector((state: RootState) => state.isLoadingError);

  const nextPage = () => {
    if (currentPage < maxPageNumber) {
      dispatch(setCurrentPage(currentPage + 1));
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      dispatch(setCurrentPage(currentPage - 1));
    }
  };

  useEffect(() => {
    if (currentPage > maxPageNumber) dispatch(setCurrentPage(1));
    if (isLoadingError) dispatch(setMaxPageNumber(1));
  }, [dispatch, currentPage, maxPageNumber, isLoadingError]);

  return (
    <div className="pagination">
      <button className="pagination__button" onClick={prevPage}>
        PREV
      </button>
      <p className="pagination__page-number">
        {currentPage}/{maxPageNumber}
      </p>
      <button className="pagination__button" onClick={nextPage}>
        NEXT
      </button>
    </div>
  );
}
