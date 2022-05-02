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
  background-color: blue;
`;

const RightMainTop = styled.div`
  height: 20%;
  width: 100vw;
  background-color: blue;
`;
const RightMainBottom = styled.div`
  height: 80%;
  width: 100vw;
  background-color: black;
`;

const ProductServices = () => {
  return (
    <>
      <Container>
        <LeftContainer>
          <Sidebar />
        </LeftContainer>
        <RightContainer>
          <Navbar></Navbar>
          <RightMain>
            <RightMainTop></RightMainTop>
            <RightMainBottom></RightMainBottom>
          </RightMain>
        </RightContainer>
      </Container>
    </>
  );
};

export default ProductServices;
