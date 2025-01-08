import { useEffect, useState } from 'react';
import '../styles/App.css';
import { Project } from '../types';
import ProjectList from './ProjectList';

const recordsPerPage = 5;

const App = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  
  useEffect(() => {
    fetch('https://raw.githubusercontent.com/saaslabsco/frontend-assignment/refs/heads/master/frontend-assignment.json')
      .then((response) => response.json())
      .then((data) => setProjects(data || []));
  }, []);

  const startIndex = (currentPage - 1) * recordsPerPage;
  const endIndex = startIndex + recordsPerPage;

  const displayedProjects = projects.slice(startIndex, endIndex);
  const totalPages = Math.ceil(projects.length / recordsPerPage);

  const getPageNumbers = () => {
    const pageNumbers: (string | number)[] = [];
    const maxVisiblePages = 5;

    const startPage = Math.max(1, Math.min(currentPage - Math.floor(maxVisiblePages / 2), totalPages - maxVisiblePages + 1));
    const endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

    if (startPage > 1) pageNumbers.push('...');

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }

    if (endPage < totalPages) pageNumbers.push('...');
    return pageNumbers;
  };

  const handlePageClick = (page: number | string) => {
    if (typeof page === 'number') setCurrentPage(page);
  };

  return (
    <div className="container">
      <h1>Kickstarter Projects</h1>
      <ProjectList projects={displayedProjects} />
      <div className="pagination">
        <ul className="pagination-list" aria-label="Pagination Navigation">
          {getPageNumbers().map((page, index) => (
            <li key={index} className={`pagination-item ${page === currentPage ? 'active' : ''}`}>
              {typeof page === 'number' ? (
                <button role='button' onClick={() => handlePageClick(page)} aria-label={`Go to page ${page}`} className="page-button">
                  {page}
                </button>
              ) : (
                <span className="dots">
                  {page}
                </span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
