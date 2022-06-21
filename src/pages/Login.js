import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
// import Logosrc from '../media/zappi-logo.png';
import HealthLogo from '../media/health logo.png';

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
  width: 290px;
  height: 290px;
`;

const InputBox = styled.input.attrs({
  type: 'input',
})`
  height: 45px;
  width: 80%;
  background-color: white;
  border: 0.5px solid grey;
  text-transform: uppercase;
  cursor: pointer;
  font-size: 11px;
  padding-left: 9px;
  border-radius: 4px;
`;

const IAgreeContainer = styled.div`
  height: 15px;
  width: 90%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  color: #8f8f8f;

  .check-box {
    padding-right: 4px;
    padding-top: 2px;
  }
`;

const LoginButton = styled.button`
  width: 82%;
  height: 40%;
  background-color: #f7bc01;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  font-size: 15px;
  font-weight: bold;
  border: none;
  color: #292929;
  cursor: pointer;
  :hover {
    background-color: #f9d24d;
  }
`;

const ResetOptions = styled.div`
  width: 82%;
  height: 40%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 12px;

  button {
    border: none;
    background-color: white;
    cursor: pointer;
    color: #7a7a7a;
  }
`;

const Login = () => {
  return (
    <>
      <div>
        <LoginContainer>
          <LoginBox>
            <TopLoginBox>
              <Logo src={HealthLogo} />
            </TopLoginBox>
            <MiddleLoginBox>
              <InputBox placeholder="Email Address"></InputBox>
              <InputBox placeholder="Password"></InputBox>
            </MiddleLoginBox>
            <IAgreeContainer>
              <span className="check-box">
                <input type="checkbox" />
              </span>
              <label class="checkmark">
                I agree to all terms and policies.
              </label>
            </IAgreeContainer>
            <BottomLoginBox>
              <LoginButton>
                <Link to="/" style={{ textDecoration: 'none' }}>
                  LOG IN
                </Link>
              </LoginButton>
              <ResetOptions>
                <button>FORGET PASSWORD</button>
                <button>NEW USER? REGISTER</button>
              </ResetOptions>
            </BottomLoginBox>
          </LoginBox>
        </LoginContainer>
      </div>
    </>
  );
};

export default Login;
