import React from "react";
import styled from "styled-components";

const NewUserContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: grey;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NewUserBox = styled.div`
  height: 90%;
  width: 300px;
  background-color: pink;
`;

const TopNewUserBox = styled.div`
  height: 20%;
  width: 100%;
  background-color: white;
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
`;

const BottomNewUserBox = styled.div`
  height: 25%;
  width: 100%;
  background-color: black;
`;

const InputBox = styled.input.attrs({
  type: "input",
})`
  height: 30px;
  width: 80%;
  background-color: white;
  border: 0.5px solid grey;
  text-transform: uppercase;
  cursor: pointer;
`;

const NewUser = () => {
  return (
    <>
      <NewUserContainer>
        <NewUserBox>
          <TopNewUserBox></TopNewUserBox>
          <MiddlenewUserBox>
            <InputBox placeholder="Country"></InputBox>
            <InputBox placeholder="Time Zone"></InputBox>
            <InputBox placeholder="First Name"></InputBox>
            <InputBox placeholder="Last Name"></InputBox>
            <InputBox placeholder="Date Of Birth (MM-DD-YYYY)"></InputBox>
            <InputBox placeholder="hello"></InputBox>
            <InputBox placeholder="hello"></InputBox>
            <InputBox placeholder="hello"></InputBox>
            <InputBox placeholder="hello"></InputBox>
            <InputBox placeholder="hello"></InputBox>
          </MiddlenewUserBox>
          <BottomNewUserBox></BottomNewUserBox>
        </NewUserBox>
      </NewUserContainer>
    </>
  );
};

export default NewUser;
