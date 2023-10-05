import React from "react";
import profile from "../Images/profile.png";
import styles from "../Module_css/About.module.css";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FiMail, FiSmartphone } from "react-icons/fi";
import { TiLocation } from "react-icons/ti";

export const About = () => {
  return (
    <>
      <div id="main_about_link" className={styles.mainAboutDiv}>
        <div className={styles.about_outerDivImg}>
          <div className={styles.about_InnerDivImg} id="home">
            <img className="home-img" src={profile} alt="" />
          </div>
        </div>
        <div className={styles.about_nameH1Div}>
          <h1>
            <span className={styles.about_hii}> Hi, &nbsp;</span>
            <span id="user-detail-name">
              {" "}
              <span id={styles.hiIam}>I am</span> Yash Vaishnav
            </span>
          </h1>
        </div>
        <div className={styles.about_devH3Div} >
          <h3 id="about" className="about section">
            Full Stack Web Developer
          </h3>
        </div>
        <div className={styles.about_descPDiv} >
          <p id="user-detail-intro">
            A passionate programmer with a curious mind who loves solving
            problems. I have an experience of building Web applications with
            JavaScript / Reactjs / HTML / CSS etc. I'm currently actively
            looking for new opportunities
          </p>
        </div>
        <div className={styles.about_outerDiv_icons}>
          <div>
            <a
              id="contact-linkedin"
              style={{ marginLeft: "0.27em" }}
              className="nav-not-active-link"
              target="_blank"
              href="https://www.linkedin.com/in/yash-vaishnav-b55473261/"
            >
              <FaLinkedinIn />
            </a>
          </div>
          <div>
            <a
              id="contact-github"
              style={{ marginLeft: "0px" }}
              className="nav-not-active-link"
              target="_blank"
              href="https://github.com/yashuvaishnav"
            >
              <FaGithub />
            </a>
          </div>
          <div>
            <a
              id="contact-email"
              style={{ marginLeft: "0px" }}
              className="nav-not-active-link"
              target="_blank"
              href="mailto:yashurishu22@gmail.com"
            >
              <FiMail />
            </a>
          </div>
        </div>
        <div className={styles.about_address_numberDiv}>
          <div>
            <TiLocation />
            <p>Rajasthan, India</p>
          </div>
          <div>
            <FiSmartphone />
            <p id="contact-phone">(+91) 9893676857</p>
          </div>
        </div>
        <div className={styles.resumeButtonDiv}>
          <a id="resume-button-2" href="Yash_Vaishnav_Resume.pdf" download>
            <button  className={styles.resumeButton}>
              Resume
            </button>
          </a>
        </div>
      </div>
      
    </>
  );
};

// cheking
//line 26 --> id=user-detail-intro 
// check