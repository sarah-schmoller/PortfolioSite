
import React, { useEffect, useRef, useState } from 'react';
import '../styles/homePageStyles.css';

function HomePage() {



// INITIAL SETUP
    
    const terminalTextContents = [
      ' intro_script.run()',
      'Hey there!',
      'My name is SARAH SCHMOLLER',
      'I write software that tells stories',
      '\n',
      `<a href="#workPageContainer" style="color:inherit;text-decoration:underline;">## View my work -> ##</a>`,
      '\n',
      '> █'
    ];

    const [typedTexts, setTypedTexts] = useState(() => {
      const initialTexts = Array(terminalTextContents.length).fill('');
      initialTexts[0] = '>';
      return initialTexts;
    });


// HTML FORMATTING

  return (
    <body id='body'>
      <div id='canvas'></div>

      {/* INTRO PAGE */}
      <div id="introPage">
        <div id="laptopLayoutContainer">
          <div id="laptopLayoutLightRadius"></div>
          <img id="laptopLayoutImage" src="./introImage.png"/>
          <div id="laptopLayoutTerminal">
            {typedTexts.map((text, idx) => (
              <div
                key={idx}
                className={`laptopLayoutTerminalText terminalLine${idx === typedTexts.length - 1 ? ' typing' : ''}`}
                style={{ top: `${1.75 * idx}%` }}
                dangerouslySetInnerHTML={{ __html: text }}
              />
            ))}
          </div>
          <div id="laptopLayoutButtonContainer">
            <a id="laptopLayoutHomeButton" href="." ><img src="./homeButton.png" alt="Home"/></a>
            <a id="laptopLayoutAboutButton" href="#aboutPage"><img src="./aboutButton.png" alt="About"/></a>
            <a id="laptopLayoutWorkButton" href="#workPageContainer"><img src="./workButton.png" alt="Work"/></a>
            <a id="laptopLayoutContactButton" href="#pageFooter"><img src="./contactButton.png" alt="Contact"/></a>
            <a id="laptopLayoutResumeButton" href="#resumePage"><img src="./resumeButton.png" alt="Resume"/></a>
          </div>
        </div>
        <svg id="introPageNavArrow" viewBox="0 0 1440 50" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
          <a id="introPageNavArrowLink" href="#aboutPage">
            <rect x="680" y="0" width="80" height="80" fill="transparent"></rect>     
            <g class="introPageScrollIndicator" transform="translate(710, 0)">
              <path d="M6 8L12 16L18 8H6Z" fill="#7a839c"></path>
            </g>
          </a>
        </svg>
        <svg class="svgWhiteTab" id="introPageTab" viewBox="0 0 1440 57" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
          <path d="M0 57C0 57 218.416 0 693.5 0C1168.58 0 1440 57 1440 57H0Z" transform="translate(432, 0) scale(0.4, 1)"></path>
        </svg>
      </div>
    </body>
  );
}

export default HomePage;
