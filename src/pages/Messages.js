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
  height: 20%;
  width: 100vw;
  background-color: blue;
  display: flex;
  flex-direction: column;
`;

const MessageSideBarBottom = styled.div`
  height: 80%;
  width: 100vw;
  background-color: black;
`;

const MessageSideBarOptions = styled.div`
  height: 50%;
  width: 100vw;
  background-color: white;
  display: flex;
  flex-direction: row;
`;

const Left = styled.div`
  height: 100vh:
  width: 50%;
  background-color: purple;
`;

const Right = styled.div`
  height: 100vh:
  width: 50%;
  background-color: green;
`;

const MessageSidebarFolderEmpty = styled.div`
  height: 50%;
  width: 100vw;
  background-color: blue;
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
                <MessageSideBarOptions>
                  <Left>test 1</Left>
                  <Right> test 2</Right>
                </MessageSideBarOptions>
                <MessageSidebarFolderEmpty></MessageSidebarFolderEmpty>
              </MessageSideBarTop>
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
