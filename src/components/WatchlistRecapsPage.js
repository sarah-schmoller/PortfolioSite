
import React, { useEffect, useRef, useState } from 'react';
import '../styles/projectPageStyles.css';

function MarketWatchOnAlexa() {

  return (
    <div id="body">
      <div id="canvas"></div>

      <div id="projectPage">

        <div className="projectPageContainer">
                    <a className="homeButtonProjectPage" href=".">
          <img src="./homeImage.png" alt="Home" />
        </a>
          <img id="projectTitleImage" src="./watchlistRecapLogo.png" alt="Profile Image"/>
          <div id="projectTitle"><span>Watchlist Recaps</span></div>
          <div className="techTilesContainer">
            {['AWS Lambda', 'AWS Step Function', 'AWS Api Gateway', 'AWS DynamoDB', 'Amazon Polly', 'Node.js', 'TypeScript', 'React', 'Terraform'].map((tech) => (
              <div className="techTile" key={tech}>{tech}</div>
            ))}
          </div>
          <div className="projectDescriptionContainer">
            <img className="watchlistRecapImage" src="./watchlistRecapImage.png" alt="A.I. Story"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MarketWatchOnAlexa;
