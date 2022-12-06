import { Button } from 'components/Button/Button';
import { useGlobalStateSelector } from 'hooks/useGlobalStateSelector';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { AppDispatch, setCurrentPage, setMaxPageNumber } from 'store';
import './Pagination.scss';

export function Pagination() {
  const dispatch = useDispatch<AppDispatch>();
  const { currentPage, maxPageNumber, isLoadingError } = useGlobalStateSelector();

  const [searchParams, setSearchParams] = useSearchParams();

  const nextPage = () => {
    if (currentPage < maxPageNumber) {
      dispatch(setCurrentPage(currentPage + 1));
      searchParams.set('page', (currentPage + 1).toString());
      setSearchParams(searchParams);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      dispatch(setCurrentPage(currentPage - 1));
      searchParams.set('page', (currentPage - 1).toString());
      setSearchParams(searchParams);
    }
  };

  useEffect(() => {
    if (currentPage > maxPageNumber) dispatch(setCurrentPage(1));
    if (isLoadingError) dispatch(setMaxPageNumber(1));
    searchParams.set('page', currentPage.toString());
    setSearchParams(searchParams);
  }, [dispatch, currentPage, maxPageNumber, isLoadingError]);

  return (
    <div className="pagination">
      <Button className="pagination__button" onClick={prevPage}>
        PREV
      </Button>
      <p className="pagination__page-number">
        {currentPage}/{maxPageNumber}
      </p>
      <Button className="pagination__button" onClick={nextPage}>
        NEXT
      </Button>
    </div>
  );
}
