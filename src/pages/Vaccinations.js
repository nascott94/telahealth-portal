import React from "react";
import styled from "styled-components";
import Navbar from "../components/homepage/Navbar";
import Sidebar from "../components/homepage/Sidebar";

const Container = styled.div`
  height: 100%;
  width: 100vw;
  display: flex;
  flex-direction: row;
`;

const LeftContainer = styled.div`
  height: 100%;
  width: 15%;
  background-color: blue;
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
  background-color: blue;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const RightMainTop = styled.div`
  height: 140px;
  width: 100%;
  background-color: #f6f8f8;
  display: flex;
  overflow: hidden;
`;

const RightMainTopLeft = styled.div`
  height: 100%;
  width: 50%;
  background-color: #f6f8f8;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 19px;
  font-size: 18px;
  font-weight: bold;
  color: #999;
`;

const RightMainTopRight = styled.div`
  height: 100%;
  width: 50%;
  background-color: #f6f8f8;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  padding-right: 18px;
`;

const RightMainBottom = styled.div`
  height: 85%;
  width: 100%;
  background-color: #eaedf1;
`;

const MainTop = styled.div`
  height: 500px;
  width: 100%;
  background-color: #eaedf1;
  display: flex;
  margin-top: 80px;
  justify-content: center;
  overflow: hidden;
`;

const MainTopContainer = styled.div`
  width: 95%;
  height: 95%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const MainTopTop = styled.div`
  height: 13%;
  width: 100%;
  background-color: white;
  display: flex;
  align-items: center;
  border-radius: 5px;
`;

const MainTopTopBoxes = styled.div`
  height: 35px;
  width: 120px;
  background-color: white;
  margin-left: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  border-radius: 5px;
`;

const MainTopMiddle = styled.div`
  height: 10%;
  width: 100%;
  background-color: white;
  display: flex;
  align-items: center;
`;

const MainTopBottom = styled.div`
  height: 40%;
  width: 100%;
  background-color: White;
  display: flex;
`;

const MainTopBottomLeft = styled.div`
  height: 100%;
  width: 10%;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MainTopBottomMiddle = styled.div`
  height: 100%;
  width: 15%;
`;

const MainTopBottom1 = styled.div`
  height: 33.3%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const MainTopBottom2 = styled.div`
  height: 33.3%;
  width: 100%;
`;

const MainTopBottom3 = styled.div`
  height: 33.3%;
  width: 100%;
  display: flex;
`;

const MainTopBottom3Left = styled.div`
  height: 100%;
  width: 50%;
`;

const MainTopBottom3Right = styled.div`
  height: 100%;
  width: 50%;
`;

const MainTopBottomRight = styled.div`
  height: 100%;
  width: 75%;
  background-color: white;
  display: flex;
`;

const MainTopFooter = styled.div`
  height: 8%;
  width: 100%;
  background-color: #f6f8f8;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 5px;
`;

const MainMiddle = styled.div`
  height: 1000px;
  width: 100%;
  background-color: pink;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MainMiddleTop = styled.div`
  height: 10%;
  width: 100%;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MainMiddleVacinesContainer = styled.div`
  height: 70%;
  width: 60%;
  background-color: black;
  margin-top: 80px;
  display: flex;
  flex-direction: column;
  padding-left: 5px;
  padding-right: 5px;
`;

const MainMiddleVacinesBoxes = styled.div`
  height: 35px;
  width: 100%;
  background-color: white;
  border-radius: 5px;
  margin-top: 5px;
`;

const MainBottom = styled.div`
  height: 500px;
  width: 100%;
  background-color: white;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const MainBottomTop = styled.div`
  height: 15%;
  width: 100%;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const MainBottomTravelVacineContainer = styled.div`
  height: 50%;
  width: 60%;
  background-color: black;
  margin-top: 80px;
  display: flex;
  flex-direction: column;
  padding-left: 5px;
  padding-right: 5px;
`;

const Button = styled.div`
  width: 30%;
  height: 10%;
  padding: 17px;
  background-color: orange;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;

const Vaccinations = () => {
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
                <h3>Create Your Online Vaccination Record</h3>
              </RightMainTopLeft>
              <RightMainTopRight>
                <Button>Vacination Button</Button>
              </RightMainTopRight>
            </RightMainTop>
            <RightMainBottom>
              <MainTop>
                <MainTopContainer>
                  <MainTopTop>
                    <MainTopTopBoxes>
                      <h5>Update Info</h5>
                    </MainTopTopBoxes>
                    <MainTopTopBoxes>
                      <h5>Add New Patient</h5>
                    </MainTopTopBoxes>
                    <MainTopTopBoxes>
                      <h5>Forecasting</h5>
                    </MainTopTopBoxes>
                    <MainTopTopBoxes>
                      <h5>Share</h5>
                    </MainTopTopBoxes>
                    <MainTopTopBoxes>
                      <h5>Manage Records</h5>
                    </MainTopTopBoxes>
                  </MainTopTop>
                  <MainTopMiddle>
                    <MainTopTopBoxes>
                      <h5>Patient Name:</h5>
                    </MainTopTopBoxes>
                    <MainTopTopBoxes></MainTopTopBoxes>
                  </MainTopMiddle>
                  <MainTopBottom>
                    <MainTopBottomLeft>
                      <h5>Image</h5>
                    </MainTopBottomLeft>
                    <MainTopBottomMiddle>
                      <MainTopBottom1>
                        <h5>Name</h5>
                        <h5>Nat Scott</h5>
                      </MainTopBottom1>
                      <MainTopBottom2>
                        <h5>Email</h5>
                        <h5>NatScott@Gmail.com</h5>
                      </MainTopBottom2>
                      <MainTopBottom3>
                        <MainTopBottom3Left>
                          <h5>Date of Birth</h5>
                          <h5>20 Jan 1990</h5>
                        </MainTopBottom3Left>
                        <MainTopBottom3Right>
                          <h5>Sex</h5>
                          <h5>Female</h5>
                        </MainTopBottom3Right>
                      </MainTopBottom3>
                    </MainTopBottomMiddle>
                    <MainTopBottomRight></MainTopBottomRight>
                  </MainTopBottom>
                  <MainTopFooter>
                    <h3>one</h3>
                    <h3>Two</h3>
                    <h3>Three</h3>
                  </MainTopFooter>
                </MainTopContainer>
              </MainTop>
              <MainMiddle>
                <MainMiddleTop>
                  <h3>Vaccines</h3>
                </MainMiddleTop>
                <MainMiddleVacinesContainer>
                  <MainMiddleVacinesBoxes></MainMiddleVacinesBoxes>
                  <MainMiddleVacinesBoxes></MainMiddleVacinesBoxes>
                  <MainMiddleVacinesBoxes></MainMiddleVacinesBoxes>
                  <MainMiddleVacinesBoxes></MainMiddleVacinesBoxes>
                  <MainMiddleVacinesBoxes></MainMiddleVacinesBoxes>
                  <MainMiddleVacinesBoxes></MainMiddleVacinesBoxes>
                  <MainMiddleVacinesBoxes></MainMiddleVacinesBoxes>
                  <MainMiddleVacinesBoxes></MainMiddleVacinesBoxes>
                  <MainMiddleVacinesBoxes></MainMiddleVacinesBoxes>
                  <MainMiddleVacinesBoxes></MainMiddleVacinesBoxes>
                  <MainMiddleVacinesBoxes></MainMiddleVacinesBoxes>
                  <MainMiddleVacinesBoxes></MainMiddleVacinesBoxes>
                  <MainMiddleVacinesBoxes></MainMiddleVacinesBoxes>
                  <MainMiddleVacinesBoxes></MainMiddleVacinesBoxes>
                  <MainMiddleVacinesBoxes></MainMiddleVacinesBoxes>
                  <MainMiddleVacinesBoxes></MainMiddleVacinesBoxes>
                  <MainMiddleVacinesBoxes></MainMiddleVacinesBoxes>
                </MainMiddleVacinesContainer>
              </MainMiddle>
              <MainBottom>
                <MainBottomTop>
                  <h1>Travel Vaccine</h1>
                  <h3>Vaccines</h3>
                </MainBottomTop>
                <MainBottomTravelVacineContainer>
                  <MainMiddleVacinesBoxes></MainMiddleVacinesBoxes>
                  <MainMiddleVacinesBoxes></MainMiddleVacinesBoxes>
                  <MainMiddleVacinesBoxes></MainMiddleVacinesBoxes>
                  <MainMiddleVacinesBoxes></MainMiddleVacinesBoxes>
                  <MainMiddleVacinesBoxes></MainMiddleVacinesBoxes>
                </MainBottomTravelVacineContainer>
              </MainBottom>
            </RightMainBottom>
          </RightMain>
        </RightContainer>
      </Container>
    </>
  );
};

export default Vaccinations;
