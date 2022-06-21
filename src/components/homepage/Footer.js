import React from 'react';
import styled from 'styled-components';
import HelpCenterIcon from '@mui/icons-material/HelpCenter';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import CopyrightIcon from '@mui/icons-material/Copyright';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

const FooterContainer = styled.div`
  height: 50px;
  width: 100%;
  display: flex;
  z-index: 99;
`;

const FooterLeft = styled.div`
  height: 100%;
  width: 15%;
  background-color: #2658e2;
  z-index: 99;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;

const HelpButton = styled.div`
  width: 85%;
  height: 75%;
  border: none;
  background-color: #2658e2;
  display: flex;
`;

const HelpButtonLeft = styled.div`
  height: 100%;
  width: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HelpButtonMiddle = styled.div`
  height: 100%;
  width: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HelpButtonRight = styled.div`
  height: 100%;
  width: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FooterRight = styled.div`
  height: 100%;
  width: 85%;
  background-color: #e9edf1;
  z-index: 99;
  display: flex;
  border-top: 1px solid #999;
`;

const FooterRLeft = styled.div`
  height: 100%;
  width: 70%;
  display: flex;
  align-items: center;
  margin-left: 1%;
`;

const FooterRRight = styled.div`
  height: 100%;
  width: 30%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const FooterRRightContainer = styled.div`
  height: 100%;
  width: 200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #e9edf1;
  margin-right: 2%;
`;

const ReleaseNotesButton = styled.div`
  height: 60%;
  width: 50%;
  background-color: #f7bc01;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Footer = () => {
  return (
    <>
      <FooterContainer>
        <FooterLeft>
          <HelpButton>
            <HelpButtonLeft>
              <HelpCenterIcon />
            </HelpButtonLeft>
            <HelpButtonMiddle>
              <h5>Help Center</h5>
            </HelpButtonMiddle>
            <HelpButtonRight>
              <KeyboardArrowRightIcon />
            </HelpButtonRight>
          </HelpButton>
        </FooterLeft>
        <FooterRight>
          <FooterRLeft>
            <CopyrightIcon />
            <h5>2022 Health</h5>
          </FooterRLeft>
          <FooterRRight>
            <FooterRRightContainer>
              <ReleaseNotesButton>
                <h5>Release Notes</h5>
              </ReleaseNotesButton>
              <h5>Top</h5>
              <ArrowUpwardIcon />
            </FooterRRightContainer>
          </FooterRRight>
        </FooterRight>
      </FooterContainer>
    </>
  );
};

export default Footer;
