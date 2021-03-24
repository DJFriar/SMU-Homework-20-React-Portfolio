import * as React from 'react';

const Project = ({name, description, keyTech}) => {
  return (
    <div>
      <h2>{ name }</h2> 
      <p><strong>Description</strong>: { description }</p>
      <p><strong>Key Technologies Used</strong>: { keyTech }</p>
    </div>
  )
}

export default Project