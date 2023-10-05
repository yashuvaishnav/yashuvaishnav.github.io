import React from "react";
import styles from "../Module_css/Skills.module.css";
import { EveryHeading, EveryHeading2 } from "../Styled/NavbarDiv";
import { StyledIconReact } from "../Styled/DeviconIcon";
import styled from "styled-components";

export const Skills = () => {
  return (
    <div
      name="main_skill_link"
      className={styles.skill_MainOuterDiv}
      id="skills"
    >
      <div className={styles.skill_mainHeading}>
        <EveryHeading className="skills-card-name">Skills</EveryHeading>
      </div>
      <div className="skills-card">
        <div className={styles.skill_gridMain}>
          <div>
            <StyledIconReact>
              <img src="https://th.bing.com/th/id/OIP.ZNgBDR2Q1oaKnn07xaNG4wAAAA?pid=ImgDet&w=100&h=102&rs=1" alt="" />
            </StyledIconReact>
            <EveryHeading2 className="skills-card-name">HTML5</EveryHeading2>
          </div>
          <div>
            <StyledIconReact>
            <img src="https://th.bing.com/th/id/OIP.AOg9QcyeZGiVUE3ew2PBvAAAAA?pid=ImgDet&w=100&h=100&rs=1" alt="" />
            </StyledIconReact>
            <EveryHeading2 className="skills-card-name">CSS3</EveryHeading2>
          </div>
          <div>
            <StyledIconReact>
            <img src="https://th.bing.com/th/id/OIP.Bc06hywVxgK6Mlq1DUsEaQHaHa?pid=ImgDet&w=90&h=100&rs=1" alt="" />
            </StyledIconReact>
            <EveryHeading2 className="skills-card-name">
              JAVASCRIPT
            </EveryHeading2>
          </div>
          <div>
            <StyledIconReact>
            <img src="https://engineering.grab.com/img/grabs-front-end-study-guide/react-logo.svg" width="100px" height="100px" alt="" />
            </StyledIconReact>
            <EveryHeading2 className="skills-card-name">REACT</EveryHeading2>
          </div>
          <div>
            <StyledIconReact>
            <img src="https://th.bing.com/th/id/OIP.yvi6B33dh1qkOz22drdl5wHaHe?pid=ImgDet&w=100&h=100&rs=1" alt="" />
            </StyledIconReact>
            <EveryHeading2 className="skills-card-name">REDUX</EveryHeading2>
          </div>
          <div>
            <StyledIconReact>
            <img src="https://th.bing.com/th/id/OIP.AmVSfCkWBYQfkADoEiMDIwHaHa?pid=ImgDet&w=100&h=100&rs=1" alt="" />
            </StyledIconReact>
            <EveryHeading2 className="skills-card-name">NEXT JS</EveryHeading2>
          </div>
          <div>
            <StyledIconReact>
            <img src="https://th.bing.com/th/id/OIP.RW-y02a3rajC1QzQLKXAuwAAAA?pid=ImgDet&w=100&h=100&rs=1" alt="" />
            </StyledIconReact>
            <EveryHeading2 className="skills-card-name"> NODE JS</EveryHeading2>
          </div>
          <div>
            <StyledIconReact>
            <img src="https://th.bing.com/th/id/OIP.1uP8wuxZmaKxVYrq1GpXeAAAAA?pid=ImgDet&w=100&h=100&rs=1" alt="" />
            </StyledIconReact>
            <EveryHeading2 className="skills-card-name">MONGO DB</EveryHeading2>
          </div>
          <div>
            <StyledIconReact>
            <img src="https://avatars0.githubusercontent.com/u/5658226?s=280&v=4" width="100px" height="100px" alt="" />
            </StyledIconReact>
            <EveryHeading2 className="skills-card-name">EXPRESS</EveryHeading2>
          </div>
          <div>
            <StyledIconReact>
            <img src="https://th.bing.com/th/id/OIP.PisgvQ7qnar--dmr6mCDUQHaHa?pid=ImgDet&w=100&h=100&rs=1" alt="" />
            </StyledIconReact>
            <EveryHeading2 className="skills-card-name">GITHUB</EveryHeading2>
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