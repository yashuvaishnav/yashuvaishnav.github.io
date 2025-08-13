import {
  NavbarDiv,
  NavbarLi,
  NavbarMainDiv,
  NavbarHam,
} from "../Styled/NavbarDiv";
// import logo1 from "../Images/logo1.svg";
import { Link } from "react-scroll";
import { HamburgerMenuFun } from "./HamburgerMenu";

export const Navbar = () => {
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noreferrer");
  };
  
  return (
    <NavbarMainDiv id="nav-menu">
      <NavbarDiv>
        <NavbarDiv className="nav-link home">
          <NavbarLi>
            <Link
              activeClassName="nav-link-active"
              className="nav-not-active-link"
              to="main_about_link"
              duration={1500}
              delay={100}
              smooth={true}
              offeset={0}
            >
              <img src={"https://i0.wp.com/utopiafitnesscenter.com/wp-content/uploads/2020/04/cropped-Site_icon_trasnparent_512x512-2.png?w=512&ssl=1"} alt="" />
            </Link>
          </NavbarLi>
        </NavbarDiv>
        <NavbarDiv>
          <NavbarLi>
            <Link
              className="nav-not-active-link nav-link about"
              activeClassName="nav-link-active"
              to="main_about_link"
              duration={1500}
              delay={100}
              smooth={true}
              offeset={0}
            >
              About
            </Link>
          </NavbarLi>
          <NavbarLi>
            <Link
              className="nav-not-active-link nav-link skills"
              activeClassName="nav-link-active"
              to="main_skill_link"
              duration={1500}
              delay={100}
              smooth={true}
              offeset={0}
            >
              Skills
            </Link>
          </NavbarLi>
          <NavbarLi>
            <Link
              className="nav-not-active-link nav-link projects"
              activeClassName="nav-link-active"
              to="main_projects_link"
              duration={1500}
              delay={100}
              smooth={true}
              offeset={0}
            >
              Projects
            </Link>
          </NavbarLi>
          <NavbarLi>
            <div
              id="resume-button-1"
              onClick={() =>
                openInNewTab(
                  "https://drive.google.com/file/d/1XIH-ZhjGV0nhpQEKskhWZqdLCVC8LW5l/view?usp=drive_link"
                )
              }
            >
              <a
                className="nav-not-active-link nav-link resume"
                id="resume-link-1"
                // Add resume from google 
                href="Yash_Vaishnav_Resume.pdf"
                download
              >
                Resume
              </a>
            </div>
          </NavbarLi>
          <NavbarLi>
            <Link
              className="nav-not-active-link nav-link contact"
              activeClassName="nav-link-active"
              to="main_footer_link"
              duration={1500}
              delay={100}
              smooth={true}
              offeset={0}
            >
              Contact
            </Link>
          </NavbarLi>
        </NavbarDiv>
        <NavbarHam>
          <HamburgerMenuFun />
        </NavbarHam>
      </NavbarDiv>
    </NavbarMainDiv>
  );
};
