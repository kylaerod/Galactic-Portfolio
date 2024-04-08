
import React from 'react';

function ProjectComponent({ title, imageSrc, deployedLink, githubLink }) {
  return (
    <div className="project">
      <h3>{title}</h3>
      <img src={imageSrc} alt={title} />
      <div>
        <a href={deployedLink} target="_blank" rel="noopener noreferrer">Deployed App</a>
        <a href={githubLink} target="_blank" rel="noopener noreferrer">GitHub Repository</a>
      </div>
    </div>
  );
}

export default ProjectComponent;
