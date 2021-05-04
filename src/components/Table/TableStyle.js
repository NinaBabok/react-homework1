import styled from 'styled-components';
import { colors, transitionEase, boxShadowHover, breakpoints } from '../../lib/style/theme';

export const Message = styled.p`
    margin-top: 10px;
    text-align: center;
`;

export const AddEventButton = styled.button`
  display: block;
  text-decoration: none;
  width: 150px;
  line-height: 40px;
  text-align: center;
  background: ${colors.white};
  border: 1px solid ${colors.black};
  border-radius: 6px;
  transition: ${transitionEase};
  margin-top: 32px;
  
  &:hover {
    cursor: pointer;
    border-color: ${colors.green};
    color: ${colors.green}
  }
  &:focus {
    outline: none;
  }
`;

export const TableWrapper = styled.table`
    width: 100%;
    text-align: center;
    margin-top: 30px;
    line-height: 40px;
    border-spacing: 0;
    border-radius:6px;
    overflow: hidden;
    box-shadow: ${boxShadowHover};

    & tbody tr:nth-child(even) {
        background-color: ${colors.lightGrey}
    }
    
    & thead {
        background-color: ${colors.red};
        font-weight: 6px;
        color: ${colors.white};
    }

    & td,th {
        display: none;
    }

    & td:nth-child(-n + 2), td:last-child, th:nth-child(-n + 2), th:last-child {
        display: table-cell;
    }

    @media screen and (${breakpoints.mobileLarge}) {
        & td:nth-child(3), td:nth-child(7), th:nth-child(3), th:nth-child(7) {
            display: table-cell;
        }
    }
    @media screen and (${breakpoints.tablet}) { 
        & td:nth-child(n + 4),th:nth-child(n + 4) {
            display: table-cell;
        }
    }
    
`;

export const BtnDeleteEvent = styled.button`
    width: 40px;
    height: 40px;
    border: none;
    background-color: inherit;

    &:hover{
        cursor: pointer;
    }
`;