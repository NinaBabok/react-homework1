import styled from "styled-components";
import { colors, breakpoints } from "../../lib/style/theme";

export const ModalWrapper = styled.div`
    position: absolute;
    z-index: 1;
    top: 0;
    left:0;
    width: 100%;
    background-color: ${colors.blackOverlay};
    padding-bottom: 32px;

    @media screen and (${breakpoints.mobileLarge}) {
        height: 100%;
        & form {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            grid-column-gap: 28px;
            width: 100%;
        }
    }   
`;

export const ModalInner = styled.div`
    display: flex;
    flex-direction: column;
    margin: 80px 6px;
    margin-top: 80px;
    background-color: ${colors.white};
    border-radius: 6px;
    padding: 28px;
    max-width: 600px;

    @media screen and (${breakpoints.mobileLarge}) {
        margin: 0 auto;
        margin-top: 80px;
    }


    @media screen and (${breakpoints.tablet}) {
        margin-top: 100px;
    }
`;

export const ModalHeader = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 32px;
`;

export const Title = styled.h3`
    font-weight: 600;
    font-size: 24px;
    color: ${colors.red};
`;

export const BtnQuit = styled.button`
    display: inline;
    border: none;
    background-color: ${colors.white};

    &:hover{
        cursor: pointer;
    }
`;