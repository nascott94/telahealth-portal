import React from 'react';
import styled from 'styled-components';
import Logosrc from '../media/logo.png';

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
  height: 15%;
  width: 100%;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const MiddlenewUserBox = styled.div`
  height: 55%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding-top: 30px;
  padding-bottom: 30px;
  background-color: white;
`;

const BottomNewUserBox = styled.div`
  height: 20%;
  width: 100%;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
`;

const Logo = styled.img`
  width: 130px;
  height: 30px;
  margin: 15px;
`;

const GenderContainer = styled.div`
  height: 25%;
  width: 90%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const IAgreeContainer = styled.div`
  height: 25%;
  width: 90%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
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
  background-color: orange;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PasswordResetContainer = styled.div`
  height: 25%;
  width: 90%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const NewUser = () => {
  return (
    <>
      <NewUserContainer>
        <NewUserBox>
          <TopNewUserBox>
            <Logo src={Logosrc} />
            <h4>Create a free account</h4>
          </TopNewUserBox>
          <MiddlenewUserBox>
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
            <GenderContainer>
              <h4>Gender</h4>
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
              <span>
                <input type="checkbox" />
              </span>
              <label class="checkmark">I Agree to all terms and polocies</label>
            </IAgreeContainer>
            <SignUpButtonContainer>
              <SignUpButton>Sign up</SignUpButton>
            </SignUpButtonContainer>
            <PasswordResetContainer>
              <h5>Password Reset</h5>
            </PasswordResetContainer>
          </BottomNewUserBox>
        </NewUserBox>
      </NewUserContainer>
    </>
  );
};

export default NewUser;
