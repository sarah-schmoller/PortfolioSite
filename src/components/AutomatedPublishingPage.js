
import React, { useEffect, useRef, useState } from 'react';
import '../styles/projectPageStyles.css';

function AutomatedPublishing() {

  return (
    <div id="body">
      <div id="canvas"></div>

      <div id="projectPage">
        <div className="projectPageContainer">
          <a className="homeButtonProjectPage" href=".">
            <img src="./homeImage.png" alt="Home" />
          </a>
          <img id="projectTitleImage" src="./publicationLogo.png" alt="Profile Image"/>
          <div id="projectTitle"><span>AI Story Autopublisher</span></div>
          <div className="techTilesContainer">
            {['AWS Lambda', 'AWS Step Function', 'AWS DynamoDB', 'Node.js', 'C#', 'SQL', 'Terraform'].map((tech) => (
              <div className="techTile" key={tech}>{tech}</div>
            ))}
          </div>
          <div className="projectDescriptionContainer">
          </div>
        </div>
      </div>
    </div>
  );
}

export default AutomatedPublishing;
