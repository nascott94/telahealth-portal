import React from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Widget from "../components/Widget";
import Featured from "../components/Featured";
import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  background-color: blue;
`;

const NavbarContainer = styled.div`
  height: 10%;
  width: 100%;
  background-color: grey;
`;

const SidebarConatiner = styled.div`
  height: 100vh;
  width: 20%;
  background-color: pink;
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
  background-color: green;
`;

const FeaturedContainer = styled.div`
  height: 60%;
  width: 100%;
  background-color: purple;
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
