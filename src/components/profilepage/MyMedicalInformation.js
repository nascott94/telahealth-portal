import React from "react";
import styled from "@emotion/styled";

const Container = styled.div`
  height: 500px;
  width: 98%;
  background-color: orange;
  overflow: hidden;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 10px;
  overflow: scroll;
`;

const ContainerTop = styled.div`
  height: 100px;
  width: 98%;
  border-bottom: 1px solid black;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const DropDownBox = styled.div`
  width: 90%;
  height: 30px;
  border: 1px solid black;
  display: flex;
  align-items: center;
`;

const ContainerBottom = styled.div`
  height: 1800px;
  width: 90%;
  margin-top: 20px;
  margin-bottom: 20px;
  justify-content: space-between;
  align-items: space-between;
  display: flex;
  flex-wrap: wrap;
  border: 2px solid red;
`;

const BottomBoxContainer = styled.div`
  height: 340px;
  width: 240px;
  background-color: white;
  margin: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BottomBoxTop = styled.div`
  height: 20%;
  width: 97%;
  background-color: red;
  display: flex;
`;

const BottomBoxTopLeft = styled.div`
  height: 100%;
  width: 70%;
  display: flex;
  align-items: center;
`;

const BottomBoxTopRight = styled.div`
  height: 100%;
  width: 30%;
  display: flex;
  align-items: center;
`;

const BottomBoxBottom = styled.div`
  height: 75%;
  width: 97%;
  background-color: blue;
  border-radius: 10px;
  margin-top: 5px;
`;

const MyMedicalInformation = () => {
  return (
    <>
      <Container>
        <ContainerTop>
          <h4>Patient Name:</h4>
          <DropDownBox></DropDownBox>
        </ContainerTop>
        <ContainerBottom>
          <BottomBoxContainer>
            <BottomBoxTop>
              <BottomBoxTopLeft>
                <h5>Danp</h5>
                <h5>Danp</h5>
              </BottomBoxTopLeft>
              <BottomBoxTopRight>
                <h5>Danp</h5>
              </BottomBoxTopRight>
            </BottomBoxTop>
            <BottomBoxBottom></BottomBoxBottom>
          </BottomBoxContainer>
          <BottomBoxContainer></BottomBoxContainer>
          <BottomBoxContainer></BottomBoxContainer>
          <BottomBoxContainer></BottomBoxContainer>
          <BottomBoxContainer></BottomBoxContainer>
          <BottomBoxContainer></BottomBoxContainer>
          <BottomBoxContainer></BottomBoxContainer>
          <BottomBoxContainer></BottomBoxContainer>
          <BottomBoxContainer></BottomBoxContainer>
          <BottomBoxContainer></BottomBoxContainer>
          <BottomBoxContainer></BottomBoxContainer>
          <BottomBoxContainer></BottomBoxContainer>
          <BottomBoxContainer></BottomBoxContainer>
        </ContainerBottom>
      </Container>
    </>
  );
};

export default MyMedicalInformation;
