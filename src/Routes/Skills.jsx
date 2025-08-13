import React from "react";
import styles from "../Module_css/Skills.module.css";
import { EveryHeading, EveryHeading2 } from "../Styled/NavbarDiv";
import { StyledIconReact } from "../Styled/DeviconIcon";
import styled from "styled-components";
import NextJs from "../Images/NextJs.svg"
import ReactSvg from "../Images/ReactSvg.png"
import CssIcon from "../Images/CssIcon.png"
import Html from "../Images/Html.png"
import Redux from "../Images/Redux.png"
import ChakraUI from "../Images/ChakraUI.png"
import Expressjs from "../Images/Expressjs.png"
import JavaScript from "../Images/JavaScript.png"
import MongoDB from "../Images/MongoDB.png"
import Netlify from "../Images/Netlify.png"
import Nodejs from "../Images/Nodejs.png"
import Npm from "../Images/Npm.png"
import Postman from "../Images/Postman.png"
import Github from "../Images/Github.png"
import Vscode from "../Images/Vscode.png"


export const Skills = () => {
  return (
    <div
      name="main_skill_link"
      className={styles.skill_MainOuterDiv}
      id="skills"
    >
      <div className={styles.skill_mainHeading}>
        <EveryHeading className="skills-card-name">Skills And Tools</EveryHeading>
      </div>
      <div className="skills-card">
        <div className={styles.skill_gridMain}>
          <div>
            <StyledIconReact>
              <img className="skills-card-img" src={Html} alt="" />
            </StyledIconReact>
            <EveryHeading2 className="skills-card-name">HTML5</EveryHeading2>
          </div>
          <div>
            <StyledIconReact>
            <img className="skills-css" src={CssIcon} alt="" />
            </StyledIconReact>
            <EveryHeading2 className="skills-card-name">CSS3</EveryHeading2>
          </div>
          <div>
            <StyledIconReact>
            <img className="skills-javascript" src={JavaScript} alt="" />
            </StyledIconReact>
            <EveryHeading2 className="skills-card-name">
              JAVASCRIPT
            </EveryHeading2>
          </div>
          <div>
            <StyledIconReact>
            <img className="skills-card-img" src={ReactSvg} alt="" />
            </StyledIconReact>
            <EveryHeading2 className="skills-card-name">REACT</EveryHeading2>
          </div>
          <div>
            <StyledIconReact>
            <img className="skills-card-img" src={Redux} alt="" />
            </StyledIconReact>
            <EveryHeading2 className="skills-card-name">REDUX</EveryHeading2>
          </div>
          <div>
            <StyledIconReact>
            <img className="skills-card-img" src={NextJs} alt="" />
            </StyledIconReact>
            <EveryHeading2 className="skills-card-name">NEXT JS</EveryHeading2>
          </div>
          <div>
            <StyledIconReact>
            <img className="skills-nodejs" src={Nodejs} alt="" />
            </StyledIconReact>
            <EveryHeading2 className="skills-card-name"> NODE JS</EveryHeading2>
          </div>
          <div>
            <StyledIconReact>
            <img className="skills-card-img" src={MongoDB} alt="" />
            </StyledIconReact>
            <EveryHeading2 className="skills-card-name">MONGO DB</EveryHeading2>
          </div>
          <div>
            <StyledIconReact>
            <img className="skills-expressjs" src={Expressjs} alt="" />
            </StyledIconReact>
            <EveryHeading2 className="skills-card-name">EXPRESS</EveryHeading2>
          </div>
          <div>
            <StyledIconReact>
            <img className="skills-github" src={Github} alt="" />
            </StyledIconReact>
            <EveryHeading2 className="skills-card-name">GITHUB</EveryHeading2>
          </div>
          <div>
            <StyledIconReact>
            <img className="skills-vscode" src={Vscode} alt="" />
            </StyledIconReact>
            <EveryHeading2 className="skills-card-name">VS Code</EveryHeading2>
          </div>
          <div>
            <StyledIconReact>
            <img className="skills-postman" src={Postman} alt="" />
            </StyledIconReact>
            <EveryHeading2 className="skills-card-name">Postman</EveryHeading2>
          </div>
          <div>
            <StyledIconReact>
            <img className="skills-card-img" src={Npm} alt="" />
            </StyledIconReact>
            <EveryHeading2 className="skills-card-name">NPM</EveryHeading2>
          </div>
          <div>
            <StyledIconReact>
            <img className="skills-card-img" src={ChakraUI} alt="" />
            </StyledIconReact>
            <EveryHeading2 className="skills-card-name">Chakra UI</EveryHeading2>
          </div>
          <div>
            <StyledIconReact>
            <img className="skills-card-img" src={Netlify} alt="" />
            </StyledIconReact>
            <EveryHeading2 className="skills-card-name">Netlify</EveryHeading2>
          </div>
        </div>
      </div>
    </div>
  );
};


const div = styled.div`
  img{

  }
  h2{
    text-align: center;
  }
`