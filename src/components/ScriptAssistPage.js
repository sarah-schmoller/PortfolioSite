
import React, { useEffect, useRef, useState } from 'react';
import '../styles/projectPageStyles.css';

function ScriptAssist() {

  return (
    <div id="body">
      <div id="canvas"></div>

      {/* INTRO PAGE */}
      <div id="projectPage">
        <div className="projectPageContainer">
          <a className="homeButtonProjectPage" href=".">
            <img src="./homeImage.png" alt="Home" />
          </a>
          <img id="projectTitleImage" src="./scriptLogo.png" alt="Profile Image"/>
          <div id="projectTitle"><span>Script Assist</span></div>
          <div className="techTilesContainer">
            {['Javascript', 'Python', 'React', 'GPT-2'].map((tech) => (
              <div className="techTile" key={tech}>{tech}</div>
            ))}
          </div>
          <div className="projectDescriptionContainer">
            <div className="projectDescription">
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ScriptAssist;
