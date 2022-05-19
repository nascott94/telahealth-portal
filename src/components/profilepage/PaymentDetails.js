import React from "react";
import styled from "@emotion/styled";

const Container = styled.div`
  height: 100%;
  width: 100%;
  background-color: yellow;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const HeaderContainer = styled.div`
  height: 100px;
  width: 98%;
  display: flex;
  align-items: center;
  border-bottom: 1px solid black;
`;

const CardOptionContainer = styled.div`
  height: 50px;
  width: 98%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid black;
`;

const CardInfoContainer = styled.div`
  height: 200px;
  width: 98%;
  display: flex;
  flex-direction: column;
`;

const CardInfoTop = styled.div`
  height: 50%;
  width: 100%;
  display: flex;
  align-items: center;
`;

const CardInfoBox = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  background-color: pink;
  display: flex;
  flex-direction: column;
`;

const DropDownBox = styled.div`
  width: 90%;
  height: 30px;
  border-bottom: 1px solid black;
  display: flex;
  align-items: center;
`;

const CardInfoBottom = styled.div`
  height: 50%;
  width: 100%;
  display: flex;
  align-items: center;
  border-bottom: 1px solid black;
`;

const ExperationDateContainer = styled.div`
  height: 100px;
  width: 98%;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid black;
`;

const ExperationDateTop = styled.div`
  height: 50%;
  width: 100%;
  background-color: white;
`;

const ExperationDateBottom = styled.div`
  height: 50%;
  width: 100%;
  display: flex;
`;

const DropDownBoxExperation = styled.div`
  width: 40%;
  height: 30px;
  border: 1px solid black;
  display: flex;
  align-items: center;
  margin-right: 30px;
`;

const PaymentDetails = () => {
  return (
    <>
      <Container>
        <HeaderContainer>
          <h1>Credit Card Information</h1>
        </HeaderContainer>
        <CardOptionContainer>
          <h4>Card Label</h4>
          <h4>Name On Card</h4>
          <h4>Credit Card Number</h4>
          <h4>Experation Date</h4>
          <h4>Action</h4>
        </CardOptionContainer>
        <HeaderContainer>
          <h1>Add New Card Information</h1>
        </HeaderContainer>
        <CardInfoContainer>
          <CardInfoTop>
            <CardInfoBox>
              <h4>Card Label</h4>
              <DropDownBox></DropDownBox>
            </CardInfoBox>
            <CardInfoBox>
              <h4>Name On Card</h4>
              <DropDownBox></DropDownBox>
            </CardInfoBox>
          </CardInfoTop>
          <CardInfoBottom>
            <CardInfoBox>
              <h4>Crdit Card Number</h4>
            </CardInfoBox>
          </CardInfoBottom>
        </CardInfoContainer>
        <ExperationDateContainer>
          <ExperationDateTop>
            <h4>Experation Date</h4>
          </ExperationDateTop>
          <ExperationDateBottom>
            <DropDownBoxExperation>
              <h4>Select Month</h4>
            </DropDownBoxExperation>
            <DropDownBoxExperation>
              <h4>Select Year</h4>
            </DropDownBoxExperation>
          </ExperationDateBottom>
        </ExperationDateContainer>
      </Container>
    </>
  );
};

export default PaymentDetails;
