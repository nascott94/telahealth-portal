import React from 'react';
import styled from 'styled-components';
import Navbar from '../components/homepage/Navbar';
import Sidebar from '../components/homepage/Sidebar';

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  background-color: #2658e2;
`;

const LeftContainer = styled.div`
  height: 100%;
  width: 15%;
  background-color: #2658e2;
`;

const RightContainer = styled.div`
  height: 100%;
  width: 85%;
  background-color: #eaedf1;
  display: flex;
  flex-direction: column;
`;

const RightMain = styled.div`
  height: 100%;
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
  padding-top: 20px;
  background-color: #f6f8f8;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 20px;

  .title {
    color: black;
    font-size: 25px;
  }

  .subtitle {
    color: #999;
    font-size: 15px;
  }
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
  padding-top: 18px;

  .title {
    margin-right: auto;
    margin-left: 115px;
    margin-bottom: 5px;
    font-size: 15px;
    color: #999;
  }

  .service {
    margin-right: auto;
    margin-left: 110px;
    margin-bottom: 20px;
    width: 60%;
    font-size: 14px;
    padding: 10px 100px 10px 10px;
    background: #fff;
    border: 1px solid #ccc;
    border-radius: 6px;
  }
`;

const RightMainBottom = styled.div`
  height: 100vh;
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
  background-color: #ffffff;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-top: 1.5px solid #999;
  border-bottom: 1px solid #999;
  padding-right: 150px;

  .category {
    font-size: 14px;
  }
`;

const RightMainBottomBottomBar = styled.div`
  width: 100%;
  height: 12%;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #999;
  padding-left: 65px;
  color: #999;
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
                <div className="title">Products</div>
                <div className="subtitle">
                  All products are tabulated below.
                </div>
              </RightMainTopLeft>
              <RightMainTopRight>
                <label className="title">Select Entity:</label>
                <select name="patient" className="service">
                  <option value="1" selected="selected">
                    Products
                  </option>
                  <option value="2">Services</option>
                  <option value="3">DME</option>
                  <option value="4">Prescription Medication</option>
                  <option value="5">Vaccines</option>
                </select>
              </RightMainTopRight>
            </RightMainTop>
            <RightMainBottom>
              <RightMainBottomTopBar>
                <div className="category">Purchase Date </div>
                <div className="category">Product Name </div>
                <div className="category">Provider</div>
                <div className="category">Product Price</div>
                <div className="category">Status</div>
                <div className="category">View Receipt</div>
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
