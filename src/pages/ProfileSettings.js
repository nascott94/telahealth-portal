import React from "react";
import styled from "styled-components";
import Navbar from "../components/homepage/Navbar";
import Sidebar from "../components/homepage/Sidebar";

const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: row;
`;

const LeftContainer = styled.div`
  height: 100vh;
  width: 15%;
  background-color: blue;
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
  display: flex;
  flex-direction: column;
`;

const ProfileSettings = () => {
  return (
    <>
      <Container>
        <LeftContainer>
          <Sidebar></Sidebar>
        </LeftContainer>
        <RightContainer>
          <Navbar></Navbar>
          <RightMain></RightMain>
        </RightContainer>
      </Container>
    </>
  );
};

export default ProfileSettings;
