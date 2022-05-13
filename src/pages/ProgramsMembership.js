import React from 'react';
import styled from 'styled-components';
import Navbar from '../components/homepage/Navbar';
import Sidebar from '../components/homepage/Sidebar';

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  background-color: #2658e2;
`;

const LeftContainer = styled.div`
  height: 100%;
  width: 15%;
  background-color: #2658e2;
`;

const RightContainer = styled.div`
  height: 100%;
  width: 85%;
  background-color: #eaedf1;
  display: flex;
  flex-direction: column;
`;

const RightMain = styled.div`
  height: 100vh;
  width: 100%;
  background-color: #eaedf1;
`;

const RightMainTop = styled.div`
  height: 15%;
  width: 100%;
  background-color: #f6f8f8;
  display: flex;
  overflow: hidden;
`;

const RightMainTopLeft = styled.div`
  height: 100%;
  width: 50%;
  padding-top: 20px;
  background-color: #f6f8f8;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 20px;
  border-bottom: 1px solid #999;

  .title {
    color: black;
    font-size: 25px;
  }

  .subtitle {
    color: #999;
    font-size: 15px;
  }
`;

const RightMainTopRight = styled.div`
  height: 100%;
  width: 50%;
  background-color: #f6f8f8;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  padding-right: 18px;
`;

const RightMainBottom = styled.div`
  height: 85%;
  width: 100%;
  background-color: #eaedf1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 30px;
`;

const RightMainBottomTabBar = styled.div`
  width: 95%;
  height: 7%;
  background-color: #eaedf1;
  display: flex;
`;

const RightMainBottomTabBox = styled.div`
  height: 100%;
  width: 15%;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const RightMainBottomBox1 = styled.div`
  width: 95%;
  height: 50%;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const RightMainBottomBox2 = styled.div`
  width: 95%;
  height: 80%;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const Box2Section1 = styled.div`
  width: 100%;
  height: 30%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 500px;
  border-bottom: 1px solid black;
`;

const Box2Section1SearchBar = styled.div`
  height: 40%;
  width: 20%;
  background-color: white;
  border: 1px solid black;
`;

const Box2Section1SearchBarOptionsBox = styled.div`
  height: 40%;
  width: 5%;
  background-color: orange;
  border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Box2Section2 = styled.div`
  width: 100%;
  height: 15%;
  display: flex;
  align-items: center;
  padding-left: 18px;
  border-bottom: 1px solid black;
  background-color: #eaedf1;
`;

const Box2Section3 = styled.div`
  width: 100%;
  height: 15%;
  background-color: white;
  display: flex;
`;

const Box2Section3Left = styled.div`
  width: 45%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 19px;
  padding-right: 150px;
  border-bottom: 1px solid black;
`;

const Box2Section3Right = styled.div`
  width: 45%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 150px;
  padding-right: 40px;
  border-bottom: 1px solid black;
`;

const Box2Section4 = styled.div`
  width: 100%;
  height: 15%;
  border-bottom: 1px solid black;
`;

const Box2Section5 = styled.div`
  width: 100%;
  height: 25%;
  background-color: white;
  display: flex;
  align-items: center;
  padding-left: 19px;
`;

const ProgramsMembership = () => {
  return (
    <>
      <Container>
        <LeftContainer>
          <Sidebar />
        </LeftContainer>
        <RightContainer>
          <Navbar></Navbar>
          <RightMain>
            <RightMainTop>
              <RightMainTopLeft>
                <div className="title">Programs and Memberships</div>
                <div className="subtitle">
                  Manage AZOVA Programs/Memberships
                </div>
              </RightMainTopLeft>
              <RightMainTopRight></RightMainTopRight>
            </RightMainTop>
            <RightMainBottom>
              <RightMainBottomTabBar>
                <RightMainBottomTabBox>
                  <h5>Programs and Memberships</h5>
                </RightMainBottomTabBox>
              </RightMainBottomTabBar>
              <RightMainBottomBox1>
                <RightMainBottomBox2>
                  <Box2Section1>
                    <Box2Section1SearchBar></Box2Section1SearchBar>
                    <Box2Section1SearchBarOptionsBox>
                      GO
                    </Box2Section1SearchBarOptionsBox>
                    <Box2Section1SearchBarOptionsBox>
                      CLEAR
                    </Box2Section1SearchBarOptionsBox>
                  </Box2Section1>
                  <Box2Section2>
                    <h5>
                      Program/Membership: To access your appointments, click
                      "View Program/Membership" below.{' '}
                    </h5>
                  </Box2Section2>
                  <Box2Section3>
                    <Box2Section3Left>
                      <h5>Test</h5>
                      <h5>Test</h5>
                      <h5>Test</h5>
                      <h5>Test</h5>
                    </Box2Section3Left>
                    <Box2Section3Right>
                      <h5>Test</h5>
                      <h5>Test</h5>
                      <h5>Test</h5>
                      <h5>Test</h5>
                    </Box2Section3Right>
                  </Box2Section3>
                  <Box2Section4></Box2Section4>
                  <Box2Section5>
                    <h5>showing 1- 0 of 0 items</h5>
                  </Box2Section5>
                </RightMainBottomBox2>
              </RightMainBottomBox1>
            </RightMainBottom>
          </RightMain>
        </RightContainer>
      </Container>
    </>
  );
};

export default ProgramsMembership;
