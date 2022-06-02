import React from "react";
import styled from "styled-components";
import CopyrightIcon from "@mui/icons-material/Copyright";

const FooterContainer = styled.div`
  height: 10%;
  width: 100%;
  display: flex;
`;

const FooterLeft = styled.div`
  height: 100%;
  width: 30%;
  background-color: purple.;
`;

const FooterRight = styled.div`
  height: 100%;
  width: 30%;
`;

const Footer = () => {
  return (
    <div>
      <FooterContainer>
        <FooterLeft></FooterLeft>
        <FooterRight></FooterRight>
      </FooterContainer>
    </div>
  );
};

export default Footer;
