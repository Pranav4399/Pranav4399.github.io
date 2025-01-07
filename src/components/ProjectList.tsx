import React from 'react';
import { ProjectListProps } from '../types';

const ProjectList: React.FC<ProjectListProps> = ({ projects }) => (
  <div className="project-list">
    {projects.map((project, index) => (
      <div key={index} className="project-card">
        <div className="project-content">
          <a
            href={`https://www.kickstarter.com${project.url}`}
            target="_blank"
            className="project-link"
          >
            {project.title}
          </a>
          <p className="project-blurb">{project.blurb}</p>
          <p><span className='text-bold'>By:</span> {project.by}</p>
          <p><span className='text-bold'>Location:</span> {project.location}, {project.country}</p>
          <p><span className='text-bold'>Percentage Funded:</span> {project['percentage.funded']}%</p>
          <p><span className='text-bold'>Amount Pledged:</span> {project.currency.toUpperCase()} {project['amt.pledged']}</p>
          
        </div>
      </div>
    ))}
    {projects.length === 0 && <p>No projects available</p>}
  </div>
);

export default ProjectList;