
import React, { useEffect, useRef, useState } from 'react';
import '../styles/projectPageStyles.css';

function MarketWatchOnAlexa() {

  return (
    <div id="body">
      <div id="canvas"></div>

      {/* INTRO PAGE */}
      <div id="projectPage">
        <div className="projectPageContainer">
          <a className="homeButtonProjectPage" href=".">
            <img src="./homeImage.png" alt="Home" />
          </a>
          <img id="projectTitleImage" src="./alexaLogo.png" alt="Profile Image"/>
          <div id="projectTitle"><span>MarketWatch on Alexa</span></div>
          <div className="techTilesContainer">
            {['AWS Lambda', 'AWS Api Gateway', 'Typescript', 'Serverless'].map((tech) => (
              <div className="techTile" key={tech}>{tech}</div>
            ))}
          </div>
          <div className="projectDescriptionContainer"> 
              <div className="projectDescription">
                <span>In 2021 I led development on the backend and narrative generation systems for MarketWatch on Alexa, a limited-time Alexa skill which summarized changes in the stock market. While there was interest in the industry at this time in using truly generative language models to produce content, this use case was better suited to old-fashioned techniques using branching logic. The number of potential interactions would be limited and reporting accuracy was essential, particularly in relation to the market data being surfaced; this made the project a good candidate for a rules-engine approach. For more information on the in-house rules-engine AI I led development on, see my discussion of our <a href="ai-authoring-engine-page.html" target="_blank" rel="noopener noreferrer" style={{ color: "inherit", textDecoration: "underline" }}>
                    AI Authoring Engine
                  </a>.
                </span>
            </div>
            <div id="alexaSkillImageContainer">
              <img className="alexaSkillImage" src="./alexaTopGainersImage.png" alt="A.I. Story"/>
              <img className="alexaSkillImage" src="./alexaSummaryImage.png" alt="A.I. Story"/>
              <img className="alexaSkillImage" src="./alexaRangeImage.png" alt="A.I. Story"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MarketWatchOnAlexa;
