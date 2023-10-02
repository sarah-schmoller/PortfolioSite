
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

      {/* HEADER */}
      <div id='headerWrapper'>
        <div id='header' class='header hiddenHeader'>
          <nav id='headerButtonNav'>
            <div id='headerButtonDiv'>
              <ol id='headerButtonList'>
                <div class='alignLeft'>
                  <a class='headerButton' href='.'>
                    <img class='headerButtonImage' id='headerHomeButton' src='./homeButton.png' alt='Home' />
                  </a>
                </div>
                <div class='alignRight'>
                  <a class='headerButton' href='#aboutPage'>
                    <img class='headerButtonImage' src='./aboutButton.png' alt='About' />
                  </a>
                  <a class='headerButton' href='#workPageContainer'>
                    <img class='headerButtonImage' src='./workButton.png' alt='Work' />
                  </a>
                  <a class='headerButton' href='#pageFooter'>
                    <img class='headerButtonImage' src='./contactButton.png' alt='Contact' />
                  </a>
                  <a class='headerButton' href='#resumePage'>
                    <img class='headerButtonImage' src='./resumeButton.png' alt='Resume' />
                  </a>
                </div>
              </ol>
            </div>
          </nav>
        </div>
      </div>


      {/* HEADER MOBILE */}
      <div id="outerHeaderMobile">
        <div id="headerMobile" class="innerHeaderMobile hiddenHeader">
          <nav id="buttonNav">
            <nav id="buttonDiv">
              <ol id="              let header = document.getElementById('header');
              // ...
              if (!header.classList.contains('visibleHeader')) {
                header.classList.toggle('visibleHeader');
              }">
                <div class="alignRight">
                <label for="menuToggle" id="menuIcon">
                  <img class="homeButtonHeader" id="homeButtonHeaderRight" src="./hamburgerMenu.png" alt="Menu" />
                </label>
                </div>
              </ol>
            </nav>
          </nav>
        </div>
      </div>
      <div>
        <input type="checkbox" id="menuToggle" class="menuToggle" hidden />
        <div id="dropdownMenu" class="dropdown-content">
          <label for="menuToggle" class="closeMenu">
            <span>&#215;</span>
          </label>
          <a class="list" href="."><span>Home</span></a>
          <a class="list" href="#aboutPage"><span>About</span></a>
          <a class="list" href="#workPage"><span>Work</span></a>
          <a class="list" href="#contactPage"><span>Contact</span></a>
          <a class="list" href="#resumePage"><span>Resume</span></a>
        </div>
      </div>


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


      {/* INTRO PAGE MOBILE*/}
      <div id="introPageMobile">
        <div id="mobileLayoutContainer">
          <img id="profileImage" src="./profileImage.png" alt="Profile Image"/>
          <div id="mobileLayoutTitle"><span>Sarah Schmoller</span></div>
          <div id="mobileLayoutButtonContainer">
            <a id="aboutButton" class="mobileButton" href="#aboutPage"><img src="./aboutButton.png" alt="About"/></a>
            <a id="workButton" class="mobileButton" href="#workPageContainer"><img src="./workButton.png" alt="Work"/></a>
            <a id="contactButton" class="mobileButton" href="#pageFooter"><img src="./contactButton.png" alt="Contact"/></a>
            <a id="resumeButton" class="mobileButton" href="#resumePage"><img src="./resumeButton.png" alt="Resume"/></a>
          </div>
          <div id="messagesTitle"></div>
          <div id="label">
            <span>Messages</span>
          </div>
          <div id="divider" class="horizontalLine"></div>
          <div id="mobileLayoutMessageContainer">
            <a id="mobileLayoutMessageContainerLink" href="#workPageContainer">
              <div id="profileAndTextWrapper">
                <img id="profileImageMessage" src="./profileImageMessage.png" alt="Profile Image"/>
                <div class="messageWrapper">
                  <div id="senderName">
                    <span>Sarah Schmoller</span>
                  </div>
                  <div id="timestamp">
                    <span id="currentTime"></span>
                  </div>
                  <div id="message">
                    <span>Hey there! My name is Sarah. I write software that tells stories. Tap here to see my work -></span>
                  </div>
                </div>
              </div>
            </a>
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


      {/* ABOUT PAGE */}
      <div id="aboutPage">
        <div id="aboutPageImageContainer">
          <img id="aboutImage" src="./aboutImage.png" />
        </div>
        <div id="aboutPageTextContainer">
          <div id="aboutTitle" className="titleText">
            <span>About Me</span>
          </div>
          <div id="aboutParagraph" className="paragraphText">
            <span>Hi! I'm Sarah Schmoller, a software engineer specializing in natural language technologies. My passion lies in creating software that brings written content to life.</span>
          </div>
          <div id="aboutParagraph" className="paragraphText">
            <span>The work I do encompasses a wide range of AI language generation techniques, from rules-engines to LLMs. I am well-versed in AWS's cloud computing, databasing, serverless, and API creation capabilities, allowing me to build out complex natural language generation tools from start to finish. Over the course of my career I've consistently worked with major consumer-facing publications, releasing highly visible automated publishing frameworks, authorial assist tools, audio summaries, and more.  </span>
          </div>
          <div id="aboutParagraph" className="paragraphText">
            <span>I earned my Bachelor's in Computer Science and Linguistics from the University of Minnesota and am currently working at Dow Jones, where I deal in AI-generated news media for MarketWatch, Barrons.com, Newswires, and the Wall Street Journal. In my free time you'll often find me travelling or volunteering with animals.</span>
          </div>
        </div>
      </div>

      {/* WORK PAGE */}
      <div id="workPage">
        <svg class="svgWhiteTab" id="workPageTab" viewBox="0 0 1440 57" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
          <path d="M0 57C0 57 218.416 0 693.5 0C1168.58 0 1440 57 1440 57H0Z" transform="translate(432, 57) scale(0.4, -1)"></path>
        </svg>
        <div id="workPageContainer">
          <div id="workPageText">
            <div id="workPageTitle" className="titleText"><span>My Work</span></div>
            <div id="workPageParagraph" className="paragraphText"><span>As a developer and technical lead, I’ve architected, developed, and deployed products putting AI to a wide range of uses in the media sphere. Here are a few of the projects I’ve been working on lately.</span></div>
          </div>
          <div id="workPageCardLayout">
            <div className="workPageCard">
              <a className="cardImageWrapper" href="ai-authoring-engine-page.html">
                <img className="cardImage" src="./engineCoverImage.jpg" alt="AI Authoring Engine"/>
              </a>
              <div>
                <div id="cardDescription">
                  <div className='cardTitle'>AI Authoring Engine</div>
                  <div className="cardText">DOW JONES & CO. [2022-2025]</div>
                  <div className="cardText">Tool for building LLM- and rules-engine AI-based stories</div>
                </div>
              </div>
            </div>
            <div className="workPageCard">
              <a className="cardImageWrapper" href="/automated-publishing">
                <img className="cardImage" src="./aiPublishingCoverImage.jpg" alt="AI Story Autopublisher"/>
              </a>
              <div>
                <div id="cardDescription">
                  <div className='cardTitle'>AI Story Autopublisher</div>
                  <div className="cardText">DOW JONES & CO. [2020-2025]</div>
                  <div className="cardText">Automated publishing system for AI-authored stories</div>
                </div>
              </div>
            </div>
            <div className="cardRowBreak" />
            <div className="workPageCard">
              <a className="cardImageWrapper" href="/marketwatch-on-alexa">
                <img className="cardImage" src="./alexaCoverImage.jpg" alt="MarketWatch on Alexa"/>
              </a>
              <div>
                <div id="cardDescription">
                  <div className='cardTitle'>MarketWatch on Alexa</div>
                  <div className="cardText">DOW JONES & CO. [2021-2023]</div>
                  <div className="cardText">Skill delivering market news, driven by rules-engine AI</div>
                </div>
              </div>
            </div>
            <div className="workPageCard">
              <a className="cardImageWrapper" href="/watchlist-recaps">
                <img className="cardImage" src="./watchlistRecapCoverImage.jpg" alt="Watchlist Recaps"/>
              </a>
              <div>
                <div id="cardDescription">
                  <div className='cardTitle'>Watchlist Recaps</div>
                  <div className="cardText">DOW JONES & CO. [2022-2024]</div>
                  <div className="cardText">Feature recapping company watchlists with AI narratives</div>
                </div>
              </div>
            </div>
            <div className="workPageCard">
              <a className="cardImageWrapper" href="/script-assist">
                <img className="cardImage" src="./scriptAssistCoverImage.jpg" alt="Gen AI ScriptAssist"/>
              </a>
              <div>
                <div id="cardDescription">
                  <div className='cardTitle'>Gen AI ScriptAssist</div>
                  <div className="cardText">XANDRA, INC. [2020]</div>
                  <div className="cardText">Scriptwriting assistant for Conversation Designers</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CONTACT PAGE */}
      <div id="contactPage">
        <div id="contactPageContainer">
          <div id="contactPageTitleDiv">
            <div id="contactPageTitle" className="titleText"><span>Contact</span></div>
          </div>
          <form action="https://formspree.io/f/mdkeogpv" method="POST">
            <div class="contactPageForm">
              <div class="contactPageHalfField">
                <input type="text" name="name" id="contactPageNameField" class="contactPageFormControl" placeholder="Name"></input>
              </div>
              <div class="contactPageHalfField">
                <input type="email" name="email" id="contactPageEmailField" class="contactPageFormControl" placeholder="Email"></input>
              </div>
              <div class="contactPageFullField">
                <textarea name="message" id="message" rows="5" class="contactPageFormControl" placeholder="Message"></textarea>
              </div>
              <button class="contactPageSubmitButton" type="submit" label="Send Message">Send Message</button>
            </div>
          </form>
          <div id="contactPageFooter">
            <svg class="contactPageSvgArc" viewBox="0 0 1440 114" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 114C0 114 218.416 0 693.5 0C1168.58 0 1440 114 1440 114H0Z"></path>
            </svg>
            <div id="contactPageFooterButtonDiv">
              <a id="contactPageGithubLink" href="https://github.com/sarah-schmoller"><img src="./githubIcon.png"/></a>
              <a id="contactPageLinkedInLink" href="https://www.linkedin.com/in/sarah-schmoller"><img src="./linkedInIcon.png"/></a>
              <a id="contactPageMailLink" href="mailto:sarah.schmoller@gmail.com"><img src="./mailIcon.png"/></a>
            </div>
            <div id="contactPageCopyright"><span>©2023 Sarah Schmoller. All rights reserved.</span></div>
          </div>
        </div>
      </div>
      <div id="pageFooter"></div>

    </body>
  );
}

export default HomePage;
