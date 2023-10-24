
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
              <div className="projectDescription">
                <span>MarketWatch.com’s watchlist feature is an established offering for individual site users, allowing them to log in and define personalized lists of instruments they wish to keep track of. In 2022, I was asked to lead development on the backend for a weekly recap addition extending watchlist functionality by providing customers with more detailed insights. The recap would include graphs and other graphics summarizing important aspects of a watchlist's performance, along with a text summary which could be played aloud as a sound bite.
                </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MarketWatchOnAlexa;
