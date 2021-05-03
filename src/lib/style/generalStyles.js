import styled from "styled-components";
import { breakpoints } from "./theme";

export const Title = styled.h1`
  text-align: center;
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 32px;
  padding-top: 80px;

  @media screen and (${breakpoints.mobileLarge}) {
    font-size: 24px;
  }

  @media screen and (${breakpoints.desktop}) {
    font-size: 28px;
  }

  @media screen and (${breakpoints.desktopLarge}) {
    font-size: 32px;
    margin-bottom: 48px;
    padding-top: 100px;
  }
`;

export const Grid = styled.div`
  display: grid;
  row-gap: 32px;

  @media screen and (${breakpoints.mobileLarge}) {
    grid-template-columns: repeat(2, 1fr);
    column-gap: 32px;
  }

  @media screen and (${breakpoints.desktop}) {
    grid-template-columns: repeat(3, 1fr);

    ${props => props.columns === 3 && 
      'padding: 0 32px;'
    }
  }
`;