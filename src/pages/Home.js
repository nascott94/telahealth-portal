import React from "react";
import styled from "styled-components";
import Sidebar from "../components/homepage/Sidebar";
import Navbar from "../components/homepage/Navbar";
import Dashboard from "../components/homepage/Dashboard";
import HealthPass from "../components/homepage/HealthPass";
import Footer from "../components/homepage/Footer";

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  background-color: #2658e2;
`;

const SidebarConatiner = styled.div`
  height: 100%;
  width: 15%;
  background-color: #2658e2;
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
  height: 60%;
  width: 100%;
  padding-top: 20px;
  padding-left: 20px;
  background-color: white;
`;

const HealthPassContainer = styled.div`
  height: 40%;
  width: 100%;
  padding-top: 40px;
  padding-left: 20px;
  background-color: white;
`;

const FooterContainer = styled.div`
  height: 100px;
  width: 100%;
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
          <Footer />
        </RestofPageContainer>
      </Container>
      {/* <FooterContainer> */}
      {/* </FooterContainer> */}
    </>
  );
};

export default Home;
