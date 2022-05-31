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
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
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
  width: 30%;
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

const ToggleButton = styled.div`
  height: 290%;
  width: 40%;
  background-color: #f7bc01;
  margin-top: 17%;
  margin-left: 50%;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
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
                  <RightMainContentBoxTab className="margin">
                    <div>canceled</div>
                  </RightMainContentBoxTab>
                </RightMainContentBoxTabContainter>
                <RightMainContentBoxOptionsContainter>
                  <RightMainContentBoxOptionsContainterLeft>
                    <RightMainContentBoxOptionBox>
                      <input type="radio" />
                      <h5>All</h5>
                    </RightMainContentBoxOptionBox>
                    <RightMainContentBoxOptionBox>
                      <input type="radio" />
                      <h5>e-Visits</h5>
                    </RightMainContentBoxOptionBox>
                    <RightMainContentBoxOptionBox>
                      <input type="radio" />
                      <h5>in-Office</h5>
                    </RightMainContentBoxOptionBox>
                    <RightMainContentBoxOptionBox>
                      <input type="radio" />
                      <h5>House Calls</h5>
                    </RightMainContentBoxOptionBox>
                    <RightMainContentBoxOptionBox>
                      <input type="radio" />
                      <h5>Health Programs</h5>
                    </RightMainContentBoxOptionBox>
                  </RightMainContentBoxOptionsContainterLeft>
                  <RightMainContentBoxOptionsContainterRight>
                    <ToggleButton>
                      <div>Toggle Items</div>
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
    </>
  );
};

export default Appointments;
