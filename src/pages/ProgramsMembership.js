import React from "react";
import styled from "styled-components";
import Navbar from "../components/homepage/Navbar";
import Sidebar from "../components/homepage/Sidebar";

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: row;
`;

const LeftContainer = styled.div`
  height: 100vh;
  width: 15%;
  background-color: blue;
`;

const RightContainer = styled.div`
  height: 100vh;
  width: 85%;
  background-color: white;
  display: flex;
  flex-direction: column;
`;

const RightMain = styled.div`
  height: 100vh;
  width: 100%;
  background-color: white;
`;

const RightMainTop = styled.div`
  height: 15%;
  width: 100%;
  background-color: blue;
  display: flex;
`;

const RightMainTopLeft = styled.div`
  height: 100%;
  width: 50%;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 5px;
  font-size: 18px;
  font-weight: bold;
  color: #999;
`;

const RightMainTopRight = styled.div`
  height: 100%;
  width: 50%;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  padding-right: 18px;
`;

const RightMainBottom = styled.div`
  height: 85%;
  width: 100%;
  background-color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 30px;
`;

const RightMainBottomTabBar = styled.div`
  width: 95%;
  height: 10%;
  background-color: green;
  display: flex;
`;

const RightMainBottomTabBox = styled.div`
  height: 100%;
  width: 15%;
  background-color: white;
`;

const RightMainBottomBox1 = styled.div`
  width: 95%;
  height: 50%;
  background-color: pink;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const RightMainBottomBox2 = styled.div`
  width: 95%;
  height: 80%;
  border: 5px solid red;
  display: flex;
  flex-direction: column;
`;

const Box2Section1 = styled.div`
  width: 100%;
  height: 30%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const Box2Section1SearchBar = styled.div`
  height: 50%;
  width: 20%;
  background-color: black;
  border: 1px solid black;
`;

const Box2Section1SearchBarOptionsBox = styled.div`
  height: 50%;
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
  padding-left: 40px;
  padding-right: 150px;
`;

const Box2Section3Right = styled.div`
  width: 45%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 150px;
  padding-right: 40px;
`;

const Box2Section4 = styled.div`
  width: 100%;
  height: 15%;
`;

const Box2Section5 = styled.div`
  width: 100%;
  height: 25%;
  background-color: white;
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
                <h3>Programs and Memberships</h3>
                <h5>Manage AZOVA Programs/Memberships</h5>
              </RightMainTopLeft>
              <RightMainTopRight></RightMainTopRight>
            </RightMainTop>
            <RightMainBottom>
              <RightMainBottomTabBar>
                <RightMainBottomTabBox></RightMainBottomTabBox>
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
                      "View Program/Membership" below.{" "}
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
                  <Box2Section5></Box2Section5>
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
