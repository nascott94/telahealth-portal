import React from "react";
import styled from "styled-components";
import Navbar from "../components/homepage/Navbar";
import Sidebar from "../components/homepage/Sidebar";

const Container = styled.div`
  height: 100%;
  width: 100vw;
  display: flex;
  flex-direction: row;
  background-color: #2658e2;
`;

const LeftContainer = styled.div`
  height: 100vh;
  width: 15%;
  background-color: #2658e2;
`;

const RightContainer = styled.div`
  height: 100%;
  width: 85%;
  background-color: white;
  display: flex;
  flex-direction: column;
`;

const RightMain = styled.div`
  height: 100%;
  width: 100%;
`;

const RightMainTop = styled.div`
  height: 100px;
  width: 100%;
  background-color: #f6f8f8;
  display: flex;
  overflow: hidden;
  border-bottom: 1px solid #ccc;
  padding-bottom: 27px;
`;

const RightMainTopLeft = styled.div`
  height: 100px;
  width: 50%;
  background-color: #f6f8f8;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 1.6%;
  color: #999;

  .title {
    color: black;
    font-size: 25px;
    padding-top: 20px;
  }

  .subtitle {
    color: #999;
    font-size: 15px;
    padding-left: 0.1%;
  }
`;

const RightMainTopRight = styled.div`
  height: 100px;
`;

const RightMainBottom = styled.div`
  height: 85%;
  width: 100%;
  background-color: #eaedf1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 20px;

  .patient {
    margin-right: auto;
    margin-left: 7.5%;
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
  height: 19%;
  padding-bottom: 10px;
  background-color: #f6f8f8;
  display: flex;
`;

const RightMainBottomContainer = styled.div`
  height: 100%;
  width: 85%;
  background-color: #eaedf1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 20px;
`;

const RightMainBottomSubTabBoxes = styled.div`
  width: 10%;
  height: 40px;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  clip-path: polygon(6% 0, 94% 0, 100% 14%, 100% 99%, 0 100%, 0 14%);
  margin-left: 3px;
  font-size: 13px;
`;
const CredentialsBox = styled.div`
  height: 200px;
  width: 100%;
  margin-bottom: 600px;
  background-color: white;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  -webkit-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
  box-shadow: 2px 4px 10px 1px rgba(201, 201, 201, 0.47);
`;

const CredentialsTop = styled.div`
  display: flex;
  height: 160px;
  width: 100%;
  padding-left: 15px;
  padding-top: 10px;
  margin-bottom: 50px;
`;

const CredentialsTopLeft = styled.div`
  height: 50%;
  width: 15%;
  display: flex;
  align-items: center;
  margin-top: 25px;
  img {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    margin-left: 10px;
  }
`;
const CredentialsTopRight = styled.div`
  height: 100px;
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
    padding-bottom: 2%;
    padding-left: 6px;
  }

  .title-sex {
    font-size: 14px;
    padding-left: 6px;
    color: #ffa500;
    display: flex;
    flex-direction: row-reverse;
  }

  .info-sex {
    font-size: 14px;
    padding-top: 2px;
    padding-left: 6px;
    display: flex;
    flex-direction: row-reverse;
  }
`;

const CredentialsTopRightTop = styled.div`
  height: 80%;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const CredentialsTopRightBottom = styled.div`
  height: 20%;
  width: 100%;
  display: flex;
  margin-top: 20px;

  .padding {
    padding-left: 27px;
  }
`;

const CredentialsMiddle = styled.div`
  display: flex;
  height: 800px;
  width: 100%;
  background-color: white;
  border-top: 1px solid #ccc;

  .patient {
    width: 1000px;
    height: 45px;
    border-right: none;
    border-left: none;
    border-top: none;
  }
`;

const CredentailsMiddleBox = styled.div`
  height: 19%;
  width: 97%;
  border-bottom: 1px solid black;
  display: flex;
  align-items: center;
`;

const CredentialsMiddleLeft = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 97%;
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
    padding-bottom: 10px;
    font-size: 15px;

    .icon {
      color: maroon;
    }
  }
`;

const CredentialsBottom = styled.div`
  display: flex;
  height: 20%;
  width: 100%;
  border-top: 1px solid rgb(231, 228, 228);
  margin-top: 10px;
`;
const CredentialsBottomLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 200px;
  width: 80%;
  background-color: pink;
  margin-top: -10px;

  .title {
    color: grey;
    font-weight: bold;
    padding-top: 10px;
    font-size: 15px;
  }

  .info {
    padding-top: 5px;
    font-size: 15px;
  }

  .temp {
    color: red;
  }

  .update-btn {
    border: none;
    width: 50%;
  }

  .patient {
    width: 500px;
  }
`;
const CredentialsBottomRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  width: 50%;
  background-color: white;
  margin-top: -10px;

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
                <div className="title">COVID Credentials</div>
                <div className="subtitle">
                  Manage and share your COVID-19 testing and immunity
                  documentation.
                </div>
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
                <option value="2">Leo Scott</option>
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
                      <CredentialsTopRightTop>
                        <div className="title">Name</div>
                        <div className="info">Olive Scott</div>
                        <div className="title">Email</div>
                        <div className="info">olivescott94@outlook.com</div>
                      </CredentialsTopRightTop>
                      <CredentialsTopRightBottom>
                        <div>
                          <div className="title">Date of Birth</div>
                          <div className="info">14 April 2020 </div>
                        </div>
                        <div className="padding">
                          <div className="title">Sex</div>
                          <div className="info">Female</div>
                        </div>
                      </CredentialsTopRightBottom>
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
                      <select name="patient" className="patient">
                        <option value="1" selected="selected">
                          Add/View COVID-19 Vaccination Record
                        </option>
                        <option value="2"></option>
                      </select>
                      <select name="patient" className="patient">
                        <option value="1" selected="selected">
                          Add/View COVID-19 Diagnostic Test Results
                        </option>
                        <option value="2"></option>
                      </select>
                      <select name="patient" className="patient">
                        <option value="1" selected="selected">
                          Add/View COVID-19 Antibody Testing
                        </option>
                        <option value="2"></option>
                      </select>
                    </CredentialsMiddleLeft>
                  </CredentialsMiddle>
                  <CredentialsBottom>
                    <CredentialsBottomLeft>
                      <div className="title">Add/View Vitals</div>
                      <div>
                        <select name="patient" className="patient">
                          <option value="1" selected="selected">
                            Fahrenheit
                          </option>
                          <option value="2">Celsius</option>
                        </select>
                        <select name="patient" className="patient">
                          <option value="1" selected="selected">
                            Temperature
                          </option>
                          <option value="2">Celsius</option>
                        </select>
                      </div>
                      <button className="update-btn">Update</button>
                    </CredentialsBottomLeft>
                    <CredentialsBottomRight></CredentialsBottomRight>
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
