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
  background-color: white;
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const RightMainBottomMainTabs = styled.div`
  width: 85%;
  height: 7%;
  background: grey;
`;

const RightMainBottomContainer = styled.div`
  height: 65%;
  width: 85%;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const RightMainBottomSubContainer = styled.div`
  height: 75%;
  width: 85%;
  background-color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const RightMainBottomSubTabs = styled.div`
  width: 100%;
  height: 10%;
  background: grey;
`;

const RightMainBottomSubContainerTwo = styled.div`
  height: 75%;
  width: 85%;
  background-color: pink;
  margin-top: 25px;
  display: flex;
  flex-direction: column;
`;

const SubContainerTwoSection1 = styled.div`
  height: 20%;
  width: 100%;
`;

const SubContainerTwoSection2 = styled.div`
  height: 20%;
  width: 100%;
`;

const SubContainerTwoSection3 = styled.div`
  height: 20%;
  width: 100%;
`;

const SubContainerTwoSection4 = styled.div`
  height: 20%;
  width: 100%;
`;

const SubContainerTwoSection5 = styled.div`
  height: 20%;
  width: 100%;
`;

const Records = () => {
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
                <h3>Clinical Notes</h3>
                <h5>All added documents will be listed here</h5>
              </RightMainTopLeft>
              <RightMainTopRight></RightMainTopRight>
            </RightMainTop>
            <RightMainBottom>
              <RightMainBottomMainTabs>Main Tabs</RightMainBottomMainTabs>
              <RightMainBottomContainer>
                <RightMainBottomSubContainer>
                  <RightMainBottomSubTabs></RightMainBottomSubTabs>
                  <RightMainBottomSubContainerTwo></RightMainBottomSubContainerTwo>
                </RightMainBottomSubContainer>
              </RightMainBottomContainer>
            </RightMainBottom>
          </RightMain>
        </RightContainer>
      </Container>
    </>
  );
};

export default Records;
