import React from "react";
import styled from "styled-components";
import Navbar from "../components/homepage/Navbar";
import Sidebar from "../components/homepage/Sidebar";
import { BsToggles2 } from "react-icons/bs";
import Footer from "../components/homepage/Footer";

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: row;
`;

const LeftContainer = styled.div`
  height: 100vh;
  width: 15%;
  background-color: #2658e2;
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
  background-color: white;
  display: flex;
  flex-direction: column;
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

  background-color: #f6f8f8;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 20px;

  .title {
    color: black;
    font-size: 25px;
  }

  .subtitle {
    color: #999;
    font-size: 15px;
  }
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
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1.5px solid #ccc;
`;

const RightMainContentBox = styled.div`
  height: 80%;
  width: 80%;
  background-color: white;
`;

const RightMainContentBoxTabContainter = styled.div`
  height: 8%;
  width: 100%;
  background-color: #eaedf1;
  display: flex;
  justify-content: flex-start;

  .margin {
    margin-left: 0.7px;
  }
`;

const RightMainContentBoxTab = styled.div`
  height: 100%;
  width: 15%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  background-color: #8dbbd1;

  .cancel {
    background-color: white;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
  }
`;

const RightMainContentBoxOptionsContainter = styled.div`
  height: 15%;
  width: 100%;
  background-color: #8dbad2;
  display: flex;
`;

const RightMainContentBoxOptionsContainterLeft = styled.div`
  height: 15%;
  width: 61%;
  background-color: #8dbad2;
  display: flex;
  justify-content: space-between;
`;

const RightMainContentBoxOptionBox = styled.div`
  height: 650%;
  width: 18%;
  background-color: #8dbad2;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 13px;
  font-weight: bold;

  .options {
    padding-left: 5px;
  }
`;

const RightMainContentBoxOptionsContainterRight = styled.div`
  height: 15%;
  width: 40%;
  background-color: #8dbad2;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const RightMainContentBoxAppointmentsBox = styled.div`
  height: 70%;
  width: 60%;
  background-color: white;
  border-radius: 10px;
  margin-left: 10px;
  margin-top: 20px;
  border: 2px dotted grey;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Button = styled.div`
  width: 26%;
  height: 10%;
  padding: 17px;
  background-color: #f7bc01;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  font-size: 15px;
  :hover {
    background-color: #eaedf1;
  }
`;

const ToggleButton = styled.button`
  height: 300%;
  width: 15%;
  background-color: #f7bc01;
  margin-top: 17%;
  margin-left: 50%;
  border-radius: 8px;
  border: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  .icon {
    height: 70%;
    width: 70%;
  }
`;

const Appointments = () => {
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
                <div className="title">Appointments</div>
                <div className="subtitle">
                  Welcome to your appointment dashboard. All appointments are
                  listed below.
                </div>
              </RightMainTopLeft>
              <RightMainTopRight>
                <Button>Appointment Calendar</Button>
              </RightMainTopRight>
            </RightMainTop>
            <RightMainBottom>
              <RightMainContentBox>
                <RightMainContentBoxTabContainter>
                  <RightMainContentBoxTab>
                    <div>Appointments</div>
                  </RightMainContentBoxTab>
                  <RightMainContentBoxTab>
                    <div className="cancel">Canceled</div>
                  </RightMainContentBoxTab>
                </RightMainContentBoxTabContainter>
                <RightMainContentBoxOptionsContainter>
                  <RightMainContentBoxOptionsContainterLeft>
                    <RightMainContentBoxOptionBox>
                      <input type="radio" />
                      <div className="options">All</div>
                    </RightMainContentBoxOptionBox>
                    <RightMainContentBoxOptionBox>
                      <input type="radio" />
                      <div className="options">e-Visits</div>
                    </RightMainContentBoxOptionBox>
                    <RightMainContentBoxOptionBox>
                      <input type="radio" />
                      <div className="options"> In-Office</div>
                    </RightMainContentBoxOptionBox>
                    <RightMainContentBoxOptionBox>
                      <input type="radio" />
                      <div className="options">House Calls</div>
                    </RightMainContentBoxOptionBox>
                    <RightMainContentBoxOptionBox>
                      <input type="radio" />
                      <div className="options">Health Programs</div>
                    </RightMainContentBoxOptionBox>
                  </RightMainContentBoxOptionsContainterLeft>
                  <RightMainContentBoxOptionsContainterRight>
                    <ToggleButton>
                      <BsToggles2 className="icon" />
                    </ToggleButton>
                  </RightMainContentBoxOptionsContainterRight>
                </RightMainContentBoxOptionsContainter>
                <RightMainContentBoxAppointmentsBox>
                  <h5>There are no scheduled appointments.</h5>
                </RightMainContentBoxAppointmentsBox>
              </RightMainContentBox>
            </RightMainBottom>
          </RightMain>
        </RightContainer>
      </Container>
      <Footer />
    </>
  );
};

export default Appointments;
