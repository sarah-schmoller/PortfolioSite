
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
            <div className="projectDescription">
                <span>These watchlist recaps served as an early foray into developing a robust system for branching in-house text generation.  Shorter captions are generated via simple conditional logic, but I also designed a templated narrative-generation prototype to produce a more complex paragraph overview. This is provided alongside an audio reading performed by Amazon Polly. I discuss in-house narrative generation further in my summary of the AI Authoring Engine project.
                </span>
            </div>
            <div className="projectDescription">
                <span>The system architecture I designed encompassed not only the rules-engine AI logic for narrative generation, but also substantial infrastructure for management of instrument data. It was essential to consider the impact of a large number of users accessing the recaps at the same time; if unique real-time stock data was provided for each user upon visiting, internal APIs could easily be overloaded. For that reason, I settled on a snapshot design, in which a lambda job is run weekly to store new company information in Amazon’s DynamoDB. This strategy has ensured that the system is scalable to an infinite number of users, without concern for downstream capacity limits. Both data and text elements are surfaced via apis built on AWS lambdas.
                </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MarketWatchOnAlexa;
