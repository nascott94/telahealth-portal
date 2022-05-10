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
  width: 15%;
  background-color: blue;
`;

const RightContainer = styled.div`
  height: 100%;
  width: 85%;
  background-color: #eaedf1;
  display: flex;
  flex-direction: column;
`;

const RightMain = styled.div`
  height: 100vh;
  width: 100%;
  background-color: #eaedf1;
`;

const RightMainTop = styled.div`
  height: 15%;
  width: 100%;
  background-color: #f6f8f8;
  display: flex;
  overflow: hidden;
`;

const RightMainTopLeft = styled.div`
  height: 100%;
  width: 50%;
  background-color: #f6f8f8;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 5px;
  font-size: 18px;
  font-weight: bold;
  color: #999;
  padding-left: 33px;
`;

const RightMainTopRight = styled.div`
  height: 100%;
  width: 50%;
  background-color: #f6f8f8;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  padding-right: 18px;
`;

const RightMainBottom = styled.div`
  height: 100%;
  width: 100%;
  background-color: #eaedf1;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
`;

const RightMainBottomTopBar = styled.div`
  width: 100%;
  height: 5%;
  background-color: white;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  padding-right: 135px;
`;

const RightMainBottomBottomBar = styled.div`
  width: 100%;
  height: 12%;
  background-color: white;
  display: flex;
  align-items: center;
  border-bottom: 1px solid black;
  padding-left: 65px;
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
            <RightMainTop>
              <RightMainTopLeft>
                <h3>Products</h3>
                <h5>All products are tabulated below.</h5>
              </RightMainTopLeft>
              <RightMainTopRight>
                <h5>Select Entity:</h5>
              </RightMainTopRight>
            </RightMainTop>
            <RightMainBottom>
              <RightMainBottomTopBar>
                <h5>Purchase date</h5>
                <h5>Product name</h5>
                <h5>Provider</h5>
                <h5>Product price</h5>
                <h5>Status</h5>
                <h5>View Receipt</h5>
              </RightMainBottomTopBar>
              <RightMainBottomBottomBar>
                <h5>showing 1- 0 of 0 items</h5>
              </RightMainBottomBottomBar>
            </RightMainBottom>
          </RightMain>
        </RightContainer>
      </Container>
    </>
  );
};

export default ProductServices;
