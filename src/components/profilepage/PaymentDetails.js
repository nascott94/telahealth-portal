import React from "react";
import styled from "@emotion/styled";

const Container = styled.div`
  height: 500px;
  width: 100%;
  background-color: white;
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
  margin-top: 15px;
  margin-bottom: 15px;
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
  background-color: white;
  display: flex;
  flex-direction: column;

  .textInput {
    height: 20px;
    width: 400px;
    border-top: none;
    border-right: none;
    border-left: none;
    border-bottom: 1px solid black;
    margin-bottom: 15px;
  }
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
  height: 20%;
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
  padding-right: 100px;
  display: flex;
  flex-direction: column;
  margin-right: 30px;
  margin-bottom: 130px;

  .textInput {
    height: 20px;
    width: 400px;
    border-top: none;
    border-right: none;
    border-left: none;
    border-bottom: 1px solid black;
  }
`;

const AddButtonContainer = styled.div`
  height: 150px;
  width: 98%;
  background-color: white;
  margin-top: 20px;
  border-bottom: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const AddButton = styled.div`
  height: 20px;
  width: 70px;
  border: 1px solid black;
  margin-top: 10px;
  margin-bottom: 10px;
  background-color: orange;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ResultsSection = styled.div`
  height: 150px;
  width: 98%;
  background-color: white;
  border-bottom: 1px solid black;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
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
              <label for="addressname">Card Label:</label>
              <input
                className="textInput"
                type="text"
                id="addressname"
                name="addressname"
              />
            </CardInfoBox>
            <CardInfoBox>
              <label for="addressname">Name on card:</label>
              <input
                className="textInput"
                type="text"
                id="addressname"
                name="addressname"
              />
            </CardInfoBox>
          </CardInfoTop>
          <CardInfoBottom>
            <CardInfoBox>
              <label for="addressname">Name on card:</label>
              <input
                className="textInput"
                type="text"
                id="addressname"
                name="addressname"
              />
            </CardInfoBox>
          </CardInfoBottom>
        </CardInfoContainer>
        <ExperationDateContainer>
          <ExperationDateTop>
            <h4>Experation Date</h4>
          </ExperationDateTop>
          <ExperationDateBottom>
            <DropDownBoxExperation>
              <label for="addressname">Select Month:</label>
              <input
                className="textInput"
                type="text"
                id="addressname"
                name="addressname"
              />
            </DropDownBoxExperation>
            <DropDownBoxExperation>
              <label for="addressname">Select year:</label>
              <input
                className="textInput"
                type="text"
                id="addressname"
                name="addressname"
              />
            </DropDownBoxExperation>
          </ExperationDateBottom>
        </ExperationDateContainer>
        <AddButtonContainer>
          <AddButton>Add</AddButton>
        </AddButtonContainer>
        <ResultsSection>
          <h5>showing 1- 0 of 0 items</h5>
        </ResultsSection>
      </Container>
    </>
  );
};

export default PaymentDetails;
