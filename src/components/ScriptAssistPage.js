
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
              <span>
                <a href="https://variety.com/2018/digital/news/xandra-voice-experiences-alexa-google-home-1202917582" target="_blank" rel="noopener noreferrer" style={{ color: "inherit", textDecoration: "underline" }}>
                  Xandra, Inc.
                </a> was a small conversation design studio based in New York between the years 2017 and 2021. It specialized in producing interactive storytelling experiences using branching narratives, which were published as skills on Amazon Alexa. During its years in operation, Xandra worked as a contractor for brands like Google, HBO, and Nickelodeon, with many projects covering major media properties such as Westworld and The Walking Dead.
              </span>
            </div>
                        <div className="projectDescription">
              <span>In 2020, with LLMs still in their infancy, I interned for Xandra as an NLG Engineer, helping them to explore ways that AI might be used to facilitate their work. The company had been looking into using AI models to aid conversation designers in writing scripts, and I was tasked with building a prototype authorial assist tool using GPT-2.&nbsp;
                While this kind of system is fairly commonplace today, it was a very novel and exciting concept in 2020 when we were first investigating uses for these models. Our hope was that the completed tool would not only allow users to auto-generate turns of dialog throughout the writing process, but also to generate turns within a specific designated personality type.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ScriptAssist;
