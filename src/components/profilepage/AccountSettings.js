import React from "react";
import styled from "@emotion/styled";

const Container = styled.div`
  height: 100%;
  width: 100%;
  background-color: orange;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

const HeaderContainer = styled.div`
  height: 10%;
  width: 100%;
  background-color: white;
  display: flex;
  align-items: center;
  border-bottom: 1px solid black;
`;

const PatientIDContainer = styled.div`
  height: 5%;
  width: 100%;
  background-color: white;
  display: flex;
  align-items: center;
  border-bottom: 1px solid black;
`;

const AccountSettings = () => {
  return (
    <>
      <Container>
        <HeaderContainer>
          <h1>Account Settings</h1>
        </HeaderContainer>
        <PatientIDContainer>
          <h3>Patient ID : 678 045 234 1534</h3>
        </PatientIDContainer>
      </Container>
    </>
  );
};

export default AccountSettings;
