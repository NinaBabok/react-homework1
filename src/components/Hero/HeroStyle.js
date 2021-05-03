import styled from "styled-components";
import { breakpoints, colors } from "../../lib/style/theme";

import HeroBackground from "../../assets/images/hero.jpeg";

export const HeroWrapper = styled.section`
  background-image: url(${HeroBackground});
  height: 400px;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  margin-top: 80px;
  position: relative;

  @media screen and (${breakpoints.mobileLarge}) {
    height: 500px;
  }
`;

export const Overlay = styled.div`
  background-color: ${colors.blackOverlay};
  width: 100%;
  height: 100%;
`;

export const Content = styled.div`
  margin: 0 auto;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 0;
  right: 0;
  padding: 0 15px;

  @media screen and (${breakpoints.desktop}) {
    max-width: 1280px;
  }
`;

export const Heading = styled.h1`
  color: ${colors.yellow};
  margin-bottom: 30px;
  line-height: 140%;
  font-size: 20px;

  @media screen and (${breakpoints.mobileLarge}) {
    width: 500px;
    font-size: 24px;
  }

  @media screen and (${breakpoints.desktop}) {
    font-size: 28px;
  }

    @media screen and (${breakpoints.desktopLarge}) {
      font-size: 32px;
    }
`;

export const Subheading = styled.p`
  color: ${colors.white};
  line-height: 160%;
  font-weight: 400;
  font-size: 14px;

  @media screen and (${breakpoints.desktop}) {
    width: 800px;
    font-size: 16px;
  }
`;
