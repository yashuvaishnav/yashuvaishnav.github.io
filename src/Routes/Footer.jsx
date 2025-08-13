import React from "react";
import styles from "../Module_css/Footer.module.css";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FiMail, FiSmartphone } from "react-icons/fi";
import { TiLocation } from "react-icons/ti";
import { IoIosArrowDropupCircle } from "react-icons/io";
import { animateScroll as scroll } from "react-scroll";

export const Footer = () => {
  function scrollTo() {
    scroll.scrollTo(0);
  }

  return (
    <div name="main_footer_link" className={styles.footer_mainDiv}>
      <div className={styles.footer_scrollup}>
        <IoIosArrowDropupCircle onClick={scrollTo} />
      </div>
      <div className={styles.footer_outerDiv_icons}>
        <div>
          <a
            id="contact-linkedin"
            style={{ marginLeft: "0px" }}
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
      <div className={styles.footer_address_numberDiv} id="contact">
        <div>
          <TiLocation />
          <p>Indore, India</p>
        </div>
        <div>
          <FiMail />
          <p id="contact-email">yashurishu22@gmail.com</p>
        </div>
        <div>
          <FiSmartphone />
          <p id="contact-phone">(+91) 9893676857</p>
        </div>
      </div>
      <div className={styles.footer_designBy}>
        <p> ©️ 2024,Yash Vaishnav</p>
      </div>
    </div>
  );
};
