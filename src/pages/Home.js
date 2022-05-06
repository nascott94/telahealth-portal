import React from 'react';
import styled from 'styled-components';
import Sidebar from '../components/homepage/Sidebar';
import Navbar from '../components/homepage/Navbar';
import Dashboard from '../components/homepage/Dashboard';
import HealthPass from '../components/homepage/HealthPass';

const Container = styled.div`
  height: 1000px;
  width: 100%;
  display: flex;
`;

const SidebarConatiner = styled.div`
  height: 100vh;
  width: 15%;
`;

const RestofPageContainer = styled.div`
  height: 100%;
  width: 85%;
  display: flex;
  flex-direction: column;
`;

const NavbarContainer = styled.div`
  height: 10%;
  width: 100%;
`;

const DashboardContainer = styled.div`
  height: 50%;
  width: 100%;
  padding-top: 20px;
  padding-left: 20px;
  background-color: white;
`;

const HealthPassContainer = styled.div`
  height: 50%;
  width: 100%;
  padding-top: 40px;
  padding-left: 20px;
  background-color: white;
`;

const FooterContainer = styled.div`
  height: 20px;
  width: 100%;
  background-color: blue;
`;

const Home = () => {
  return (
    <>
      <Container>
        <SidebarConatiner>
          <Sidebar />
        </SidebarConatiner>
        <RestofPageContainer>
          <NavbarContainer>
            <Navbar />
          </NavbarContainer>
          <Dashboard />
          <HealthPass />
        </RestofPageContainer>
      </Container>
      <FooterContainer></FooterContainer>
    </>
  );
};

export default Home;
