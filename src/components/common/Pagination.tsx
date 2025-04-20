import React from 'react';
import Button from './Button';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const renderPageNumbers = () => {
    const pageNumbers = [];
    const maxPageButtons = 5;
    
    let startPage = Math.max(1, currentPage - 2);
    let endPage = Math.min(totalPages, startPage + maxPageButtons - 1);
    
    if (endPage - startPage < maxPageButtons - 1) {
      startPage = Math.max(1, endPage - maxPageButtons + 1);
    }
    
    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }
    
    return pageNumbers;
  };

  if (totalPages <= 1) return null;

  return (
    <div className="pagination">
      <Button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        variant="outline"
      >
        Previous
      </Button>
      
      {currentPage > 3 && (
        <>
          <Button onClick={() => onPageChange(1)} variant="outline">
            1
          </Button>
          {currentPage > 4 && <span className="pagination-ellipsis">...</span>}
        </>
      )}
      
      {renderPageNumbers().map((pageNum) => (
        <Button
          key={pageNum}
          onClick={() => onPageChange(pageNum)}
          variant={currentPage === pageNum ? "primary" : "outline"}
        >
          {pageNum}
        </Button>
      ))}
      
      {currentPage < totalPages - 2 && (
        <>
          {currentPage < totalPages - 3 && <span className="pagination-ellipsis">...</span>}
          <Button onClick={() => onPageChange(totalPages)} variant="outline">
            {totalPages}
          </Button>
        </>
      )}
      
      <Button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        variant="outline"
      >
        Next
      </Button>
    </div>
  );
};

export default Pagination;