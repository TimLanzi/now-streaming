import React from 'react'
import { cx } from 'class-variance-authority';
import { DOTS, type PaginationOptions, usePagination } from '../hooks/usePagination'
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';

type PaginationProps = PaginationOptions & {
  onPageChange: (page: number) => void;
}

export const Pagination: React.FC<PaginationProps> = ({
  onPageChange,
  currentPage,
  ...options
}) => {
  const paginationRange = usePagination({
    currentPage,
    ...options,
  });

  // If there are less than 2 times in pagination range we shall not render the component
  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  function onNext() {
    onPageChange(currentPage + 1);
  }

  function onPrevious() {
    onPageChange(currentPage - 1);
  }

  const lastPage = paginationRange[paginationRange.length - 1];

  return (
    <div>
      <ul className='flex space-x-1'>
        <li>
          <button
            type="button"
            disabled={currentPage === 1}
            className={cx(
              'text-lg font-bold text-indigo-700 p-1',
              'disabled:opacity-40'
            )}
            onClick={onPrevious}
          >
            <ChevronLeftIcon size={25} />
          </button>
        </li>

        { paginationRange.map((pageNumber, idx) => {
          if (pageNumber === DOTS) {
            return (
              <li key={idx} className='text-indigo-700 px-3 py-1'>&#8230;</li>
            );
          }

          return (
            <li key={idx}>
              <button
                type='button'
                className={cx(
                  'text-lg font-bold px-3 py-1 border-2 rounded',
                  'transition-colors hover:border-indigo-800 hover:text-indigo-800',
                  currentPage === pageNumber ? 'border-indigo-700' : 'border-white',
                )}
                onClick={() => onPageChange(pageNumber as number)}
              >
                {pageNumber}
              </button>
            </li>
          );
        })}
        
        <li>
          <button
            type="button"
            disabled={currentPage === lastPage}
            className={cx(
              'text-lg font-bold text-indigo-700 p-1',
              'disabled:opacity-40'
            )}
            onClick={onNext}
          >
            <ChevronRightIcon size={25} />
          </button>
        </li>
      </ul>
    </div>
  )
}
