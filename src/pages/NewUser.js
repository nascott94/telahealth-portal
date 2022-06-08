import React from 'react';
import styled from 'styled-components';
import Logosrc from '../media/zappi-logo.png';

const NewUserContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: #f5f5f5;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NewUserBox = styled.div`
  height: 90%;
  width: 300px;
`;

const TopNewUserBox = styled.div`
  height: 10%;
  width: 100%;
  padding-top: 20px;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Logo = styled.img`
  width: 240px;
  height: 290px;
`;

const MiddlenewUserBox = styled.div`
  height: 55%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding-top: 20px;
  padding-bottom: 20px;
  background-color: white;

  .title {
    font-size: 15px;
  }
`;

const BottomNewUserBox = styled.div`
  height: 20%;
  width: 100%;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .title {
    color: black;
    font-size: 13px;
  }
`;

const InputBox = styled.input.attrs({
  type: 'input',
})`
  height: 25px;
  width: 80%;
  background-color: white;
  border: 0.5px solid grey;
  text-transform: uppercase;
  cursor: pointer;
  font-size: 10px;
  padding-left: 8px;
  border-radius: 4px;
`;

const GenderContainer = styled.div`
  height: 25%;
  width: 90%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 12px;
  color: #8f8f8f;

  input {
    margin-right: -15px;
  }
`;

const IAgreeContainer = styled.div`
  height: 25%;
  width: 90%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  color: #292929;

  .check-box {
    padding-right: 4px;
    padding-top: 2px;
  }
`;

const SignUpButtonContainer = styled.div`
  height: 25%;
  width: 90%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SignUpButton = styled.div`
  width: 92%;
  height: 100%;
  background-color: #f7bc01;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  font-size: 14px;
  font-weight: bold;
  border: none;
  color: #292929;
  cursor: pointer;
  :hover {
    background-color: #f9d24d;
  }
`;

const PasswordResetContainer = styled.div`
  height: 25%;
  width: 90%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;

  button {
    border: none;
    background-color: white;
    cursor: pointer;
    color: #7a7a7a;
  }
`;

const NewUser = () => {
  return (
    <>
      <NewUserContainer>
        <NewUserBox>
          <TopNewUserBox>
            <Logo src={Logosrc} />
          </TopNewUserBox>
          <MiddlenewUserBox>
            <div className="title">Create a free account</div>
            <InputBox placeholder="Country"></InputBox>
            <InputBox placeholder="Time Zone"></InputBox>
            <InputBox placeholder="First Name"></InputBox>
            <InputBox placeholder="Last Name"></InputBox>
            <InputBox placeholder="Date Of Birth (MM-DD-YYYY)"></InputBox>
            <InputBox placeholder="Create Username"></InputBox>
            <InputBox placeholder="Email"></InputBox>
            <InputBox placeholder="Mobile Phone"></InputBox>
            <InputBox placeholder="Password"></InputBox>
            <InputBox placeholder="Confirm Password"></InputBox>
          </MiddlenewUserBox>
          <BottomNewUserBox>
            <div className="title">Gender</div>
            <GenderContainer>
              <input type="radio" />
              <label for="html">Male</label>
              <br></br>
              <input type="radio" />
              <label for="html">Female</label>
              <br></br>
              <input type="radio" />
              <label for="html">Other</label>
              <br></br>
            </GenderContainer>
            <IAgreeContainer>
              <span className="check-box">
                <input type="checkbox" />
              </span>
              <label class="checkmark">
                I agree to all terms and policies.
              </label>
            </IAgreeContainer>
            <SignUpButtonContainer>
              <SignUpButton>SIGN UP</SignUpButton>
            </SignUpButtonContainer>
            <PasswordResetContainer>
              <button>PASSWORD RESET</button>
            </PasswordResetContainer>
          </BottomNewUserBox>
        </NewUserBox>
      </NewUserContainer>
    </>
  );
};

export default NewUser;
