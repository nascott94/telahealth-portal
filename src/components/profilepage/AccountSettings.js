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
  overflow: scroll;
`;

const HeaderContainer = styled.div`
  height: 100px;
  width: 100%;
  background-color: white;
  display: flex;
  align-items: center;
  border-bottom: 1px solid black;
`;

const PatientIDContainer = styled.div`
  height: 40px;
  width: 100%;
  background-color: white;
  display: flex;
  align-items: center;
  border-bottom: 1px solid black;
`;

const NameContainer = styled.div`
  height: 100px;
  width: 100%;
  display: flex;
  border-bottom: 1px solid black;
`;

const PhoneContainer = styled.div`
  height: 100px;
  width: 100%;
  display: flex;
  border-bottom: 1px solid black;
`;

const NamePhoneLeft = styled.div`
  height: 100px;
  width: 33%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const NamePhoneMiddle = styled.div`
  height: 100px;
  width: 33%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const NamePhoneRight = styled.div`
  height: 100px;
  width: 33%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const NationalityContainer = styled.div`
  height: 80px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-bottom: 1px solid black;
`;

const EmailContainer = styled.div`
  height: 100px;
  width: 100%;
  display: flex;
  align-items: center;
  border-bottom: 1px solid black;
`;

const EmailLeft = styled.div`
  height: 100px;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const EmailRight = styled.div`
  height: 100px;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const LogInContainer = styled.div`
  height: 120px;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  border-bottom: 1px solid black;
`;

const CountryContainer = styled.div`
  height: 200px;
  width: 100%;
  display: flex;
  border-bottom: 1px solid black;
`;

const CountryLeft = styled.div`
  height: 100px;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const CountryRight = styled.div`
  height: 100px;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const DropDownBox = styled.div`
  width: 90%;
  height: 30%;
  border: 1px solid black;
  display: flex;
  align-items: center;
`;

const PassportContainer = styled.div`
  height: 200px;
  width: 100%;
  display: flex;
  border-bottom: 1px solid black;
`;

const PassportLeft = styled.div`
  height: 100px;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const PassportRight = styled.div`
  height: 100px;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const RequireMFAContainer = styled.div`
  height: 80px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const MFAContainer = styled.div`
  height: 100px;
  width: 100%;
  display: flex;
  border-bottom: 1px solid black;
`;

const MFAContainerLeft = styled.div`
  height: 100px;
  width: 20%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const MFAPasswordButton = styled.div`
  height: 30px;
  width: 100px;
  border-radius: 10px;
  background-color: blue;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MFAContainerRight = styled.div`
  height: 100px;
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
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
        <NameContainer>
          <NamePhoneLeft>
            <h4>First Name:</h4>
            <h5>Nat Scott</h5>
          </NamePhoneLeft>
          <NamePhoneMiddle>
            <h4>Middle Name:</h4>
            <h5>Nat Scott</h5>
          </NamePhoneMiddle>
          <NamePhoneRight>
            <h4>Last Name:</h4>
            <h5>Nat Scott</h5>
          </NamePhoneRight>
        </NameContainer>
        <PhoneContainer>
          <NamePhoneLeft>
            <h4>Office Phone:</h4>
            <h5>453-987-1324</h5>
          </NamePhoneLeft>
          <NamePhoneMiddle>
            <h4>Home Phone:</h4>
            <h5>+1</h5>
          </NamePhoneMiddle>
          <NamePhoneRight>
            <h4>Fax</h4>
            <h5></h5>
          </NamePhoneRight>
        </PhoneContainer>
        <NationalityContainer>
          <h4>Nationality</h4>
          <h5>Please Select Nationality</h5>
        </NationalityContainer>
        <EmailContainer>
          <EmailLeft>
            <h4>Email:</h4>
            <h5>NatScott@gmail.com</h5>
          </EmailLeft>
          <EmailRight>
            <h4>Phone Number:</h4>
            <h5>784-323-5342</h5>
          </EmailRight>
        </EmailContainer>
        <LogInContainer>
          <h4>ZAPPY HEALTH Username</h4>
          <h5>Natfirech</h5>
        </LogInContainer>
        <CountryContainer>
          <CountryLeft>
            <h4>Country</h4>
            <DropDownBox>Please Select</DropDownBox>
          </CountryLeft>
          <CountryRight>
            <h4>Time Zone</h4>
            <DropDownBox>Please Select</DropDownBox>
          </CountryRight>
        </CountryContainer>
        <PassportContainer>
          <PassportLeft>
            <h4>Passport Or Citizen ID Number</h4>
            <DropDownBox></DropDownBox>
          </PassportLeft>
          <PassportRight>
            <h4>Language</h4>
            <DropDownBox>Please Select</DropDownBox>
          </PassportRight>
        </PassportContainer>
        <RequireMFAContainer>
          <h4>Require MFA for Login</h4>
        </RequireMFAContainer>
        <MFAContainer>
          <MFAContainerLeft>
            <h4>MFA Alternate Code:</h4>
            <MFAPasswordButton>Hello</MFAPasswordButton>
          </MFAContainerLeft>
          <MFAContainerRight>
            <h5>Set-Up Multi Factor Authentification</h5>
          </MFAContainerRight>
        </MFAContainer>
      </Container>
    </>
  );
};

export default AccountSettings;
