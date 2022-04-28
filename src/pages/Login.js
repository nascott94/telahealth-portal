import React from "react";
import styled from "styled-components";
import Logosrc from "../media/logo.png";

const LoginContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: #f5f5f5;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoginBox = styled.div`
  height: 500px;
  width: 400px;
  background-color: white;
`;

const TopLoginBox = styled.div`
  height: 20%;
  width: 100%;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 30px;
`;

const MiddleLoginBox = styled.div`
  height: 25%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-top: 50px;
  margin-bottom: 50px;
`;

const BottomLoginBox = styled.div`
  height: 25%;
  width: 100%;
  background-color: White;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.img`
  width: 160px;
  height: 45px;
`;

const InputBox = styled.input.attrs({
  type: "input",
})`
  height: 45px;
  width: 80%;
  background-color: white;
  border: 0.5px solid grey;
  text-transform: uppercase;
  cursor: pointer;
  font-size: 10px;
`;

const IAgreeContainer = styled.div`
  height: 25px;
  width: 90%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LoginButton = styled.div`
  width: 82%;
  height: 40%;
  background-color: orange;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ResetOptions = styled.div`
  width: 82%;
  height: 40%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Login = () => {
  return (
    <>
      <div>
        <LoginContainer>
          <LoginBox>
            <TopLoginBox>
              <Logo src={Logosrc} />
            </TopLoginBox>
            <MiddleLoginBox>
              <InputBox placeholder="Email Address"></InputBox>
              <InputBox placeholder="Password"></InputBox>
            </MiddleLoginBox>
            <IAgreeContainer>
              <span>
                <input type="checkbox" />
              </span>
              <label class="checkmark">I Agree to all terms and polocies</label>
            </IAgreeContainer>
            <BottomLoginBox>
              <LoginButton>LOG IN</LoginButton>
              <ResetOptions>
                <h5>FORGET PASSWORD</h5>
                <h5>NEW USER? REGISTER</h5>
              </ResetOptions>
            </BottomLoginBox>
          </LoginBox>
        </LoginContainer>
      </div>
    </>
  );
};

export default Login;
