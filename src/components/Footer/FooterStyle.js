import styled from "styled-components";
import { colors } from "../../lib/style/theme";

export const FooterWrapper = styled.div`
  width: 100%;
  background-color: ${colors.darkGrey};
  color: ${colors.lightGrey};
  text-align: center;
  font-size: 14px;
  padding: 40px 0;
  margin: 0 auto;
  flex-shrink: 0;
`;