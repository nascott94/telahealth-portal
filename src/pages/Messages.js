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
  width: 100vw;
  background-color: white;
  display: flex;
  flex-direction: row;
`;

const MessageSidebar = styled.div`
  height: 100vh;
  width: 20%;
  background-color: white;
  display: flex;
  flex-direction: column;
`;

const MessagesContainer = styled.div`
  height: 100vh;
  width: 80%;
  background-color: #f6f8f8;
`;

const MessageSideBarTop = styled.div`
  height: 5%;
  width: 100%;
  background-color: blue;
  display: flex;
  overflow: hidden;
`;

const MessageSideBarLeft = styled.div`
  height: 100%;
  width: 60%;
  display: flex;
  background-color: white;
  display: flex;
  justify-content: space-around;
  padding-right: 60px;
`;

const MessageSideBarLeftInputs = styled.div`
  width: 60px;
  height: 30px;
  background-color: white;
  border-bottom: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MessageSideBarRight = styled.div`
  height: 100%;
  width: 40%;
  display: flex;
  background-color: white;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const MessageSideBarMiddle = styled.div`
  height: 10%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #eaedf1;
`;

const MessageSideBarBottom = styled.div`
  height: 85%;
  width: 100vw;
  background-color: white;
`;

const Messages = () => {
  return (
    <>
      <Container>
        <LeftContainer>
          <Sidebar />
        </LeftContainer>
        <RightContainer>
          <Navbar></Navbar>
          <RightMain>
            <MessageSidebar>
              <MessageSideBarTop>
                <MessageSideBarLeft>
                  <MessageSideBarLeftInputs>
                    <h5>Inbox</h5>
                  </MessageSideBarLeftInputs>
                  <MessageSideBarLeftInputs>
                    <h5>Filter By</h5>
                  </MessageSideBarLeftInputs>
                </MessageSideBarLeft>
                <MessageSideBarRight>
                  <h5>+</h5>
                  <h5>+</h5>
                  <h5>+</h5>
                  <h5>+</h5>
                </MessageSideBarRight>
              </MessageSideBarTop>
              <MessageSideBarMiddle>
                <h3>This Folder Is Empty</h3>
              </MessageSideBarMiddle>
              <MessageSideBarBottom></MessageSideBarBottom>
            </MessageSidebar>
            <MessagesContainer></MessagesContainer>
          </RightMain>
        </RightContainer>
      </Container>
    </>
  );
};

export default Messages;
