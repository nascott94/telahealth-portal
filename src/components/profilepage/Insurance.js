import React from "react";
import styled from "@emotion/styled";

const Container = styled.div`
  height: 98%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: orange;
`;

const NavBarContainer = styled.div`
  height: 60px;
  width: 98%;
  display: flex;
  margin-top: 10px;
`;

const NavBarBoxes = styled.div`
  height: 100%;
  width: 18%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: purple;
`;

const PatientNameContainer = styled.div`
  height: 100px;
  width: 98%;
  display: flex;
  flex-direction: column;
  margin-top: 5px;
`;

const DropDownBox = styled.div`
  width: 40%;
  height: 30px;
  border: 1px solid black;
  display: flex;
  align-items: center;
  margin-right: 30px;
`;

const PatientInsuranceContainer = styled.div`
  height: 100px;
  width: 98%;
`;

const PatientInsuranceLeft = styled.div`
  height: 80px;
  width: 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PatientInsuranceLeftTop = styled.div`
  height: 50%;
  width: 100%;
  display: flex;
  align-items: center;
`;
const PatientInsuranceLeftBottom = styled.div`
  height: 50%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const PatientInsuranceRight = styled.div`
  height: 120px;
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: right
  align-items: center;
`;

const Insurance = () => {
  return (
    <>
      <Container>
        <NavBarContainer>
          <NavBarBoxes>One</NavBarBoxes>
          <NavBarBoxes>Two</NavBarBoxes>
          <NavBarBoxes>Three</NavBarBoxes>
          <NavBarBoxes>Four</NavBarBoxes>
        </NavBarContainer>
        <PatientNameContainer>
          <h4>Patient Name</h4>
          <DropDownBox></DropDownBox>
        </PatientNameContainer>
        <PatientInsuranceContainer>
          <PatientInsuranceLeft>
            <PatientInsuranceLeftTop>
              <h4>Patient Insurance</h4>
            </PatientInsuranceLeftTop>
            <PatientInsuranceLeftBottom>
              <h5>Show</h5>
              <h5>Box</h5>
              <h5>entries</h5>
            </PatientInsuranceLeftBottom>
          </PatientInsuranceLeft>
          <PatientInsuranceRight></PatientInsuranceRight>
        </PatientInsuranceContainer>
      </Container>
    </>
  );
};

export default Insurance;
