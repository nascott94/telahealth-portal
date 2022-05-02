import React from "react";
import Sidebar from "../components/homepage/Sidebar";
import Navbar from "../components/homepage/Navbar";
import Widget from "../components/homepage/Widget";
import Featured from "../components/homepage/Featured";
import styled from "styled-components";

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

const WidgetContainer = styled.div`
  height: 30%;
  width: 100%;
  background-color: white;
`;

const FeaturedContainer = styled.div`
  height: 60%;
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
          <WidgetContainer>
            <Widget />
          </WidgetContainer>
          <FeaturedContainer>
            <Featured />
          </FeaturedContainer>
        </RestofPageContainer>
      </Container>
      <FooterContainer></FooterContainer>
    </>
  );
};

export default Home;
