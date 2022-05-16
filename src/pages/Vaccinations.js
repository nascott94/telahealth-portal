import React from 'react';
import styled from 'styled-components';
import Navbar from '../components/homepage/Navbar';
import Sidebar from '../components/homepage/Sidebar';

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  background-color: #2658e2;
`;

const LeftContainer = styled.div`
  height: 100%;
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
  background-color: blue;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const RightMainTop = styled.div`
  height: 100px;
  width: 100%;
  background-color: #f6f8f8;
  display: flex;
  overflow: hidden;
  border-bottom: 1px solid #ccc; ;
`;

const RightMainTopLeft = styled.div`
  height: 100%;
  width: 50%;
  background-color: #f6f8f8;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 20px;
  color: black;
  font-size: 25px;
`;

const RightMainTopRight = styled.div`
  height: 100%;
  width: 50%;
  background-color: #f6f8f8;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  padding-right: 50px;

  button {
    width: 25%;
    height: 50%;
    padding: 17px;
    background-color: #f7bc01;
    border-radius: 5px;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    color: black;
    cursor: pointer;
    :hover {
      background-color: #eaedf1;
    }
  }
`;

const RightMainBottom = styled.div`
  height: 85%;
  width: 100%;
  background-color: #eaedf1;
`;

const MainTop = styled.div`
  height: 400px;
  width: 100%;
  background-color: #eaedf1;
  display: flex;
  margin-top: 80px;
  justify-content: center;
  overflow: hidden;
  margin-bottom: -100px;
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
  padding-left: 20px;
  background-color: white;
  display: flex;
  align-items: center;
  border-radius: 5px;

  button {
    height: 60%;
    border-radius: 5px;
    border: none;
    margin-right: 5px;
    color: #eaedf1;
    padding-left: 10px;
    padding-right: 10px;
    cursor: pointer;
    :hover {
      transition: 0.2;
    }
  }

  .blue-btn {
    background-color: #2658e2;
  }

  .orange-btn {
    background-color: #f7bc01;
  }
`;

// const MainTopTopBoxes = styled.div`
//   height: 100%;
//   width: 9%;
//   background-color: white;
//   margin-left: 10px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
// `;

const MainTopMiddle = styled.div`
  height: 10%;
  width: 100%;
  padding-left: 20px;
  background-color: white;
  display: flex;
  align-items: center;

  .patient {
    margin-left: 20px;
    width: 10%;
  }
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
  border-radius: 5px;
`;

const MainTopBottom1 = styled.div`
  height: 33.3%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .title {
    font-size: 14px;
    padding-left: 6px;
    color: #f7bc01;
  }

  .info {
    font-size: 14px;
    padding-top: 2px;
    padding-left: 6px;
  }
`;

const MainTopBottom2 = styled.div`
  height: 33.3%;
  width: 100%;
  .title {
    font-size: 14px;
    padding-left: 6px;
    color: #f7bc01;
  }

  .info {
    font-size: 14px;
    padding-top: 2px;
    padding-left: 6px;
  }
`;

const MainTopBottom3 = styled.div`
  height: 33.3%;
  width: 100%;
  display: flex;
  .title {
    font-size: 14px;
    padding-left: 6px;
    color: #f7bc01;
  }

  .info {
    font-size: 14px;
    padding-top: 2px;
    padding-left: 6px;
  }
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
  height: 700px;
  width: 100%;
  background-color: #eaedf1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MainMiddleTop = styled.div`
  height: 6%;
  width: 100%;
  background-color: #eaedf1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MainMiddleVacinesContainer = styled.div`
  height: 90%;
  width: 60%;
  background-color: #eaedf1;
  margin-top: 20px;
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
  display: flex;
  align-items: center;
`;

const MainBottom = styled.div`
  height: 400px;
  width: 100%;
  background-color: #eaedf1;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const MainBottomTop = styled.div`
  height: 18%;
  width: 100%;
  background-color: #eaedf1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const MainBottomTravelVacineContainer = styled.div`
  height: 50%;
  width: 60%;
  background-color: #eaedf1;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  padding-left: 5px;
  padding-right: 5px;
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
                <div>Create Your Online Vaccination Record</div>
              </RightMainTopLeft>
              <RightMainTopRight>
                <button>Vacination Button</button>
              </RightMainTopRight>
            </RightMainTop>
            <RightMainBottom>
              <MainTop>
                <MainTopContainer>
                  <div>Profile</div>
                  <MainTopTop>
                    <button className="blue-btn">Update Info</button>
                    <button className="orange-btn">Add New Patient</button>
                    <button className="orange-btn">Forecasting</button>
                    <button className="orange-btn">Share</button>
                    <button className="blue-btn">Manage Records</button>
                  </MainTopTop>
                  <MainTopMiddle>
                    <div>Patient Name:</div>
                    <select name="patient" className="patient">
                      <option value="1" selected="selected">
                        Olive Scott (self)
                      </option>
                      <option value="2">Leo Scott</option>
                    </select>
                  </MainTopMiddle>
                  <MainTopBottom>
                    <MainTopBottomLeft>
                      <div>Image</div>
                    </MainTopBottomLeft>
                    <MainTopBottomMiddle>
                      <MainTopBottom1>
                        <div className="title">Name</div>
                        <div className="info">Olive Scott</div>
                      </MainTopBottom1>
                      <MainTopBottom2>
                        <div className="title">Email</div>
                        <div className="info">olivescott@gmail.com</div>
                      </MainTopBottom2>
                      <MainTopBottom3>
                        <MainTopBottom3Left>
                          <div className="title">Date of Birth</div>
                          <div className="info">20 Jan 1990</div>
                        </MainTopBottom3Left>
                        <MainTopBottom3Right>
                          <div className="title">Sex</div>
                          <div className="info">Female</div>
                        </MainTopBottom3Right>
                      </MainTopBottom3>
                    </MainTopBottomMiddle>
                    <MainTopBottomRight></MainTopBottomRight>
                  </MainTopBottom>
                  <MainTopFooter>
                    <div style={{ paddingLeft: 20 }}>Vaccines</div>
                    <div>VFC Eligible</div>
                    <div style={{ paddingRight: 20 }}>Expand All</div>
                  </MainTopFooter>
                </MainTopContainer>
              </MainTop>
              <MainMiddle>
                <MainMiddleTop>
                  <h3>Vaccines</h3>
                </MainMiddleTop>
                <MainMiddleVacinesContainer>
                  <MainMiddleVacinesBoxes>
                    <div>+</div>
                    <div>Covid-19</div>
                  </MainMiddleVacinesBoxes>
                  <MainMiddleVacinesBoxes>
                    <div>+</div>
                    <div>Influenza</div>
                  </MainMiddleVacinesBoxes>
                  <MainMiddleVacinesBoxes>
                    <div>+</div>
                    <div>Diphtheria, Tetanus, Acellular Pertussis</div>
                  </MainMiddleVacinesBoxes>
                  <MainMiddleVacinesBoxes>
                    <div>+</div>
                    <div>Haemophilus Influenza Type b</div>
                  </MainMiddleVacinesBoxes>
                  <MainMiddleVacinesBoxes>
                    <div>+</div>
                    <div>Polio</div>
                  </MainMiddleVacinesBoxes>
                  <MainMiddleVacinesBoxes>
                    <div>+</div>
                    <div>Measles, Mumps and Rubella</div>
                  </MainMiddleVacinesBoxes>
                  <MainMiddleVacinesBoxes>
                    <div>+</div>
                    <div>Hepatitis A</div>
                  </MainMiddleVacinesBoxes>
                  <MainMiddleVacinesBoxes>
                    <div>+</div>
                    <div>Hepatitis B</div>
                  </MainMiddleVacinesBoxes>
                  <MainMiddleVacinesBoxes>
                    <div>+</div>
                    <div>Varicella</div>
                  </MainMiddleVacinesBoxes>
                  <MainMiddleVacinesBoxes>
                    <div>+</div>
                    <div>Rotavirus</div>
                  </MainMiddleVacinesBoxes>
                  <MainMiddleVacinesBoxes>
                    <div>+</div>
                    <div>Human Papillomavirus</div>
                  </MainMiddleVacinesBoxes>
                  <MainMiddleVacinesBoxes>
                    <div>+</div>
                    <div>Tetanus, Diphatheria, Pertussis</div>
                  </MainMiddleVacinesBoxes>
                  <MainMiddleVacinesBoxes>
                    <div>+</div>
                    <div>Pneumococcal</div>
                  </MainMiddleVacinesBoxes>
                  <MainMiddleVacinesBoxes>
                    <div>+</div>
                    <div>Meningococcal Groub B</div>
                  </MainMiddleVacinesBoxes>
                  <MainMiddleVacinesBoxes>
                    <div>+</div>
                    <div>Meningococcal Conjugate A, C, W, Y and CY</div>
                  </MainMiddleVacinesBoxes>
                  <MainMiddleVacinesBoxes>
                    <div>+</div>
                    <div>Zoster</div>
                  </MainMiddleVacinesBoxes>
                </MainMiddleVacinesContainer>
              </MainMiddle>
              <MainBottom>
                <MainBottomTop>
                  <h1>Travel Vaccine</h1>
                  <h3>Vaccines</h3>
                </MainBottomTop>
                <MainBottomTravelVacineContainer>
                  <MainMiddleVacinesBoxes>
                    <div>+</div>
                    <div>Japaneses Encephalitis</div>
                  </MainMiddleVacinesBoxes>
                  <MainMiddleVacinesBoxes>
                    <div>+</div>
                    <div>Rabies</div>
                  </MainMiddleVacinesBoxes>
                  <MainMiddleVacinesBoxes>
                    <div>+</div>
                    <div>Typhoid Fever</div>
                  </MainMiddleVacinesBoxes>
                  <MainMiddleVacinesBoxes>
                    <div>+</div>
                    <div>Yellow Fever</div>
                  </MainMiddleVacinesBoxes>
                  <MainMiddleVacinesBoxes>
                    <div>+</div>
                    <div>Cholera</div>
                  </MainMiddleVacinesBoxes>
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
