import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
  height: 500px;
  width: 100%;
  background-color: white;
  border-top: 1px solid #ccc;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const HeaderContainer = styled.div`
  height: 67px;
  width: 98%;
  margin-top: -10px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #ccc;
  color: #2658e2;
  font-size: 28px;
  margin-top: 20px;
  padding-bottom: 15px;
  font-size: 24px;
`;

const CardOptionContainer = styled.div`
  height: 50px;
  width: 98%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ccc;
  font-size: 14px;
  font-weight: bold;
  color: grey;
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

  .margin {
    margin-left: 64px;
  }
`;

const CardInfoBox = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  background-color: white;
  display: flex;
  flex-direction: column;
  margin-top: 15px;
  font-size: 14px;
  font-weight: bold;
  color: grey;

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

// const DropDownBox = styled.div`
//   width: 90%;
//   height: 30px;
//   border-bottom: 1px solid #ccc;
//   display: flex;
//   align-items: center;
// `;

const CardInfoBottom = styled.div`
  height: 50%;
  width: 100%;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #ccc;
`;

const ExperationDateContainer = styled.div`
  height: 100px;
  width: 98%;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #ccc;
`;

const ExperationDateTop = styled.div`
  height: 20%;
  width: 100%;
  background-color: white;
  font-size: 14px;
  font-weight: bold;
  color: grey;
`;

const ExperationDateBottom = styled.div`
  height: 50%;
  width: 100%;
  display: flex;
`;

const DropDownBoxExperation = styled.div`
  width: 40%;
  height: 70px;
  padding-right: 100px;
  display: flex;
  flex-direction: column;
  margin-right: 30px;
  margin-bottom: 130px;

  .textInput {
    height: 35px;
    width: 405px;
    background-color: #eaedf1;
    border-top: none;
    border-right: none;
    border-left: none;
    border-bottom: 1px solid #ccc;
    font-size: 13px;
  }
`;

const AddButtonContainer = styled.div`
  height: 150px;
  width: 98%;
  background-color: white;
  margin-top: 20px;
  border-bottom: 1px solid #ccc;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-bottom: 10px;
`;

const AddButton = styled.button`
  height: 40px;
  width: 80px;
  background-color: #2658e2;
  color: white;
  border-radius: 5px;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 14px;
  cursor: pointer;
  :hover {
    background-color: #6387ea;
  }
`;

const ResultsSection = styled.div`
  height: 150px;
  width: 100%;
  background-color: white;
  display: flex;
  align-items: center;
  padding-bottom: 30px;
  padding-left: 2%;
  font-size: 14px;
  font-weight: bold;
`;

const PaymentDetails = () => {
  return (
    <>
      <Container>
        <HeaderContainer>Credit Card Information</HeaderContainer>
        <CardOptionContainer>
          <div>Card Label</div>
          <div>Name On Card</div>
          <div>Credit Card Number</div>
          <div>Experation Date</div>
          <div>Action</div>
        </CardOptionContainer>
        <HeaderContainer>Add New Card Information</HeaderContainer>
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
            <CardInfoBox className="margin">
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
            <div>Experation Date</div>
          </ExperationDateTop>
          <ExperationDateBottom>
            <DropDownBoxExperation>
              <select name="folder" className="textInput">
                <option value="1" selected="selected">
                  Select Month
                </option>
              </select>
            </DropDownBoxExperation>
            <DropDownBoxExperation>
              <select name="folder" className="textInput">
                <option value="1" selected="selected">
                  Select Year
                </option>
              </select>
            </DropDownBoxExperation>
          </ExperationDateBottom>
        </ExperationDateContainer>
        <AddButtonContainer>
          <AddButton>Add</AddButton>
        </AddButtonContainer>
        <ResultsSection>
          <div>showing 1- 0 of 0 items</div>
        </ResultsSection>
      </Container>
    </>
  );
};

export default PaymentDetails;
