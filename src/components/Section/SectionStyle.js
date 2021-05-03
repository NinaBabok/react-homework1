import styled from "styled-components";
import { Title } from "../../lib/style/generalStyles";
import { breakpoints } from "../../lib/style/theme";

export const SectionWrapper = styled.section`
  padding: 80px 15px;

  ${(props) => props.withoutTopPadding && "padding-top: 0;"}

  @media and (${breakpoints.tablet}) {
    padding: 80px 25px;

    ${(props) => props.withoutTopPadding && "padding-top: 0;"}
  }

  @media screen and (${breakpoints.desktop}) {
    padding: 80px 0;
    margin: 0 auto;

    ${(props) => props.withoutTopPadding && "padding-top: 0;"}
  }

  @media screen and (${breakpoints.desktopLarge}) {
    padding: 100px 0;
    max-width: 1280px;

    ${(props) => props.withoutTopPadding  && "padding-top: 0;"}
  }
`;

export const SectionTitle = styled(Title) `
  padding-top: 0;
`;  