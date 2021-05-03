import styled from "styled-components";
import { breakpoints } from "../../lib/style/theme";

export const Top = styled.div`
  @media screen and (${breakpoints.tablet}) {
    display: flex;
    justify-content: space-between;
  }

  @media screen and (${breakpoints.desktop}) {
    display: flex;
    justify-content: space-between;
`;

export const Figure = styled.figure`
  width: 100%;
  height: 230px;
  margin-bottom: 24px;

  @media screen and (${breakpoints.mobileLarge}) {
    height: 300px;
  }

  @media screen and (${breakpoints.tablet}) {
    height: 230px;
    width: 400px;
  }

  @media screen and (${breakpoints.desktop}) {
    height: 350px;
    width: 600px;
  }
  @media screen and (${breakpoints.desktopLarge}) {
    height: 450px;
    width: 800px;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Content = styled.div`
  margin-bottom: 15px;

  @media screen and (${breakpoints.tablet}) {
    margin-bottom: 0;
    width: 270px;
  }
  @media screen and (${breakpoints.desktop}) {
    width: 300px;
  }
  @media screen and (${breakpoints.desktopLarge}) {
    width: 400px;
  }
`;

export const ContentRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
  font-size: 14px;

  @media screen and (${breakpoints.tablet}) {
    display: flex;
    justify-content: space-between;
    margin-bottom: 32px;
  }

  @media screen and (${breakpoints.desktop}) {
    margin-bottom: 32px;
    font-size: 16px;
  }
`;

export const Description = styled.p`
  line-height: 150%;

  @media screen and (${breakpoints.desktop}) {
    width: 600px;
    font-size: 16px;
  }
  @media screen and (${breakpoints.desktopLarge}) {
    width: 800px;
    font-size: 16px;
  }
`;

export const EventInfoItemWrapper = styled.div`
  &:last-child {
    text-align: right;
  }

  @media screen and (${breakpoints.tablet}) {
    &:last-child {
      text-align: right;
    }
`;

export const EventInfoItemTitle = styled.h3`
  font-size: 14px;
  margin-bottom: 4px;

  @media screen and (${breakpoints.tablet}) {
    margin-bottom: 12px;
  }

  @media screen and (${breakpoints.desktopLarge}) {
    font-size: 16px;
  }
`;

export const EventInfoItemValue = styled.p`
  @media and screen (${breakpoints.desktopLarge}){
    font-siwe: 16px;
  }
`;

export const SectionEvent = styled.div`
`;
