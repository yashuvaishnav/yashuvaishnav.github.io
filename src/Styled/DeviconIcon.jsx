import styled from "styled-components";
import DevIcon from "devicon-react-svg";

const StyledIconReact = styled.i`
  width: 7rem;
  font-size: 5em;
  transition: all 0.3s ease;
  img {
    width: 80px;
    height: 80px;
    object-fit: contain; /* keeps aspect ratio */
    transition: all 0.3s ease;
  }
  .skills-css {
    width: 70px;
    height: 70px;
  }
  .skills-javascript {
    width: 65px;
    height: 65px;
  }
  .skills-nodejs {
    width: 70px;
    height: 70px;
  }
  .skills-expressjs {
    width: 70px;
    height: 70px;
  }
  .skills-github {
    width: 65px;
    height: 65px;
  }
  .skills-vscode {
    width: 65px;
    height: 65px;
  }
  .skills-postman {
    width: 65px;
    height: 65px;
  }
  .skills-netlify {
    width: 60px;
    height: 60px;
  }
  &:hover {
    font-size: 4em;
    img {
      transform: scale(0.9); /* shrink effect on hover */
    }
  }

  @media (max-width: 760px) {
    font-size: 4em;
    img {
      width: 70px; /* smaller for mobile */
      height: 70px;
    }

    .skills-javascript {
      width: 55px;
      height: 55px;
    }
    .skills-nodejs {
      width: 60px;
      height: 60px;
    }
    .skills-expressjs {
      width: 60px;
      height: 60px;
    }
    .skills-github {
      width: 55px;
      height: 55px;
    }
    .skills-vscode {
      width: 55px;
      height: 55px;
    }
    .skills-postman {
      width: 55px;
      height: 55px;
    }
    .skills-netlify {
      width: 60px;
      height: 60px;
    }
  }
`;

const StyledIcon_react_small = styled(DevIcon)`
  width: 2em;
  fill: green;

  @media (max-width: 760px) {
    & {
    }
  }
`;

const IconSmall = styled.i`
  font-size: 2em;
  img {
    height: 40px; /* set your desired height */
    width: 40px; /* set your desired width */
    object-fit: contain; /* keeps aspect ratio */
    transition: transform 0.2s ease; /* smooth hover effect */
  }

  & :hover {
    /* transform: scale(1.3); */
    /* font-size: 3em; */
  }
`;

export { StyledIconReact, StyledIcon_react_small, IconSmall };
