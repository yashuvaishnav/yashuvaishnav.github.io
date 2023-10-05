import React from "react";
import styles from "../Module_css/Projects.module.css";
import styles1 from "../Module_css/About.module.css";
import Traveller from "../Images/Traveller.png";
import Medicare from "../Images/Medicare.png";
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
        <div className={styles.mainProjects_mainDiv_project1}>
          <div className={styles.mainProjects_mainDiv_project1_img}>
            <img src={swiftPay} alt="" />
          </div>
          <div className={styles.mainProjects_mainDiv_project1_summary}>
            <div>
              {" "}
              <h2>swiftPay App</h2>
              <p>
                swiftPay is your all-in-one, secure payment application designed
                to simplify your financial transactions and elevate your money
                management experience. With a user-friendly interface and
                cutting-edge security features, swiftPay ensures hassle-free and
                worry-free payments. This was a group project which was built by
                me and my team in span of 5-days using React, Redux, Styled
                component, CSS and Recharts.
              </p>
            </div>
            <div className={styles.mainProjects_mainDiv_project1_summary_flex}>
              <div>
                <a
                  target="_blank"
                  href="https://warlike-current-5989-gamma.vercel.app"
                >
                  <button className={styles1.viewDemoButton}>View Demo</button>
                </a>
              </div>
              <div>
                <a
                  target="_blank"
                  href="https://github.com/yashuvaishnav/warlike-current-5989"
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
                    src="https://engineering.grab.com/img/grabs-front-end-study-guide/react-logo.svg"
                    width="40px"
                    height="40px"
                    alt=""
                  />
                </IconSmall>
                <IconSmall>
                  <img
                    src="https://th.bing.com/th/id/OIP.AOg9QcyeZGiVUE3ew2PBvAAAAA?pid=ImgDet&w=40&h=40&rs=1"
                    alt=""
                  />
                </IconSmall>
                <IconSmall>
                  <img
                    src="https://th.bing.com/th/id/OIP.Bc06hywVxgK6Mlq1DUsEaQHaHa?pid=ImgDet&w=37&h=40&rs=1"
                    alt=""
                  />
                </IconSmall>
              </div>
            </div>
          </div>
        </div>
        <div className="project-card">
          <div className={styles.mainProjects_mainDiv_project1}>
            <div className={styles.mainProjects_mainDiv_project1_img}>
              <img src={Traveller} alt="" />
            </div>
            <div className={styles.mainProjects_mainDiv_project1_summary}>
              <div>
                {" "}
                <h2 className="project-title">Travller App</h2>
                <p className="project-description">
                  Traveller app is a website for a travel agency. The website
                  contains details about tourist destinations, tour packages.
                  This website allow people to book their dream destination with
                  in their budgets. This was a collaborative project which was
                  built by me and 4 other members in spane of 5-days using HTML,
                  CSS and JavaScript.
                </p>
              </div>
              <div
                className={styles.mainProjects_mainDiv_project1_summary_flex}
              >
                <div>
                  <a
                    className="project-deployed-link"
                    target="_blank"
                    href="https://648ff05711e1f629dd64fb2c--visionary-centaur-d4c88a.netlify.app"
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
                    href="https://github.com/yashuvaishnav/MyProject-resilient-partner-542"
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
                      src="https://th.bing.com/th/id/OIP.ZNgBDR2Q1oaKnn07xaNG4wAAAA?pid=ImgDet&w=40&h=40&rs=1"
                      alt=""
                    />
                  </IconSmall>
                  <IconSmall>
                    <img
                      src="https://th.bing.com/th/id/OIP.AOg9QcyeZGiVUE3ew2PBvAAAAA?pid=ImgDet&w=40&h=40&rs=1"
                      alt=""
                    />
                  </IconSmall>
                  <IconSmall>
                    <img
                      src="https://th.bing.com/th/id/OIP.Bc06hywVxgK6Mlq1DUsEaQHaHa?pid=ImgDet&w=37&h=40&rs=1"
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
                      src="https://engineering.grab.com/img/grabs-front-end-study-guide/react-logo.svg"
                      width="40px"
                      height="40px"
                      alt=""
                    />
                  </IconSmall>
                  <IconSmall>
                    <img
                      src="https://th.bing.com/th/id/OIP.AOg9QcyeZGiVUE3ew2PBvAAAAA?pid=ImgDet&w=40&h=40&rs=1"
                      alt=""
                    />
                  </IconSmall>
                  <IconSmall>
                    <img
                      src="https://th.bing.com/th/id/OIP.Bc06hywVxgK6Mlq1DUsEaQHaHa?pid=ImgDet&w=37&h=40&rs=1"
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
              <img src={Medicare} alt="" />
            </div>
            <div className={styles.mainProjects_mainDiv_project1_summary}>
              <div>
                {" "}
                <h2 className="project-title">Medicare App</h2>
                <p className="project-description">
                  This Medicare App enable user to signup/login, Revolutionize
                  healthcare shopping with our E-Commerce Medicine App. Easy,
                  secure, and fast access to medicines and healthcare essentials
                  from your device. Shop with confidence This was a individual
                  project which was done by me in 5-days using HTML, CSS and JS.
                </p>
              </div>
              <div
                className={styles.mainProjects_mainDiv_project1_summary_flex}
              >
                <div>
                  <a
                    className="project-deployed-link"
                    target="_blank"
                    href="https://guileless-macaron-42a172.netlify.app"
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
                    href="https://github.com/yashuvaishnav/godly-rake-5952"
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
                      src="https://th.bing.com/th/id/OIP.ZNgBDR2Q1oaKnn07xaNG4wAAAA?pid=ImgDet&w=40&h=40&rs=1"
                      alt=""
                    />
                  </IconSmall>
                  <IconSmall>
                    <img
                      src="https://th.bing.com/th/id/OIP.AOg9QcyeZGiVUE3ew2PBvAAAAA?pid=ImgDet&w=40&h=40&rs=1"
                      alt=""
                    />
                  </IconSmall>
                  <IconSmall>
                    <img
                      src="https://th.bing.com/th/id/OIP.Bc06hywVxgK6Mlq1DUsEaQHaHa?pid=ImgDet&w=37&h=40&rs=1"
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
