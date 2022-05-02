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
  width: 20%;
  background-color: blue;
`;

const RightContainer = styled.div`
  height: 100vh;
  width: 80%;
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
  background-color: red;
`;

const MessageSideBarTop = styled.div`
  height: 10%;
  width: 100vw;
  background-color: blue;
`;

const MessageSideBarBottom = styled.div`
  height: 90%;
  width: 100vw;
  background-color: black;
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
              <MessageSideBarTop></MessageSideBarTop>
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
