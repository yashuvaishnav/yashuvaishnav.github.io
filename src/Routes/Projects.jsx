import React from "react";
import styles from "../Module_css/Projects.module.css";
import styles1 from "../Module_css/About.module.css";
import ChakraUI from "../Images/ChakraUI.png";
import TechWave from "../Images/TechWave.png";
import Redux from "../Images/Redux.png";
import ReactSvg from "../Images/ReactSvg.png";
import JavaScript from "../Images/JavaScript.png";
import Event_Management from "../Images/Event_Management.png";
import MongoDB from "../Images/MongoDB.png"
import AcadmiaIQ from "../Images/AcadmialQ.png";
import swiftPay from "../Images/swiftPay.png";
import { IconSmall } from "../Styled/DeviconIcon";
import { EveryHeading } from "../Styled/NavbarDiv";

export const Projects = () => {
  return (
    <div
      name="main_projects_link"
      className={styles.mainProjects}
      id="projects"
    >
      <EveryHeading>PROJECTS</EveryHeading>

      <div className={styles.mainProjects_mainDiv}>
        <div className="project-card">
          <div className={styles.mainProjects_mainDiv_project1}>
            <div className={styles.mainProjects_mainDiv_project1_img}>
              <img src={swiftPay} alt="" />
            </div>
            <div className={styles.mainProjects_mainDiv_project1_summary}>
              <div>
                {" "}
                <h2 className="project-title">swiftPay App</h2>
                <p className="project-description">
                  swiftPay is your all-in-one, secure payment application
                  designed to simplify your financial transactions and elevate
                  your money management experience. With a user-friendly
                  interface and cutting-edge security features, swiftPay ensures
                  hassle-free and worry-free payments. This was a group project
                  which was built by me and my team in span of 5-days using
                  React, Redux, Styled component, CSS and Recharts.
                </p>
              </div>
              <div
                className={styles.mainProjects_mainDiv_project1_summary_flex}
              >
                <div>
                  {/* <div> */}
                  <a
                    className="project-deployed-link"
                    target="_blank"
                    href="https://warlike-current-5989-gamma.vercel.app"
                  >
                    <button className={styles1.viewDemoButton}>
                      View Demo
                    </button>
                  </a>
                </div>
                <div>
                  <a
                    className="project-github-link"
                    target="_blank"
                    href="https://github.com/yashuvaishnav/SwiftPay-Finance-App"
                  >
                    <button className={styles1.viewDemoButton}>
                      View Source
                    </button>
                  </a>
                </div>
                {/* </div> */}
                <div
                  className={
                    styles.mainProjects_mainDiv_project1_summary_flex_icon
                  }
                >
                  <IconSmall>
                    <img
                      src={JavaScript}
                      alt=""
                    />
                  </IconSmall>
                  <IconSmall>
                    <img
                      src={ReactSvg}
                      alt=""
                    />
                  </IconSmall>
                  <IconSmall>
                    <img
                      src={Redux}
                      alt=""
                    />
                  </IconSmall>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="project-card">
          <div className={styles.mainProjects_mainDiv_project1}>
            <div className={styles.mainProjects_mainDiv_project1_img}>
              <img src={TechWave} alt="" />
            </div>
            <div className={styles.mainProjects_mainDiv_project1_summary}>
              <div>
                {" "}
                <h2 className="project-title">TechWave App</h2>
                <p className="project-description">
                  Tech Wave is a comprehensive full-stack project that offers
                  users a seamless educational experience. With features like
                  user registration and login, Tech Wave provides access to a
                  wide range of courses. Users can explore and preview
                  individual courses through demo videos before making a
                  purchase decision.
                </p>
              </div>
              <div
                className={styles.mainProjects_mainDiv_project1_summary_flex}
              >
                <div>
                  <a
                    className="project-deployed-link"
                    target="_blank"
                    href="https://tech-wave-gold.vercel.app"
                  >
                    <button className={styles1.viewDemoButton}>
                      View Demo
                    </button>
                  </a>
                </div>
                <div>
                  <a
                    className="project-github-link"
                    target="_blank"
                    href="https://github.com/yashuvaishnav/TechWave-Education-Platform"
                  >
                    <button className={styles1.viewDemoButton}>
                      View Source
                    </button>
                  </a>
                </div>
                <div
                  className={
                    styles.mainProjects_mainDiv_project1_summary_flex_icon
                  }
                >
                  <IconSmall>
                    <img
                      src={JavaScript}
                      alt=""
                    />
                  </IconSmall>
                  <IconSmall>
                    <img
                      src={ReactSvg}
                      alt=""
                    />
                  </IconSmall>
                  <IconSmall>
                    <img
                      src={MongoDB}
                      alt=""
                    />
                  </IconSmall>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="project-card">
          <div className={styles.mainProjects_mainDiv_project1}>
            <div className={styles.mainProjects_mainDiv_project1_img}>
              <img src={Event_Management} alt="" />
            </div>
            <div className={styles.mainProjects_mainDiv_project1_summary}>
              <div>
                {" "}
                <h2 className="project-title">Event Management App</h2>
                <p className="project-description">
                  Our event application gives us full control over creating, 
                  updating, and deleting events. As the sole admin, we customize
                  each event to meet our needs, ensuring a seamless experience.
                  Clients can easily join our events, and this admin-only approach
                  ensures that every event remains uniquely ours, offering a 
                  personalized and efficient management.
                </p>
              </div>
              <div
                className={styles.mainProjects_mainDiv_project1_summary_flex}
              >
                <div>
                  <a
                    className="project-deployed-link"
                    target="_blank"
                    href="https://event-management-oj7d.onrender.com/"
                  >
                    <button className={styles1.viewDemoButton}>
                      View Demo
                    </button>
                  </a>
                </div>
                <div>
                  <a
                    className="project-github-link"
                    target="_blank"
                    href="https://github.com/yashuvaishnav/Event-Management"
                  >
                    <button className={styles1.viewDemoButton}>
                      View Source
                    </button>
                  </a>
                </div>
                <div
                  className={
                    styles.mainProjects_mainDiv_project1_summary_flex_icon
                  }
                >
                  <IconSmall>
                    <img
                      src={JavaScript}
                      alt=""
                    />
                  </IconSmall>
                  <IconSmall>
                    <img
                      src={ReactSvg}
                      alt=""
                    />
                  </IconSmall>
                  <IconSmall>
                    <img
                      src={MongoDB}
                      alt=""
                    />
                  </IconSmall>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="project-card">
          <div className={styles.mainProjects_mainDiv_project1}>
            <div className={styles.mainProjects_mainDiv_project1_img}>
              <img src={AcadmiaIQ} alt="" />
            </div>
            <div className={styles.mainProjects_mainDiv_project1_summary}>
              <div>
                {" "}
                <h2 className="project-title">AcadmiaIQ App</h2>
                <p className="project-description">
                  AcademiaIQ is a versatile education application designed to
                  make learning accessible, engaging and effective. Explore
                  interactive quizzes, video lessons and live sessions covering
                  various subjects. This was a individual project which was done
                  by me in 5-days using HTML, CSS JavaScript ,ReactJS and
                  Chakra-UI.
                </p>
              </div>
              <div
                className={styles.mainProjects_mainDiv_project1_summary_flex}
              >
                <div>
                  <a
                    className="project-deployed-link"
                    target="_blank"
                    href="https://yashuwebsite.netlify.app"
                  >
                    <button className={styles1.viewDemoButton}>
                      View Demo
                    </button>
                  </a>
                </div>
                <div>
                  <a
                    className="project-github-link"
                    target="_blank"
                    href="https://github.com/yashuvaishnav/high-acoustics-5363"
                  >
                    <button className={styles1.viewDemoButton}>
                      View Source
                    </button>
                  </a>
                </div>
                <div
                  className={
                    styles.mainProjects_mainDiv_project1_summary_flex_icon
                  }
                >
                  <IconSmall>
                    <img
                      src={JavaScript}
                      alt=""
                    />
                  </IconSmall>
                  <IconSmall>
                    <img
                      src={ReactSvg}
                      alt=""
                    />
                  </IconSmall>
                  <IconSmall>
                    <img
                      src={ChakraUI}
                      alt=""
                    />
                  </IconSmall>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
