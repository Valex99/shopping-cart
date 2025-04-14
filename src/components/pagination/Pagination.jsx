import React from "react";
import "./Pagination.css"; // Import the CSS file for styling

export default function Pagination({ currentPage, totalPages, onPageChange }) {
  const pageNumbers = Array.from(
    { length: totalPages },
    (_, index) => index + 1
  );

  return (
    <nav className="pagination-container" aria-label="Page navigation">
      <button
        className="pagination-button"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        &laquo;
      </button>

      {pageNumbers.map((number) => (
        <button
          key={number}
          className={`pagination-button ${
            number === currentPage ? "active" : ""
          }`}
          onClick={() => onPageChange(number)}
          aria-current={number === currentPage ? "page" : undefined}
        >
          {number}
        </button>
      ))}

      <button
        className="pagination-button"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        &raquo;
      </button>
    </nav>
  );
}
