import React from "react";
import styled from "styled-components";

const LoginContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: grey;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoginBox = styled.div`
  height: 500px;
  width: 400px;
  background-color: pink;
`;

const TopLoginBox = styled.div`
  height: 30%;
  width: 100%;
  background-color: black;
`;

const MiddleLoginBox = styled.div`
  height: 45%;
  width: 100%;
`;

const BottomLoginBox = styled.div`
  height: 25%;
  width: 100%;
  background-color: black;
`;

const Login = () => {
  return (
    <>
      <div>
        <LoginContainer>
          <LoginBox>
            <TopLoginBox></TopLoginBox>
            <MiddleLoginBox></MiddleLoginBox>
            <BottomLoginBox></BottomLoginBox>
          </LoginBox>
        </LoginContainer>
      </div>
    </>
  );
};

export default Login;
