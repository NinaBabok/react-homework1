import React from "react";
import { SectionWrapper, SectionTitle } from './SectionStyle';

const Section = ({ children, title, withoutTopPadding }) => {

  return (
    <SectionWrapper withoutTopPadding={withoutTopPadding}>
      {title && <SectionTitle>{title}</SectionTitle>}
      {children}
    </SectionWrapper>
  );
};

export default Section;
