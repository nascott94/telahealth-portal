import React from "react";
import styled from "styled-components";
import Navbar from "../components/homepage/Navbar";
import Sidebar from "../components/homepage/Sidebar";

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: row;
`;

const LeftContainer = styled.div`
  height: 100vh;
  width: 15%;
  background-color: blue;
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
  background-color: blue;
`;

const RightMainTop = styled.div`
  height: 15%;
  width: 100%;
  background-color: blue;
  display: flex;
`;

const RightMainTopLeft = styled.div`
  height: 100%;
  width: 50%;
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
  width: 50%;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  padding-right: 18px;
`;

const RightMainBottom = styled.div`
  height: 85%;
  width: 100%;
  background-color: black;
`;

const MainTop = styled.div`
  height: 400px;
  width: 100%;
  background-color: white;
`;

const MainTopTop = styled.div`
  height: 20%;
  width: 100%;
  background-color: black;
  display: flex;
  align-items: center;
`;

const MainTopTopBoxes = styled.div`
  height: 35px;
  width: 120px;
  background-color: white;
  margin-left: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MainTopMiddle = styled.div`
  height: 20%;
  width: 100%;
  background-color: grey;
  display: flex;
  align-items: center;
`;

const MainTopBottom = styled.div`
  height: 40%;
  width: 100%;
  background-color: green;
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
  width: 10%;
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
`;

const MainTopBottomRight = styled.div`
  height: 100%;
  width: 80%;
  background-color: white;
`;

const MainTopFooter = styled.div`
  height: 10%;
  width: 100%;
  background-color: purple;
  display: flex;
  justify-content: space-between;
  align-items: center;
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
                      <h5>Test</h5>
                      <h5>Test</h5>
                    </MainTopBottom1>
                    <MainTopBottom2>
                      <h5>Test</h5>
                      <h5>Test</h5>
                    </MainTopBottom2>
                    <MainTopBottom3>
                      <h5>Test</h5>
                      <h5>Test</h5>
                    </MainTopBottom3>
                  </MainTopBottomMiddle>
                  <MainTopBottomRight></MainTopBottomRight>
                </MainTopBottom>
                <MainTopFooter>
                  <h1>one</h1>
                  <h1>Two</h1>
                  <h1>Three</h1>
                </MainTopFooter>
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
