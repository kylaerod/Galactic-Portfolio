import React from 'react';

function Project({ title, description, image, demoLink, repoLink }) {
  return (
    <div className="project">
      <h3>{title}</h3>
      <img src={image} alt={title} />
      <p>{description}</p>
      <a href={demoLink} target="_blank" rel="noopener noreferrer">Demo</a>
      <a href={repoLink} target="_blank" rel="noopener noreferrer">GitHub</a>
    </div>
  );
}

export default Project;
