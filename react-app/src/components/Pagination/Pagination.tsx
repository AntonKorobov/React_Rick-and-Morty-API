import { Button } from 'components/Button/Button';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { AppDispatch, RootState, setCurrentPage, setMaxPageNumber } from 'store';
import './Pagination.scss';

export function Pagination() {
  const dispatch = useDispatch<AppDispatch>();
  const currentPage = useSelector((state: RootState) => state.currentPage);
  const maxPageNumber = useSelector((state: RootState) => state.maxPageNumber);
  const isLoadingError = useSelector((state: RootState) => state.isLoadingError);

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
