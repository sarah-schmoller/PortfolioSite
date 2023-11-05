
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
            <div className="projectDescription">
              <span>The AI Story Autopublisher is the product I have worked on the longest as technical lead for Dow Jones’ AI Content Generation team. This represented the first of the our efforts towards automated article generation when the team was founded in 2020, and has developed into an expansive framework managing production of many different types of AI content. The system is composed of a multi-step process built on AWS lambda functions, and orchestrated by step functions. Market data is pulled from various sources and parsed; the data is fed into an AI article generation system, which outputs new story text; and finally, the text is formatted for publication and sent off for display on one of Dow Jones’ product sites.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AutomatedPublishing;
