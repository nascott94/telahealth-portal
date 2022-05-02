import React from 'react';
import styled from 'styled-components';
import Sidebar from '../components/homepage/Sidebar';
import Navbar from '../components/homepage/Navbar';
import Dashboard from '../components/homepage/Dashboard';
import HealthPass from '../components/homepage/HealthPass';

const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
`;

const NavbarContainer = styled.div`
  height: 10%;
  width: 100%;
`;

const SidebarConatiner = styled.div`
  height: 100vh;
  width: 20%;
`;

const RestofPageContainer = styled.div`
  height: 100%;
  width: 80%;
  display: flex;
  flex-direction: column;
`;

const DashboardContainer = styled.div`
  height: 50%;
  width: 100%;
  background-color: white;
`;

const HealthPassContainer = styled.div`
  height: 50%;
  width: 100%;
  background-color: white;
`;

const FooterContainer = styled.div`
  height: 50px;
  width: 100%;
  background-color: red;
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
          <DashboardContainer>
            <Dashboard />
          </DashboardContainer>
          <HealthPassContainer>
            <HealthPass />
          </HealthPassContainer>
        </RestofPageContainer>
      </Container>
      <FooterContainer></FooterContainer>
    </>
  );
};

export default Home;
