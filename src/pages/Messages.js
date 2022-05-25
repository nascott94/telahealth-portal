import React from 'react';
import styled from 'styled-components';
import Navbar from '../components/homepage/Navbar';
import Sidebar from '../components/homepage/Sidebar';
import SearchIcon from '@mui/icons-material/Search';
import OpenInBrowserRoundedIcon from '@mui/icons-material/OpenInBrowserRounded';
import CachedRoundedIcon from '@mui/icons-material/CachedRounded';
import VolumeUpRoundedIcon from '@mui/icons-material/VolumeUpRounded';
// import FolderRoundedIcon from '@mui/icons-material/FolderRounded';
// import FilterAltRoundedIcon from '@mui/icons-material/FilterAltRounded';

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
  width: 70px;
  height: 30px;
  background-color: white;
  border-bottom: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;

  .icon {
    height: 15px;
    width: 15px;
    margin-left: 10%;
  }
`;

const MessageSideBarRight = styled.div`
  height: 100%;
  width: 40%;
  display: flex;
  background-color: white;
  display: flex;
  justify-content: space-around;
  align-items: center;

  .icon {
    height: 18px;
    width: 18px;
  }
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
                    {/* <FolderRoundedIcon className="icon" /> */}
                    <h5>Inbox</h5>
                  </MessageSideBarLeftInputs>
                  <MessageSideBarLeftInputs>
                    {/* <FilterAltRoundedIcon className="icon" /> */}
                    <h5>Filter By</h5>
                  </MessageSideBarLeftInputs>
                </MessageSideBarLeft>
                <MessageSideBarRight>
                  <SearchIcon className="icon" />
                  <OpenInBrowserRoundedIcon className="icon" />
                  <CachedRoundedIcon className="icon" />
                  <VolumeUpRoundedIcon className="icon" />
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
