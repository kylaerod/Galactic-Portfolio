// PortfolioSection.js
import React from 'react';
import ProjectComponent from './ProjectComponent';

function Portfolio() {
  const projects = [
    {
      title: 'First Draft Portfolio',
      imageSrc: './styles/projectImages/Work_Port.png',
      deployedLink: 'https://kylaerod.github.io/Kyla-Work-Portfolio/',
      githubLink: 'https://github.com/kylaerod/Kyla-Work-Portfolio'
    },
    {
      title: 'Weather API',
      imageSrc: './styles/projectImages/Weather_API.png',
      deployedLink: 'https://kylaerod.github.io/weatherAPIChallenge/',
      githubLink: 'https://github.com/kylaerod/weatherAPIChallenge'
    },
    {
      title: 'Password Generator',
      imageSrc: './styles/projectImages/Password_Gen.png',
      deployedLink: 'https://kylaerod.github.io/Javascript-Password-Generator/',
      githubLink: 'https://github.com/kylaerod/Javascript-Password-Generator'
    },  {
      title: 'Coding Knowledge Quiz',
      imageSrc: './styles/projectImages/Knowledge_Quiz.png',
      deployedLink: 'https://kylaerod.github.io/Testing-your-coding-knowledge-quiz/',
      githubLink: 'https://github.com/kylaerod/Testing-your-coding-knowledge-quiz'
    },  {
      title: 'Workday Schedule',
      imageSrc: './styles/projectImages/Scheduler.png',
      deployedLink: 'https://kylaerod.github.io/Scheduling-Workday/',
      githubLink: 'https://github.com/kylaerod/Scheduling-Workday'
    },  {
      title: 'Flash Forge Flashcards',
      imageSrc: './styles/projectImages/Flashcards.png',
      deployedLink: 'https://flashforge-bbea45beceff.herokuapp.com/login',
      githubLink: 'https://github.com/CallBeyond/FlashForge'
    },
  ];

  return (
    <section id="portfolio">
      <h2>Portfolio</h2>
      <div className="projects">
        {projects.map((project, index) => (
          <ProjectComponent
            key={index}
            title={project.title}
            imageSrc={project.imageSrc}
            deployedLink={project.deployedLink}
            githubLink={project.githubLink}
          />
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
