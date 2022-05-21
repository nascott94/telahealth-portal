import React from "react";
import styled from "@emotion/styled";

const Container = styled.div`
  height: 100%;
  width: 100%;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HeaderContainer = styled.div`
  height: 100px;
  width: 98%;
  display: flex;
  align-items: center;
  border-bottom: 1px solid black;
`;

const AddressContainer = styled.div`
  height: 100px;
  width: 98%;
  display: flex;
`;

const AddressLeft = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid black;
  justify-content: center;
`;

const AddressRight = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid black;
  justify-content: center;
`;

const InputBox = styled.div`
  height: 30px;
  width: 90%;
  border-bottom: 1px solid black;
`;

const CountryContainer = styled.div`
  height: 130px;
  width: 98%;
  display: flex;
  margin-top: 10px;
`;

const CountryContainerLeft = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  flex-direction: column;
`;

const CountryContainerRight = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  flex-direction: column;
`;

const AddressContactInfo = () => {
  return (
    <>
      <Container>
        <HeaderContainer>Address and Contact Information</HeaderContainer>
        <AddressContainer>
          <AddressLeft>
            <h4>Address 1</h4>
            <InputBox></InputBox>
          </AddressLeft>
          <AddressRight>
            <h4>Address 2</h4>
            <InputBox></InputBox>
          </AddressRight>
        </AddressContainer>
        <CountryContainer>
          <CountryContainerLeft>
            <h4>Country of residence</h4>
            <h4>County</h4>
          </CountryContainerLeft>
          <CountryContainerRight>
            <h4>State</h4>
          </CountryContainerRight>
        </CountryContainer>
      </Container>
    </>
  );
};

export default AddressContactInfo;
