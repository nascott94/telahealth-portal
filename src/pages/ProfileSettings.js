import React from "react";
import styled from "styled-components";
import Navbar from "../components/homepage/Navbar";
import Sidebar from "../components/homepage/Sidebar";

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
`;

const LeftContainer = styled.div`
  height: 100%;
  width: 15%;
  background-color: blue;
`;

const RightContainer = styled.div`
  height: 100vh;
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

const RightMainTop = styled.div`
  height: 20vh;
  width: 100%;
  background-color: pink;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 5%;
`;

const Pic = styled.div`
  height: 12vh;
  width: 7%;
  background-color: black;
  margin-right: 2%;
`;

const RightMainBottomComponentContainer = styled.div`
  height: 90vh;
  width: 90%;
  background-color: green;
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
          <RightMain>
            <RightMainTop>
              <Pic></Pic>
              <h1>Nat Scott</h1>
            </RightMainTop>
            <RightMainBottomComponentContainer></RightMainBottomComponentContainer>
          </RightMain>
        </RightContainer>
      </Container>
    </>
  );
};

export default ProfileSettings;
