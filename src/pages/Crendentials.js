import React from 'react';
import styled from 'styled-components';
import Navbar from '../components/homepage/Navbar';
import Sidebar from '../components/homepage/Sidebar';

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: row;
`;

const LeftContainer = styled.div`
  height: 100vh;
  width: 15%;
`;

const RightContainer = styled.div`
  height: 100vh;
  width: 85%;
  background-color: white;
  display: flex;
  flex-direction: column;
`;

const RightMain = styled.div`
  height: 100vh;
  width: 100%;
`;

const RightMainTop = styled.div`
  height: 15%;
  width: 100%;
  background-color: white;
  display: flex;
`;

const RightMainTopLeft = styled.div`
  height: 100%;
  width: 100%;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 5px;
  font-size: 18px;
  font-weight: bold;
  color: #999;
`;

const RightMainTopRight = styled.div`
  height: 100%;
`;

const RightMainBottom = styled.div`
  height: 85%;
  width: 100%;
  background-color: #eaedf1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .patient {
    margin-right: auto;
    margin-left: 110px;
    margin-bottom: 20px;
    width: 35%;
    font-size: 15px;
    padding: 10px 100px 10px 10px;
    background: #fff;
    border: 1px solid #ccc;
    border-radius: 6px;
  }
`;

const RightMainBottomMainTabs = styled.div`
  width: 85%;
  height: 7%;
  background-color: #f6f8f8;
  display: flex;
`;

const RightMainBottomContainer = styled.div`
  height: 75%;
  width: 85%;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const RightMainBottomSubTabBoxes = styled.div`
  width: 10%;
  height: 100%;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  clip-path: polygon(6% 0, 94% 0, 100% 14%, 100% 99%, 0 100%, 0 14%);
  margin-left: 1px;
  font-size: 13px;
`;
const CredentialsBox = styled.div`
  height: 100%;
  width: 100%;
  background-color: white;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  -webkit-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
  box-shadow: 2px 4px 10px 1px rgba(201, 201, 201, 0.47);
`;

const CredentialsTop = styled.div`
  display: flex;
  height: 40%;
  width: 100%;
  padding-left: 15px;
  padding-top: 10px;
`;

const CredentialsTopLeft = styled.div`
  height: 100%;
  width: 15%;
  display: flex;
  align-items: center;

  img {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    margin-left: 10px;
  }
`;
const CredentialsTopRight = styled.div`
  height: 100%;
  width: 85%;
  padding-top: 5px;

  .title {
    font-size: 14px;
    padding-left: 6px;
    color: #ffa500;
  }

  .info {
    font-size: 14px;
    padding-top: 2px;
    padding-left: 6px;
  }
`;

const CredentialsMiddle = styled.div`
  display: flex;
  height: 40%;
  width: 100%;
  background-color: white;
`;

const CredentialsMiddleLeft = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 60%;
  padding-top: 20px;
  padding-left: 15px;

  .title {
    color: grey;
    font-weight: bold;
    padding-top: 10px;
    font-size: 15px;
  }

  .info {
    padding-top: 5px;
    font-size: 15px;

    .icon {
      color: maroon;
    }
  }
`;
const CredentialsMiddleRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 40%;
`;

const CredentialsBottom = styled.div`
  display: flex;
  height: 20%;
  width: 100%;
  border-top: 1px solid rgb(231, 228, 228);
`;
const CredentialsBottomLeft = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 50%;
  background-color: white;
`;
const CredentialsBottomRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 50%;

  button {
    border: none;
    width: 100%;
    height: 100%;
    background-color: transparent;
    font-size: 15px;
    cursor: pointer;
    :hover {
      background-color: #fafafa;
      transition: 0.1s;
    }
  }
`;
const Crendentials = () => {
  return (
    <>
      <Container>
        <LeftContainer>
          <Sidebar />
        </LeftContainer>
        <RightContainer>
          <Navbar></Navbar>
          <RightMain>
            <RightMainTop>
              <RightMainTopLeft>
                <h3>COVID Credentials</h3>
                <h5>
                  Manage and share your COVID-19 testing and immunity
                  documentation.
                </h5>
              </RightMainTopLeft>
              <RightMainTopRight>
                <RightMainBottomMainTabs></RightMainBottomMainTabs>
              </RightMainTopRight>
            </RightMainTop>
            <RightMainBottom>
              <select name="patient" className="patient">
                <option value="1" selected="selected">
                  Olive Scott (self)
                </option>
                <option value="2" selected="selected">
                  Leo Scott
                </option>
              </select>
              <RightMainBottomMainTabs>
                <RightMainBottomSubTabBoxes>
                  COVID Credentials
                </RightMainBottomSubTabBoxes>
                <RightMainBottomSubTabBoxes>
                  COVID Assessment
                </RightMainBottomSubTabBoxes>
                <RightMainBottomSubTabBoxes>Share</RightMainBottomSubTabBoxes>
                <RightMainBottomSubTabBoxes>
                  Travel Clearance
                </RightMainBottomSubTabBoxes>
              </RightMainBottomMainTabs>
              <RightMainBottomContainer>
                <CredentialsBox>
                  <CredentialsTop>
                    <CredentialsTopLeft>
                      <img
                        src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                        alt="pic"
                      />
                    </CredentialsTopLeft>
                    <CredentialsTopRight>
                      <div className="title">Name</div>
                      <div className="info">Olive Scott</div>
                      <div className="title">Email</div>
                      <div className="info">olivescott94@outlook.com</div>
                      <div className="title">Date of Birth</div>
                      <div className="info">14 April 2020</div>
                      <div className="title">Sex</div>
                      <div className="info">Female</div>
                    </CredentialsTopRight>
                    <CredentialsTopRight>
                      <div className="title">Photo ID</div>
                      <div className="info">Not Set</div>
                    </CredentialsTopRight>
                  </CredentialsTop>
                  <CredentialsMiddle>
                    <CredentialsMiddleLeft>
                      <div className="title">COVID Credentials</div>
                      <div className="info">
                        The following information will be used to create your
                        COVID Credentials, your shareable digital health pass.
                      </div>
                      <div>Add/View COVID-19 Vaccination Record</div>
                      <div>Add/View COVID-19 Diagnostic Test Results</div>
                      <div>Add/View COVID-19 Antibody Testing</div>
                    </CredentialsMiddleLeft>
                    <CredentialsMiddleRight></CredentialsMiddleRight>
                  </CredentialsMiddle>
                  <CredentialsBottom>
                    <div className="title">Add/View Vitals</div>
                    <CredentialsBottomLeft>
                      <select name="patient" className="patient">
                        <option value="1" selected="selected">
                          Fahrenheit
                        </option>
                        <option value="2" selected="selected">
                          Celsius
                        </option>
                      </select>
                      <button>Update</button>
                    </CredentialsBottomLeft>
                    <CredentialsBottomRight>
                      <input
                        type="text"
                        id="name"
                        placeholder="Temperature"
                      ></input>
                    </CredentialsBottomRight>
                  </CredentialsBottom>
                </CredentialsBox>
              </RightMainBottomContainer>
            </RightMainBottom>
          </RightMain>
        </RightContainer>
      </Container>
    </>
  );
};

export default Crendentials;
