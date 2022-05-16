import React from "react";
import styled from "@emotion/styled";

const Container = styled.div`
  height: 500px;
  width: 98%;
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
  height: 30px;
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

const CheckBoxContainer = styled.div`
  height: 100px;
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

const DateOfBirthContainer = styled.div`
  height: 80px;
  width: 100%;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid black;
`;

const DateOfBirthContainerTop = styled.div`
  height: 30px;
  width: 100%;
  display: flex;
  align-items: center;
`;

const DateOfBirthContainerBottom = styled.div`
  height: 50px;
  width: 100%;
  display: flex;
  align-items: center;
`;

const DateOfBirthContainerBottomLeft = styled.div`
  height: 60px;
  width: 33.3%;
  display: flex;
  align-items: center;
`;

const DateOfBirthContainerBottomMiddle = styled.div`
  height: 60px;
  width: 33.3%;
  display: flex;
  align-items: center;
`;

const DateOfBirthContainerBottomRight = styled.div`
  height: 60px;
  width: 33.3%;
  display: flex;
  align-items: center;
`;

const GenderPhotoIDContainer = styled.div`
  height: 200px;
  width: 100%;
  display: flex;
  align-items: center;
  border-bottom: 1px solid black;
`;

const GenderPhotoIDContainerLeft = styled.div`
  height: 140px;
  width: 30%;
  display: flex;
  flex-direction: column;
`;

const GenderPhotoIDContainerLeftTop = styled.div`
  height: 80px;
  width: 40%;
  display: flex;
  align-items: center;
`;

const GenderPhotoIDContainerLeftBottom = styled.div`
  height: 100px;
  width: 40%;
  display: flex;
  justify-content: space-around;
`;

const GenderBubble = styled.div`
  width: 30px;
  height: 30px;
  display: flex;
`;

const GenderPhotoIDContainerRight = styled.div`
  height: 200px;
  width: 50%;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const UploadHeadshotContainer = styled.div`
  height: 150px;
  width: 100%;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid black;
`;

const UploadHeadshotContainerTop = styled.div`
  height: 30px;
  width: 100%;
  display: flex;
  align-items: center;
`;

const UploadHeadshotContainerBottom = styled.div`
  height: 50px;
  width: 100%;
  display: flex;
  align-items: center;
`;

const UploadHeadshotContainerBottomLeft = styled.div`
  height: 90px;
  width: 50%;
  display: flex;
  align-items: center;
`;

const UploadHeadshotContainerBottomMiddle = styled.div`
  height: 90px;
  width: 25%;
  display: flex;
  align-items: center;
`;

const UploadHeadshotContainerBottomRight = styled.div`
  height: 90px;
  width: 25%;
  display: flex;
  align-items: center;
`;

const EmergencyContactContainer = styled.div`
  height: 400px;
  width: 100%;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid black;
`;

const EmergencyContactContainerTop = styled.div`
  height: 50px;
  width: 100%;
  display: flex;
  align-items: center;
`;

const EmergencyContactContainerBottom = styled.div`
  height: 170px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const EmergencyContactBottomLeft = styled.div`
  height: 150px;
  width: 33.3%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const EmergencyContactBottomMiddle = styled.div`
  height: 150px;
  width: 33.3%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const EmergencyContactBottomRight = styled.div`
  height: 150px;
  width: 33.3%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const EmergancyContactBox = styled.div`
  height: 50%;
  width: 90%;
  display: flex;
  align-items: center;
  border-bottom: 1px solid black;
`;

const UpdateButtonContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  align-items: center;
`;

const ButtonContainer = styled.div`
  height: 70px;
  width: 98%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const UpdateButton = styled.div`
  height: 40px;
  width: 80px;
  background-color: blue;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
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
        <CheckBoxContainer>
          <h4>Require MFA for Login</h4>
        </CheckBoxContainer>
        <MFAContainer>
          <MFAContainerLeft>
            <h4>MFA Alternate Code:</h4>
            <MFAPasswordButton>Hello</MFAPasswordButton>
          </MFAContainerLeft>
          <MFAContainerRight>
            <h5>Set-Up Multi Factor Authentification</h5>
          </MFAContainerRight>
        </MFAContainer>
        <DateOfBirthContainer>
          <DateOfBirthContainerTop>
            <h4>Date of Birth</h4>
          </DateOfBirthContainerTop>
          <DateOfBirthContainerBottom>
            <DateOfBirthContainerBottomLeft>
              <DropDownBox></DropDownBox>
            </DateOfBirthContainerBottomLeft>
            <DateOfBirthContainerBottomMiddle>
              <DropDownBox></DropDownBox>
            </DateOfBirthContainerBottomMiddle>
            <DateOfBirthContainerBottomRight>
              <DropDownBox></DropDownBox>
            </DateOfBirthContainerBottomRight>
          </DateOfBirthContainerBottom>
        </DateOfBirthContainer>
        <GenderPhotoIDContainer>
          <GenderPhotoIDContainerLeft>
            <GenderPhotoIDContainerLeftTop>
              <h4>Gender</h4>
            </GenderPhotoIDContainerLeftTop>
            <GenderPhotoIDContainerLeftBottom>
              <GenderBubble>
                <input type="radio" name="food" /> : Italian
                <br />
              </GenderBubble>
              <GenderBubble>
                <input type="radio" name="food" /> : Italian
                <br />
              </GenderBubble>
              <GenderBubble>
                <input type="radio" name="food" /> : Italian
                <br />
              </GenderBubble>
            </GenderPhotoIDContainerLeftBottom>
          </GenderPhotoIDContainerLeft>
          <GenderPhotoIDContainerRight>
            <h4>Photo ID</h4>
            <h5>
              Attach a photo of the patient's (if over 18) or guardian's photo
              ID.
            </h5>
            <h2>Choose File</h2>
            <h4>Capture Using Webcam</h4>
            <h5>
              Only .jpeg, .jpg, .png, .gif files are allowed. File size should
              not be greater than 5MB.
            </h5>
          </GenderPhotoIDContainerRight>
        </GenderPhotoIDContainer>
        <UploadHeadshotContainer>
          <UploadHeadshotContainerTop>
            <h4>Upload Headshot</h4>
          </UploadHeadshotContainerTop>
          <UploadHeadshotContainerBottom>
            <UploadHeadshotContainerBottomLeft>
              <DropDownBox>Choose file</DropDownBox>
            </UploadHeadshotContainerBottomLeft>
            <UploadHeadshotContainerBottomMiddle>
              <DropDownBox>Choose file</DropDownBox>
            </UploadHeadshotContainerBottomMiddle>
            <UploadHeadshotContainerBottomRight>
              <DropDownBox>Choose file</DropDownBox>
            </UploadHeadshotContainerBottomRight>
          </UploadHeadshotContainerBottom>
          <h5>File size should not be greater than 5MB.</h5>
        </UploadHeadshotContainer>
        <EmergencyContactContainer>
          <EmergencyContactContainerTop>
            <h4>Emergency Contact Information :</h4>
          </EmergencyContactContainerTop>
          <EmergencyContactContainerBottom>
            <EmergencyContactBottomLeft>
              <EmergancyContactBox>First Name</EmergancyContactBox>
              <EmergancyContactBox>Home Phone</EmergancyContactBox>
            </EmergencyContactBottomLeft>
            <EmergencyContactBottomMiddle>
              <EmergancyContactBox>Last Name</EmergancyContactBox>
              <EmergancyContactBox>Cell Phone</EmergancyContactBox>
            </EmergencyContactBottomMiddle>
            <EmergencyContactBottomRight>
              <EmergancyContactBox>Email</EmergancyContactBox>
            </EmergencyContactBottomRight>
          </EmergencyContactContainerBottom>
        </EmergencyContactContainer>
        <UpdateButtonContainer>
          <ButtonContainer>
            <UpdateButton>Update</UpdateButton>
          </ButtonContainer>
        </UpdateButtonContainer>
      </Container>
    </>
  );
};

export default AccountSettings;
