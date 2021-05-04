import styled from "styled-components";
import { breakpoints, colors } from "./theme";

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
  justify-content: center;

  @media screen and (${breakpoints.mobileLarge}) {
    grid-template-columns: repeat(2, 1fr);
    column-gap: 32px;
  }

  @media screen and (${breakpoints.desktop}) {
    grid-template-columns: repeat(${props => props.columns && props.columns < 3 ? props.columns : 3}, 
    ${props => props.columns < 3 ? 'minmax(min-content, max-content)' : '1fr'});
  }

  @media screen and (${breakpoints.desktopLarge}) {
    grid-template-columns: repeat(${props => props.columns && props.columns < 4 ? props.columns : 4}, 
    ${props => props.columns < 4 ? 'minmax(min-content, max-content)' : '1fr'});
    padding: 0;
  }
`;

export const Form = styled.form`
  margin: 0 auto;
  width: 100%;

  @media screen and (${breakpoints.mobileLarge}) {
    width: 400px;
  }
`;

export const FormRow = styled.div`
  margin-bottom: 32px;

  &:last-child {
    margin-bottom: 0;
  }

  ${(props) => props.gridSpan ? "grid-column: 1 / span 2;" : null};
`;

export const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const InputLabel = styled.label`
  display: block;
  font-size: 14px;
  font-weight: 600;
  ${(props) => !props.withoutMarginBottom && "margin-bottom: 4px;"}

  @media screen and (${breakpoints.desktop}) {
    font-size: 16px;
  }
`;

export const InputText = styled.input`
  border: 1px solid ${colors.lightGrey};
  border-radius: 6px;
  width: 100%;
  line-height: 40px;
  padding: 0 10px;
  outline: none;
  font-size: 14px;
  font-family: 'Montserrat', sans-serif;

  &:focus {
    border-color: ${colors.yellow};
  }
  
  @media screen and (${breakpoints.desktop}) {
    font-size: 16px;
  }
`;

export const TextArea = styled.textarea`
  border: 1px solid ${colors.lightGrey};
  border-radius: 6px;
  width: 100%;
  line-height: 150%;
  padding: 10px;
  outline: none;
  font-size: 14px;
  font-family: 'Montserrat', sans-serif;
  min-width: 100%;

  &:focus {
    border-color: ${colors.yellow};
  }
  
  @media screen and (${breakpoints.desktop}) {
    font-size: 16px;
  }
`;

export const Select = styled.select`
  border: 1px solid ${colors.lightGrey};
  border-radius: 6px;
  width: 100%;
  line-height: 40px;
  height: 40px;
  padding: 0 10px;
  outline: none;
  font-size: 14px;
  font-family: 'Montserrat', sans-serif;

  &:focus {
    border-color: ${colors.yellow};
  }
  
  @media screen and (${breakpoints.desktop}) {
    font-size: 16px;
  }
`;

export const InputCheckbox = styled.input`
  margin-right: 12px;
  width: 18px;
  height: 18px;
`;

export const InputError = styled.p`
  font-size: 14px;
  color: ${colors.red};
  padding-top: 8px;
`;