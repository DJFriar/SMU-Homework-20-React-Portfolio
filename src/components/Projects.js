import * as React from 'react';

const Project = ({ name, description, keyTech, gitHub, deployedApp, screenshot}) => {
  return (
    <div>
      <div class="portfolioItem" uk-grid>
        <div class="uk-width-1-3@m uk-text-center">
          <img src="%PUBLIC_URL%/images/outdoor-adventures-sm.jpg" alt="Outdoor Adventures Screenshot" class="reportImage"/>
        </div>
        <div class="uk-width-2-3@m uk-flex-first@m">
          <h4>{name}</h4>
          <p><strong>Description</strong>: {description}</p>
          <p><strong>Key Technologies Used</strong>: {keyTech}</p>
          <p><a href={gitHub} target="_blank" rel="noreferrer">View Source</a> | <a href={deployedApp} target="_blank" rel="noreferrer">View App</a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Project