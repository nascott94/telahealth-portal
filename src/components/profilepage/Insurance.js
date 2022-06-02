import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
  height: 500px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  border-top: 1px solid #ccc;
`;

const NavBarContainer = styled.div`
  height: 60px;
  width: 98%;
  display: flex;
  margin-top: 11px;
  border-bottom: 1px solid #ccc;
`;

const NavBarBoxes = styled.div`
  height: 100%;
  width: 18%;
  display: flex;
  align-items: center;
  background-color: white;
  font-size: 15px;
  font-weight: bold;
  color: grey;
`;

const PatientNameContainer = styled.div`
  height: 75px;
  width: 98%;
  display: flex;
  flex-direction: column;
  margin-top: 5px;
  font-size: 14px;
  font-weight: bold;

  .folder {
    height: 35px;
    width: 440px;
    background-color: #eaedf1;
    border-top: none;
    border-right: none;
    border-left: none;
    border-bottom: 1px solid #ccc;
  }
`;

// const DropDownBox = styled.div`
//   width: 40%;
//   height: 30px;
//   border: 1px solid black;
//   display: flex;
//   align-items: center;
//   margin-right: 30px;
// `;

const PatientInsuranceContainer = styled.div`
  height: 100px;
  width: 98%;
  font-size: 14px;
  font-weight: bold;
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

  .underline {
    border-bottom: 1px solid #ccc;
  }
`;
const PatientInsuranceLeftBottom = styled.div`
  height: 50%;
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 40%;

  .folder {
    height: 25px;
    background-color: #eaedf1;
    border-top: none;
    border-right: none;
    border-left: none;
    border-bottom: 1px solid #ccc;
  }
`;

const PatientInsuranceRight = styled.div`
  height: 120px;
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: right;
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
  font-size: 14px;
  font-weight: bold;
`;

const InsuranceTypeContainerBottom = styled.div`
  height: 50%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ccc;
  font-size: 14px;
`;

const Footer = styled.div`
  height: 70px;
  width: 98%;
  background-color: white;
  justify-content: space-between;
  display: flex;
  font-size: 14px;
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

  button {
    height: 50%;
    width: 48%;
    cursor: pointer;
  }
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
          <div>Patient Name:</div>
          <select name="folder" className="folder">
            <option value="1" selected="selected">
              Olive Scott
            </option>
          </select>
        </PatientNameContainer>
        <PatientInsuranceContainer>
          <PatientInsuranceLeft>
            <PatientInsuranceLeftTop>
              <div className="underline">Patient Insurance</div>
            </PatientInsuranceLeftTop>
            <PatientInsuranceLeftBottom>
              <div>Show</div>
              <select name="folder" className="folder">
                <option value="1" selected="selected">
                  10
                </option>
              </select>
              <div>entries</div>
            </PatientInsuranceLeftBottom>
          </PatientInsuranceLeft>
          <PatientInsuranceRight></PatientInsuranceRight>
        </PatientInsuranceContainer>
        <InsuranceTypeContainer>
          <InsuranceTypeContainerTop>
            <div>Company Name</div>
            <div>Plan Name</div>
            <div>Insurance Type</div>
            <div>Policy Number</div>
            <div>Policy Type</div>
            <div>Action</div>
          </InsuranceTypeContainerTop>
          <InsuranceTypeContainerBottom>
            No Insurance Available
          </InsuranceTypeContainerBottom>
        </InsuranceTypeContainer>
        <Footer>
          <FooterLeft>Showing 0 to 0 of 0 entries</FooterLeft>
          <FooterRight>
            <button>Next</button>
            <button>Back</button>
          </FooterRight>
        </Footer>
      </Container>
    </>
  );
};

export default Insurance;
