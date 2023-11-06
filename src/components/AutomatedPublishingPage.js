
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
            <img className="aiStoryImage" src="./aiStoryImage.png" alt="A.I. Story"/>
            <div className="projectDescription">
              <span>The AI Story Autopublisher is the product I have worked on the longest as technical lead for Dow Jones’ AI Content Generation team. This represented the first of the our efforts towards automated article generation when the team was founded in 2020, and has developed into an expansive framework managing production of many different types of AI content. The system is composed of a multi-step process built on AWS lambda functions, and orchestrated by step functions. Market data is pulled from various sources and parsed; the data is fed into an AI article generation system, which outputs new story text; and finally, the text is formatted for publication and sent off for display on one of Dow Jones’ product sites.
              </span>
            </div>
            <div className="projectDescription">
              <span>When development on this system first began, the generative AI component was outsourced to a third party vendor. As our infrastructure improved and advanced, I led the development of <a href="ai-authoring-engine-page.html" target="_blank" rel="noopener noreferrer" style={{ color: "inherit", textDecoration: "underline" }}>
                  additional tools
                </a> which now allow us to generate story text in-house, both via the branching logic of rules-engine AI and via large language models. Both methods are employed in our work, with the specifics depending on the use case and the end recipient of the articles.
              </span>
            </div>
            <div className="projectDescription">
              <span>As of 2023, this automated content generation and publishing system produced 90% of the articles surfaced daily on <a href="https://www.marketwatch.com/author/marketwatch-automation" target="_blank" rel="noopener noreferrer" style={{ color: "inherit", textDecoration: "underline" }}>
                  MarketWatch.com
                </a>, generating upwards of a million new pageviews per month. In 2025 new story development shifted to Dow Jones’ NewsWires, where over 400 automated stories are now published each day. Additional articles are generated regularly for <a href="https://www.barrons.com/authors/barrons-automation" target="_blank" rel="noopener noreferrer" style={{ color: "inherit", textDecoration: "underline" }}>
                  Barrons.com
                </a>, Mansion Global, and the Dow Jones Oil Price Information Service (OPIS).
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AutomatedPublishing;
