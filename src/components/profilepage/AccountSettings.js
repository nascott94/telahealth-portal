import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
  height: 500px;
  width: 98%;
  background-color: white;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  padding: 10px;
  overflow: scroll;
  border-top: 1px solid #ccc;
  color: grey;
`;

const HeaderContainer = styled.div`
  height: 100px;
  width: 100%;
  background-color: white;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #ccc;
  padding-top: 10px;
  padding-bottom: 12px;
  color: #2658e2;
  font-size: 28px;
`;

const PatientIDContainer = styled.div`
  height: 40px;
  width: 100%;
  background-color: white;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #ccc;
  padding-top: 12px;
  padding-bottom: 15px;
  font-size: 18px;
  color: black;
`;

const NameContainer = styled.div`
  height: 100px;
  width: 100%;
  display: flex;
  padding-top: 12px;
  border-bottom: 1px solid #ccc;
`;

const PhoneContainer = styled.div`
  height: 100px;
  width: 100%;
  display: flex;
  border-bottom: 1px solid #ccc;
  margin-bottom: 20px;
  padding-top: 12px;
`;

const NamePhoneLeft = styled.div`
  height: 70px;
  width: 33%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-bottom: 20px;
  font-size: 15px;
  font-weight: bold;

  .textInput {
    height: 18px;
    width: 300px;
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom: 1px solid grey;
    font-size: 15px;
  }
`;

const NamePhoneMiddle = styled.div`
  height: 70px;
  width: 33%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-bottom: 20px;
  font-size: 15px;
  font-weight: bold;
  .textInput {
    height: 18px;
    width: 300px;
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom: 1px solid grey;
    font-size: 15px;
  }
`;

const NamePhoneRight = styled.div`
  height: 70px;
  width: 33%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-bottom: 20px;
  font-size: 15px;
  font-weight: bold;

  .textInput {
    height: 18px;
    width: 300px;
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom: 1px solid grey;
    font-size: 15px;
  }
`;

const NationalityContainer = styled.div`
  height: 80px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-bottom: 1px solid #ccc;
  padding-top: 10px;
  padding-bottom: 20px;
  font-size: 15px;
  font-weight: bold;

  .folder {
    height: 35px;
    width: 440px;
    background-color: #eaedf1;
    border-top: none;
    border-right: none;
    border-left: none;
    border-bottom: 1px solid #ccc;
  }
`;

const EmailContainer = styled.div`
  height: 100px;
  width: 100%;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #ccc;
  font-size: 15px;
  font-weight: bold;
`;

const EmailLeft = styled.div`
  height: 100px;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 15px;
  font-weight: bold;

  .textInput {
    height: 18px;
    width: 300px;
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom: 1px solid grey;
  }
`;

const EmailRight = styled.div`
  height: 100px;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .textInput {
    height: 18px;
    width: 300px;
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom: 1px solid grey;
  }
`;

const LogInContainer = styled.div`
  height: 120px;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  border-bottom: 1px solid #ccc;
  padding-top: 20px;
  padding-bottom: 20px;
  font-size: 15px;
  font-weight: bold;

  .textInput {
    height: 18px;
    width: 300px;
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom: 1px solid grey;
  }
`;

const CountryContainer = styled.div`
  height: 200px;
  width: 100%;
  display: flex;
  border-bottom: 1px solid #ccc;
`;

const CountryLeft = styled.div`
  height: 100px;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 15px;
  font-weight: bold;

  .folder {
    height: 35px;
    width: 440px;
    background-color: #eaedf1;
    border-top: none;
    border-right: none;
    border-left: none;
    border-bottom: 1px solid #ccc;
  }
`;

const CountryRight = styled.div`
  height: 100px;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 15px;
  font-weight: bold;

  .folder {
    height: 35px;
    width: 440px;
    background-color: #eaedf1;
    border-top: none;
    border-right: none;
    border-left: none;
    border-bottom: 1px solid #ccc;
  }
`;

// const DropDownBox = styled.div`
//   width: 90%;
//   height: 30px;
//   border: 1px solid #ccc;
//   display: flex;
//   align-items: center;
// `;

const PassportContainer = styled.div`
  height: 200px;
  width: 100%;
  display: flex;
  border-bottom: 1px solid #ccc;
  font-size: 15px;
  font-weight: bold;
`;

const PassportLeft = styled.div`
  height: 100px;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 15px;
  font-weight: bold;

  .folder {
    height: 35px;
    width: 440px;
    background-color: #eaedf1;
    border-top: none;
    border-right: none;
    border-left: none;
    border-bottom: 1px solid #ccc;
  }
`;

const PassportRight = styled.div`
  height: 100px;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .folder {
    height: 35px;
    width: 440px;
    background-color: #eaedf1;
    border-top: none;
    border-right: none;
    border-left: none;
    border-bottom: 1px solid #ccc;
  }
`;

const CheckBoxContainer = styled.div`
  height: 100px;
  width: 100%;
  display: flex;
  align-items: center;
  padding-top: 20px;
  font-size: 15px;

  .input {
    margin-right: 10px;
    height: 30px;
  }
`;

const MFAContainer = styled.div`
  height: 100px;
  width: 100%;
  display: flex;
  border-bottom: 1px solid #ccc;
`;

const MFAContainerLeft = styled.div`
  height: 100px;
  width: 20%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 15px;
  font-weight: bold;
`;

const MFAPasswordButton = styled.button`
  height: 30px;
  width: 130px;
  margin-top: 5px;
  border-radius: 10px;
  border: none;
  background-color: #2658e2;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 13px;
  color: white;
  cursor: pointer;
`;

const MFAContainerRight = styled.div`
  height: 100px;
  width: 80%;
  display: flex;
  margin-top: 10px;
  flex-direction: column;
  justify-content: center;
  font-size: 13px;
  cursor: pointer;
`;

const DateOfBirthContainer = styled.div`
  height: 80px;
  width: 100%;
  margin-top: 10px;
  padding-bottom: 10px;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #ccc;
  font-size: 15px;
  font-weight: bold;
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

  .folder {
    height: 35px;
    width: 300px;
    background-color: #eaedf1;
    border-top: none;
    border-right: none;
    border-left: none;
    border-bottom: 1px solid #ccc;
  }
`;

const DateOfBirthContainerBottomMiddle = styled.div`
  height: 60px;
  width: 33.3%;
  display: flex;
  align-items: center;

  .folder {
    height: 35px;
    width: 300px;
    background-color: #eaedf1;
    border-top: none;
    border-right: none;
    border-left: none;
    border-bottom: 1px solid #ccc;
  }
`;

const DateOfBirthContainerBottomRight = styled.div`
  height: 60px;
  width: 33.3%;
  display: flex;
  align-items: center;

  .folder {
    height: 35px;
    width: 300px;
    background-color: #eaedf1;
    border-top: none;
    border-right: none;
    border-left: none;
    border-bottom: 1px solid #ccc;
  }
`;

const GenderPhotoIDContainer = styled.div`
  height: 200px;
  width: 100%;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #ccc;

  .folder {
    height: 35px;
    width: 240px;
    background-color: #eaedf1;
  }
`;

const GenderPhotoIDContainerLeft = styled.div`
  height: 150px;
  width: 30%;
  display: flex;
  flex-direction: column;
`;

const GenderPhotoIDContainerLeftTop = styled.div`
  height: 80px;
  width: 40%;
  display: flex;
  align-items: center;
  font-size: 15px;
  font-weight: bold;
`;

const GenderPhotoIDContainerLeftBottom = styled.div`
  height: 100px;
  width: 50%;
  display: flex;
  justify-content: space-between;
  margin-left: 30px;
`;

const GenderBubble = styled.div`
  width: 10px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-size: 14px;

  .bubble {
    padding-left: 5px;
  }
`;

const GenderPhotoIDContainerRight = styled.div`
  height: 150px;
  width: 50%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  font-size: 13px;

  .photo-id {
    font-size: 15px;
    font-weight: bold;
  }
`;

const UploadHeadshotContainer = styled.div`
  height: 150px;
  width: 100%;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #ccc;
`;

const UploadHeadshotContainerTop = styled.div`
  height: 30px;
  width: 100%;
  display: flex;
  align-items: center;
  font-size: 15px;
  font-weight: bold;
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

  .folder {
    height: 35px;
    width: 400px;
    background-color: #eaedf1;
    border-top: none;
    border-right: none;
    border-left: none;
    border-bottom: 1px solid #ccc;
  }
`;

const UploadHeadshotContainerBottomMiddle = styled.div`
  height: 90px;
  width: 25%;
  display: flex;
  align-items: center;

  .folder {
    height: 35px;
    width: 240px;
    background-color: #eaedf1;
    border-top: none;
    border-right: none;
    border-left: none;
    border-bottom: 1px solid #ccc;
  }
`;

const UploadHeadshotContainerBottomRight = styled.div`
  height: 90px;
  width: 25%;
  display: flex;
  align-items: center;

  .folder {
    height: 35px;
    width: 240px;
    background-color: #eaedf1;
    border-top: none;
    border-right: none;
    border-left: none;
    border-bottom: 1px solid #ccc;
  }
`;

const EmergencyContactContainer = styled.div`
  height: 300px;
  width: 100%;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #ccc;
`;

const EmergencyContactContainerTop = styled.div`
  height: 10px;
  width: 100%;
  display: flex;
  align-items: center;
  padding-top: 40px;
  font-size: 15px;
  font-weight: bold;
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
  justify-content: space-around;

  .textInput {
    height: 18px;
    width: 300px;
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom: 1px solid grey;
    font-size: 14px;
  }
`;

const EmergencyContactBottomMiddle = styled.div`
  height: 150px;
  width: 33.3%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  .textInput {
    height: 18px;
    width: 300px;
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom: 1px solid grey;
    font-size: 14px;
  }
`;

const EmergencyContactBottomRight = styled.div`
  height: 150px;
  width: 33.3%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-bottom: 108px;
  padding-top: 13px;

  .textInput {
    height: 18px;
    width: 300px;
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom: 1px solid grey;
    font-size: 14px;
  }
`;

// const EmergancyContactBox = styled.div`
//   height: 50%;
//   width: 90%;
//   display: flex;
//   align-items: center;
//   border-bottom: 1px solid #ccc;
// `;

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
  background-color: #2658e2;
  color: white;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AccountSettings = () => {
  return (
    <>
      <Container>
        <HeaderContainer>Account Settings</HeaderContainer>
        <PatientIDContainer>Patient ID : 678 045 234 1534</PatientIDContainer>
        <NameContainer>
          <NamePhoneLeft>
            <label for="fname">First Name:</label>
            <input
              className="textInput"
              type="text"
              id="fname"
              name="fname"
              placeholder="Olive"
            />
          </NamePhoneLeft>
          <NamePhoneMiddle>
            <label for="mname">Middle Initial:</label>
            <input className="textInput" type="text" id="mname" name="mname" />
          </NamePhoneMiddle>
          <NamePhoneRight>
            <label for="lname">Last Name:</label>
            <input
              className="textInput"
              type="text"
              id="lname"
              name="lname"
              placeholder="Scott"
            />
          </NamePhoneRight>
        </NameContainer>
        <PhoneContainer>
          <NamePhoneLeft>
            <label for="opname">Office Phone:</label>
            <input
              className="textInput"
              type="text"
              id="opname"
              name="opname"
            />
          </NamePhoneLeft>
          <NamePhoneMiddle>
            <label for="hpname">Home Phone</label>
            <input
              className="textInput"
              type="text"
              id="hpname"
              name="hpname"
            />
          </NamePhoneMiddle>
          <NamePhoneRight>
            <label for="faxname">Fax:</label>
            <input
              className="textInput"
              type="text"
              id="faxname"
              name="faxname"
            />
          </NamePhoneRight>
        </PhoneContainer>
        <NationalityContainer>
          <div>Nationality</div>
          <select name="folder" className="folder">
            <option value="1" selected="selected">
              Please Select Nationality
            </option>
          </select>
        </NationalityContainer>
        <EmailContainer>
          <EmailLeft>
            <label for="emailname">Email:</label>
            <input
              className="textInput"
              type="text"
              id="emailname"
              name="emailname"
            />
          </EmailLeft>
          <EmailRight>
            <label for="cellname">Cell Number:</label>
            <input
              className="textInput"
              type="text"
              id="cellname"
              name="cellname"
            />
          </EmailRight>
        </EmailContainer>
        <LogInContainer>
          <label for="username">Zappy Health UserName:</label>
          <input
            className="textInput"
            type="text"
            id="username"
            name="username"
          />
        </LogInContainer>
        <CountryContainer>
          <CountryLeft>
            <div>Country</div>
            <select name="folder" className="folder">
              <option value="1" selected="selected">
                Select Folder
              </option>
            </select>
          </CountryLeft>
          <CountryRight>
            <div>Time Zone</div>
            <select name="folder" className="folder">
              <option value="1" selected="selected">
                Select Folder
              </option>
            </select>
          </CountryRight>
        </CountryContainer>
        <PassportContainer>
          <PassportLeft>
            <div>Passport Or Citizen ID Number</div>
            <select name="folder" className="folder">
              <option value="1" selected="selected">
                Select Folder
              </option>
            </select>
          </PassportLeft>
          <PassportRight>
            <div>Language</div>
            <select name="folder" className="folder">
              <option value="1" selected="selected">
                Select Folder
              </option>
            </select>
          </PassportRight>
        </PassportContainer>
        <CheckBoxContainer>
          <input
            type="checkbox"
            id="vehicle1"
            name="vehicle1"
            value="Bike"
            className="input"
          ></input>
          <div>Require MFA for Login</div>
        </CheckBoxContainer>
        <MFAContainer>
          <MFAContainerLeft>
            <div>MFA Alternate Code:</div>
            <MFAPasswordButton>Change Password</MFAPasswordButton>
          </MFAContainerLeft>
          <MFAContainerRight>
            <div>Set-Up Multi Factor Authentification</div>
          </MFAContainerRight>
        </MFAContainer>
        <DateOfBirthContainer>
          <DateOfBirthContainerTop>
            <div>Date of Birth</div>
          </DateOfBirthContainerTop>
          <DateOfBirthContainerBottom>
            <DateOfBirthContainerBottomLeft>
              <select name="folder" className="folder">
                <option value="1" selected="selected">
                  Date
                </option>
              </select>
            </DateOfBirthContainerBottomLeft>
            <DateOfBirthContainerBottomMiddle>
              <select name="folder" className="folder">
                <option value="1" selected="selected">
                  Month
                </option>
              </select>
            </DateOfBirthContainerBottomMiddle>
            <DateOfBirthContainerBottomRight>
              <select name="folder" className="folder">
                <option value="1" selected="selected">
                  Year
                </option>
              </select>
            </DateOfBirthContainerBottomRight>
          </DateOfBirthContainerBottom>
        </DateOfBirthContainer>
        <GenderPhotoIDContainer>
          <GenderPhotoIDContainerLeft>
            <GenderPhotoIDContainerLeftTop>
              Gender
            </GenderPhotoIDContainerLeftTop>
            <GenderPhotoIDContainerLeftBottom>
              <GenderBubble>
                <input
                  type="radio"
                  id="html"
                  name="fav_language"
                  value="HTML"
                />
                <label className="bubble" for="html">
                  Male
                </label>
              </GenderBubble>
              <GenderBubble>
                <input
                  type="radio"
                  id="html"
                  name="fav_language"
                  value="HTML"
                />
                <label className="bubble" for="html">
                  Female
                </label>
              </GenderBubble>
              <GenderBubble>
                <input
                  type="radio"
                  id="html"
                  name="fav_language"
                  value="HTML"
                />
                <label className="bubble" for="html">
                  Other
                </label>
              </GenderBubble>
            </GenderPhotoIDContainerLeftBottom>
          </GenderPhotoIDContainerLeft>
          <GenderPhotoIDContainerRight>
            <div className="photo-id">Photo ID</div>
            <div>
              Attach a photo of the patient's (if over 18) or guardian's photo
              ID.
            </div>
            <select name="folder" className="folder">
              <option value="1" selected="selected">
                Select Folder
              </option>
            </select>
            <div>
              Only .jpeg, .jpg, .png, .gif files are allowed. File size should
              not be greater than 5MB.
            </div>
          </GenderPhotoIDContainerRight>
        </GenderPhotoIDContainer>
        <UploadHeadshotContainer>
          <UploadHeadshotContainerTop>
            Upload Headshot
          </UploadHeadshotContainerTop>
          <UploadHeadshotContainerBottom>
            <UploadHeadshotContainerBottomLeft>
              <select name="folder" className="folder">
                <option value="1" selected="selected">
                  Select File
                </option>
              </select>
            </UploadHeadshotContainerBottomLeft>
            <UploadHeadshotContainerBottomMiddle>
              <select name="folder" className="folder">
                <option value="1" selected="selected">
                  Select Race
                </option>
              </select>
            </UploadHeadshotContainerBottomMiddle>
            <UploadHeadshotContainerBottomRight>
              <select name="folder" className="folder">
                <option value="1" selected="selected">
                  Ethnicity
                </option>
              </select>
            </UploadHeadshotContainerBottomRight>
          </UploadHeadshotContainerBottom>
          <h5>File size should not be greater than 5MB.</h5>
        </UploadHeadshotContainer>
        <EmergencyContactContainer>
          <EmergencyContactContainerTop>
            Emergency Contact Information:
          </EmergencyContactContainerTop>
          <EmergencyContactContainerBottom>
            <EmergencyContactBottomLeft>
              {/* <label for="fname">First Name:</label> */}
              <input
                className="textInput"
                type="text"
                id="fname"
                name="fname"
                placeholder="First Name"
              />
              {/* <label for="hphonename">Home Phone:</label> */}
              <input
                className="textInput"
                type="text"
                id="hphonename"
                name="hphonename"
                placeholder="Home Phone"
              />
            </EmergencyContactBottomLeft>
            <EmergencyContactBottomMiddle>
              {/* <label for="lname">Last Name:</label> */}
              <input
                className="textInput"
                type="text"
                id="lname"
                name="lname"
                placeholder="Last Name"
              />
              {/* <label for="cpname">Cell Phone:</label> */}
              <input
                className="textInput"
                type="text"
                id="cpname"
                name="cpname"
                placeholder="Cell Phone"
              />
            </EmergencyContactBottomMiddle>
            <EmergencyContactBottomRight>
              {/* <label for="emailname">Email:</label> */}
              <br></br>
              <input
                className="textInput"
                type="text"
                id="emailname"
                name="emailname"
                placeholder="Email"
              />
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
