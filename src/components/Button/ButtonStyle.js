import styled from "styled-components";
import { colors, transitionEase } from "../../lib/style/theme";

export const ButtonWrapper = styled.button`
  display: block;
  text-decoration: none;
  width: 100%;
  line-height: 40px;
  text-align: center;
  border: 1px solid ${colors.red};
  border-radius: 6px;
  background: ${colors.red};
  color: ${colors.white};
  transition: ${transitionEase};
  
  ${(props) => props.gridSpan ? "grid-column: 1 / span 2;" : null};

  &:hover {
    cursor: pointer;
    border-color: ${colors.yellow};
    background: ${colors.yellow};
  }
  &:focus {
    outline: none;
  }
`;
