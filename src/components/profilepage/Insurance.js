import React from "react";
import styled from "@emotion/styled";

const Container = styled.div`
  height: 500px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  border-top: 1px solid black;
`;

const NavBarContainer = styled.div`
  height: 60px;
  width: 98%;
  display: flex;
  margin-top: 11px;
  border-bottom: 1px solid black;
`;

const NavBarBoxes = styled.div`
  height: 100%;
  width: 18%;
  display: flex;
  align-items: center;
  background-color: white;
`;

const PatientNameContainer = styled.div`
  height: 75px;
  width: 98%;
  display: flex;
  flex-direction: column;
  margin-top: 5px;

  .folder {
    height: 30px;
    width: 440px;
  }
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
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 40%;
`;

const PatientInsuranceRight = styled.div`
  height: 120px;
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: right
  align-items: center;
`;

const InsuranceTypeContainer = styled.div`
  height: 100px;
  width: 98%;
  background-color: white;
  display: flex;
  flex-direction: column;
`;

const InsuranceTypeContainerTop = styled.div`
  height: 50%;
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const InsuranceTypeContainerBottom = styled.div`
  height: 50%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: grey;
`;

const Footer = styled.div`
  height: 70px;
  width: 98%;
  background-color: white;
  justify-content: space-between;
  display: flex;
`;

const FooterLeft = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  align-items: center;
`;

const FooterRight = styled.div`
  height: 100%;
  width: 10%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 20px;
`;

const Insurance = () => {
  return (
    <>
      <Container>
        <NavBarContainer>
          <NavBarBoxes>Medical Insurance</NavBarBoxes>
          <NavBarBoxes>Pharamcy Insurance</NavBarBoxes>
          <NavBarBoxes>Vision Insurance</NavBarBoxes>
          <NavBarBoxes>Dental Insurance</NavBarBoxes>
        </NavBarContainer>
        <PatientNameContainer>
          <h4>Patient Name:</h4>
          <select name="folder" className="folder">
            <option value="1" selected="selected">
              Nat Scott
            </option>
          </select>
        </PatientNameContainer>
        <PatientInsuranceContainer>
          <PatientInsuranceLeft>
            <PatientInsuranceLeftTop>
              <h4>Patient Insurance</h4>
            </PatientInsuranceLeftTop>
            <PatientInsuranceLeftBottom>
              <h5>Show</h5>
              <select name="folder" className="folder">
                <option value="1" selected="selected">
                  10
                </option>
              </select>
              <h5>entries</h5>
            </PatientInsuranceLeftBottom>
          </PatientInsuranceLeft>
          <PatientInsuranceRight></PatientInsuranceRight>
        </PatientInsuranceContainer>
        <InsuranceTypeContainer>
          <InsuranceTypeContainerTop>
            <h5>Company Name</h5>
            <h5>Plan Name</h5>
            <h5>Insurance Type</h5>
            <h5>Policy Number</h5>
            <h5>Policy Type</h5>
            <h5>Action</h5>
          </InsuranceTypeContainerTop>
          <InsuranceTypeContainerBottom>
            No Insurance Available
          </InsuranceTypeContainerBottom>
        </InsuranceTypeContainer>
        <Footer>
          <FooterLeft>Showing 0 to 0 of 0 entries</FooterLeft>
          <FooterRight>
            <h4>Next</h4>
            <h4>Back</h4>
          </FooterRight>
        </Footer>
      </Container>
    </>
  );
};

export default Insurance;
