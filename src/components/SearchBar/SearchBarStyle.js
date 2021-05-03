import styled from "styled-components";
import { breakpoints, colors } from "../../lib/style/theme";

export const SearchBarWrapper = styled.input`
    display: block;
    margin: 0 auto;
    margin-bottom: 40px;
    width: 100%;
    font-size: 14px;
    border: 1px solid ${colors.lightGrey};
    border-radius: 6px;
    line-height: 40px;
    outline: none;
    padding: 0 15px;

    &:focus {
        border-color: ${colors.yellow};
    }

    @media screen and (${breakpoints.mobileLarge}) {
        max-width: 400px;
        ${'' /* padding: 0; */}
    }

    @media screen and (${breakpoints.desktop}) {
        font-size: 16px;
    }
`;