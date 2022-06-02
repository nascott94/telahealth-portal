import React from "react";
import styled from "styled-components";
import Navbar from "../components/homepage/Navbar";
import Sidebar from "../components/homepage/Sidebar";
import Footer from "../components/homepage/Footer";

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
  background-color: #eaedf1;
  display: flex;
  flex-direction: column;
`;

const RightMain = styled.div`
  height: 100vh;
  width: 100%;
  background-color: #eaedf1;
`;

const RightMainTop = styled.div`
  height: 14%;
  width: 100%;
  background-color: #f6f8f8;
  display: flex;
  overflow: hidden;
  border-bottom: 1px solid #ccc;
`;

const RightMainTopLeft = styled.div`
  height: 100%;
  width: 50%;
  /* padding-top: 20px; */
  background-color: #f6f8f8;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 1.8%;

  .title {
    color: black;
    font-size: 25px;
  }

  .subtitle {
    color: #999;
    font-size: 15px;
  }
`;

const RightMainBottom = styled.div`
  height: 85%;
  width: 100%;
  background-color: #eaedf1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 30px;
`;

const RightMainBottomTabBar = styled.div`
  width: 95%;
  height: 7%;
  background-color: #eaedf1;
  display: flex;
`;

const RightMainBottomTabBox = styled.div`
  height: 100%;
  width: 15%;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #999;
  font-size: 15px;
`;

const RightMainBottomBox1 = styled.div`
  width: 95%;
  height: 50%;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const RightMainBottomBox2 = styled.div`
  width: 95%;
  height: 80%;
  border: 1px solid #ccc;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const Box2Section1 = styled.div`
  width: 100%;
  height: 30%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 500px;
  border-bottom: 1px solid #ccc;
`;

const Box2Section1SearchBar = styled.div`
  height: 50%;
  width: 50%;
  .search {
    height: 60%;
    width: 50%;
    background: #fff;
    border: 1px solid #ccc;
    border-radius: 6px;
  }
  .go-btn {
    height: 60%;
    width: 7%;
    margin-left: 5px;
    font-size: 12px;
    background-color: #f7bc01;
    border-radius: 6px;
    border: none;
    cursor: pointer;
    :hover {
      background-color: #eaedf1;
    }
  }
  .clear-btn {
    height: 60%;
    width: 7%;
    margin-left: 5px;
    font-size: 12px;
    background-color: #eaedf1;
    border-radius: 6px;
    border: none;
    cursor: pointer;
    :hover {
      background-color: #f7bc01;
    }
  }
`;

// const Box2Section1SearchBarOptionsBox = styled.div`
//   height: 40%;
//   width: 5%;
// `;

const Box2Section2 = styled.div`
  width: 100%;
  height: 15%;
  display: flex;
  align-items: center;
  padding-left: 18px;
  border-bottom: 1px solid #ccc;
  background-color: #eaedf1;
  font-size: 14px;
  font-weight: bold;
`;

const Box2Section3 = styled.div`
  width: 100%;
  height: 15%;
  background-color: white;
  display: flex;
`;

const Box2Section3Left = styled.div`
  width: 45%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 19px;
  padding-right: 150px;
  border-bottom: 1px solid #ccc;
  color: black;
  font-size: 14px;
`;

const Box2Section3Right = styled.div`
  width: 45%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 150px;
  padding-right: 40px;
  border-bottom: 1px solid #ccc;
  color: black;
  font-size: 15px;
`;

const Box2Section4 = styled.div`
  width: 100%;
  height: 10%;
  border-bottom: 1px solid #ccc;
`;

const Box2Section5 = styled.div`
  width: 100%;
  height: 25%;
  background-color: white;
  display: flex;
  align-items: center;
  padding-left: 19px;
  color: #999;
  font-size: 13px;
`;

const ProgramsMembership = () => {
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
                <div className="title">Programs and Memberships</div>
                <div className="subtitle">
                  Manage AZOVA Programs/Memberships
                </div>
              </RightMainTopLeft>
            </RightMainTop>
            <RightMainBottom>
              <RightMainBottomTabBar>
                <RightMainBottomTabBox>
                  Programs and Memberships
                </RightMainBottomTabBox>
              </RightMainBottomTabBar>
              <RightMainBottomBox1>
                <RightMainBottomBox2>
                  <Box2Section1>
                    <Box2Section1SearchBar>
                      <input
                        type="text"
                        placeholder="Search User"
                        className="search"
                      />
                      <button className="go-btn">Go</button>
                      <button className="clear-btn">Clear</button>
                    </Box2Section1SearchBar>
                    {/* <Box2Section1SearchBarOptionsBox></Box2Section1SearchBarOptionsBox>
                    <Box2Section1SearchBarOptionsBox></Box2Section1SearchBarOptionsBox> */}
                  </Box2Section1>
                  <Box2Section2>
                    Program/Membership: To access your appointments, click "View
                    Program/Membership" below.
                  </Box2Section2>
                  <Box2Section3>
                    <Box2Section3Left>
                      <div>Start Date</div>
                      <div>Clinic</div>
                      <div>Patient</div>
                      <div>Programs and Memberships</div>
                    </Box2Section3Left>
                    <Box2Section3Right>
                      <div>Amount</div>
                      <div>Status</div>
                      <div>Membership Access</div>
                      <div>Action</div>
                    </Box2Section3Right>
                  </Box2Section3>
                  <Box2Section4></Box2Section4>
                  <Box2Section5>
                    <div>showing 1- 0 of 0 items</div>
                  </Box2Section5>
                </RightMainBottomBox2>
              </RightMainBottomBox1>
            </RightMainBottom>
          </RightMain>
        </RightContainer>
      </Container>
      <Footer />
    </>
  );
};

export default ProgramsMembership;
