import styled from "styled-components";
import {boxShadow, boxShadowHover, transitionCubic } from "../../lib/style/theme";

export const EventWrapper = styled.div`
  max-width: 350px;
  padding: 20px;
  border-radius: 6px;
  box-shadow: ${boxShadow};
  transition: ${transitionCubic};
  float: left;
  margin: auto;

  &:hover {
    box-shadow: ${boxShadowHover};
  }
`;

export const Figure = styled.figure`
  width: 100%;
  height: 220px;
  margin: 0;
  margin-bottom: 20px;
  border-radius: 6px;
  overflow: hidden;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Title = styled.h3`
  font-size: 18px;
  margin-bottom: 10px;
`;

export const Description = styled.p`
  font-size: 14px;
  margin-bottom: 20px;
`;