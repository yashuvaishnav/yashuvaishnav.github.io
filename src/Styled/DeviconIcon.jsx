import styled from "styled-components";
import DevIcon from "devicon-react-svg"

const StyledIconReact = styled.i`
  width: 7rem;
  font-size: 5em;
  transition: all 0.3s ease;
  img{

  }

  &:hover {
    font-size: 4em;
    img{
      width: 90px;
      height: 90px;
    }
  }

  @media (max-width: 760px) {
    & {
      font-size: 4em;
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

  & :hover {
    /* transform: scale(1.3); */
    /* font-size: 3em; */
  }
`;

export { StyledIconReact, StyledIcon_react_small, IconSmall };
