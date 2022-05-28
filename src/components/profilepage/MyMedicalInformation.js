import React from "react";
import styled from "@emotion/styled";
import AdjustIcon from "@mui/icons-material/Adjust";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";

const Container = styled.div`
  height: 500px;
  width: 98%;
  background-color: white;
  overflow: hidden;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 10px;
  overflow: scroll;
  border-top: 1px solid #ccc;
`;

const ContainerTop = styled.div`
  height: 120px;
  width: 98%;
  border-bottom: 1px solid #ccc;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .folder {
    height: 30px;
    width: 700px;
    margin-bottom: 15px;
    background-color: #eaedf1;
    border-top: none;
    border-right: none;
    border-left: none;
    border-bottom: 1px solid #ccc;
  }
`;

const DropDownBox = styled.div`
  width: 90%;
  height: 30px;
  border-bottom: 1px solid #ccc;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const ContainerBottom = styled.div`
  height: 100%;
  width: 90%;
  margin-top: 20px;
  margin-bottom: 20px;
  justify-content: space-between;
  align-items: space-between;
  display: flex;
  flex-wrap: wrap;
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
  height: 15%;
  width: 97%;
  background-color: white;
  display: flex;
`;

const BottomBoxTopLeft = styled.div`
  height: 100%;
  width: 85%;
  display: flex;
  align-items: center;

  .icon {
    height: 45px;
    width: 45px;
  }
`;

const BottomBoxTopRight = styled.div`
  height: 100%;
  width: 15%;
  display: flex;
  align-items: center;

  .plusIcon {
    height: 25px;
    width: 25px;
  }
`;

const BottomBoxBottom = styled.div`
  height: 85%;
  width: 97%;
  background-color: blue;
  border-radius: 10px;
  margin-top: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Item = styled.div`
  height: 18%;
  width: 95%;
  border-bottom: 1px solid black;
  display: flex;
`;

const ItemLeft = styled.div`
  height: 100%;
  width: 20%;
  display: flex;
  align-items: center;
  padding-left: 5px;
`;

const ItemRight = styled.div`
  height: 100%;
  width: 80%;
  display: flex;
  align-items: center;
`;

const MyMedicalInformation = () => {
  return (
    <>
      <Container>
        <ContainerTop>
          <h4>Patient Name:</h4>
          <select name="folder" className="folder">
            <option value="1" selected="selected">
              Select File
            </option>
          </select>
        </ContainerTop>
        <ContainerBottom>
          <BottomBoxContainer>
            <BottomBoxTop>
              <BottomBoxTopLeft>
                <AdjustIcon className="icon" />
                <h3>Vitals</h3>
              </BottomBoxTopLeft>
              <BottomBoxTopRight>
                <AddRoundedIcon className="plusIcon" />
              </BottomBoxTopRight>
            </BottomBoxTop>
            <BottomBoxBottom>
              <Item>
                <ItemLeft>
                  <MedicalServicesIcon />
                </ItemLeft>
                <ItemRight>
                  <h5>No Data Available</h5>
                </ItemRight>
              </Item>
            </BottomBoxBottom>
          </BottomBoxContainer>
          <BottomBoxContainer>
            <BottomBoxTop>
              <BottomBoxTopLeft>
                <AdjustIcon className="icon" />
                <h3>Medications</h3>
              </BottomBoxTopLeft>
              <BottomBoxTopRight>
                <AddRoundedIcon className="plusIcon" />
              </BottomBoxTopRight>
            </BottomBoxTop>
            <BottomBoxBottom>
              <Item>
                <ItemLeft>
                  <MedicalServicesIcon />
                </ItemLeft>
                <ItemRight>
                  <h5>No Data Available</h5>
                </ItemRight>
              </Item>
            </BottomBoxBottom>
          </BottomBoxContainer>
          <BottomBoxContainer>
            <BottomBoxTop>
              <BottomBoxTopLeft>
                <AdjustIcon className="icon" />
                <h3>Allergies</h3>
              </BottomBoxTopLeft>
              <BottomBoxTopRight>
                <AddRoundedIcon className="plusIcon" />
              </BottomBoxTopRight>
            </BottomBoxTop>
            <BottomBoxBottom>
              <Item>
                <ItemLeft>
                  <MedicalServicesIcon />
                </ItemLeft>
                <ItemRight>
                  <h5>No Data Available</h5>
                </ItemRight>
              </Item>
            </BottomBoxBottom>
          </BottomBoxContainer>
          <BottomBoxContainer>
            <BottomBoxTop>
              <BottomBoxTopLeft>
                <AdjustIcon className="icon" />
                <h3>Surgical history</h3>
              </BottomBoxTopLeft>
              <BottomBoxTopRight>
                <AddRoundedIcon className="plusIcon" />
              </BottomBoxTopRight>
            </BottomBoxTop>
            <BottomBoxBottom>
              <Item>
                <ItemLeft>
                  <MedicalServicesIcon />
                </ItemLeft>
                <ItemRight>
                  <h5>No Data Available</h5>
                </ItemRight>
              </Item>
            </BottomBoxBottom>
          </BottomBoxContainer>
          <BottomBoxContainer>
            <BottomBoxTop>
              <BottomBoxTopLeft>
                <AdjustIcon className="icon" />
                <h3>Social history</h3>
              </BottomBoxTopLeft>
              <BottomBoxTopRight>
                <AddRoundedIcon className="plusIcon" />
              </BottomBoxTopRight>
            </BottomBoxTop>
            <BottomBoxBottom>
              <Item>
                <ItemLeft>
                  <MedicalServicesIcon />
                </ItemLeft>
                <ItemRight>
                  <h5>No Data Available</h5>
                </ItemRight>
              </Item>
            </BottomBoxBottom>
          </BottomBoxContainer>
          <BottomBoxContainer>
            <BottomBoxTop>
              <BottomBoxTopLeft>
                <AdjustIcon className="icon" />
                <h3>Family history</h3>
              </BottomBoxTopLeft>
              <BottomBoxTopRight>
                <AddRoundedIcon className="plusIcon" />
              </BottomBoxTopRight>
            </BottomBoxTop>
            <BottomBoxBottom>
              <Item>
                <ItemLeft>
                  <MedicalServicesIcon />
                </ItemLeft>
                <ItemRight>
                  <h5>No Data Available</h5>
                </ItemRight>
              </Item>
            </BottomBoxBottom>
          </BottomBoxContainer>
          <BottomBoxContainer>
            <BottomBoxTop>
              <BottomBoxTopLeft>
                <AdjustIcon className="icon" />
                <h3>Medical history</h3>
              </BottomBoxTopLeft>
              <BottomBoxTopRight>
                <AddRoundedIcon className="plusIcon" />
              </BottomBoxTopRight>
            </BottomBoxTop>
            <BottomBoxBottom>
              <Item>
                <ItemLeft>
                  <MedicalServicesIcon />
                </ItemLeft>
                <ItemRight>
                  <h5>No Data Available</h5>
                </ItemRight>
              </Item>
            </BottomBoxBottom>
          </BottomBoxContainer>
          <BottomBoxContainer>
            <BottomBoxTop>
              <BottomBoxTopLeft>
                <AdjustIcon className="icon" />
                <h3>Goal</h3>
              </BottomBoxTopLeft>
              <BottomBoxTopRight>
                <AddRoundedIcon className="plusIcon" />
              </BottomBoxTopRight>
            </BottomBoxTop>
            <BottomBoxBottom>
              <Item>
                <ItemLeft>
                  <MedicalServicesIcon />
                </ItemLeft>
                <ItemRight>
                  <h5>No Data Available</h5>
                </ItemRight>
              </Item>
            </BottomBoxBottom>
          </BottomBoxContainer>
          <BottomBoxContainer>
            <BottomBoxTop>
              <BottomBoxTopLeft>
                <AdjustIcon className="icon" />
                <h3>Care Team</h3>
              </BottomBoxTopLeft>
              <BottomBoxTopRight>
                <AddRoundedIcon className="plusIcon" />
              </BottomBoxTopRight>
            </BottomBoxTop>
            <BottomBoxBottom>
              <Item>
                <ItemLeft>
                  <MedicalServicesIcon />
                </ItemLeft>
                <ItemRight>
                  <h5>No Data Available</h5>
                </ItemRight>
              </Item>
            </BottomBoxBottom>
          </BottomBoxContainer>
          <BottomBoxContainer>
            <BottomBoxTop>
              <BottomBoxTopLeft>
                <AdjustIcon className="icon" />
                <h3>Conditions</h3>
              </BottomBoxTopLeft>
              <BottomBoxTopRight>
                <AddRoundedIcon className="plusIcon" />
              </BottomBoxTopRight>
            </BottomBoxTop>
            <BottomBoxBottom>
              <Item>
                <ItemLeft>
                  <MedicalServicesIcon />
                </ItemLeft>
                <ItemRight>
                  <h5>No Data Available</h5>
                </ItemRight>
              </Item>
            </BottomBoxBottom>
          </BottomBoxContainer>
          <BottomBoxContainer>
            <BottomBoxTop>
              <BottomBoxTopLeft>
                <AdjustIcon className="icon" />
                <h3>Covid Credentails</h3>
              </BottomBoxTopLeft>
              <BottomBoxTopRight>
                <AddRoundedIcon className="plusIcon" />
              </BottomBoxTopRight>
            </BottomBoxTop>
            <BottomBoxBottom>
              <Item>
                <ItemLeft>
                  <MedicalServicesIcon />
                </ItemLeft>
                <ItemRight>
                  <h5>No Data Available</h5>
                </ItemRight>
              </Item>
            </BottomBoxBottom>
          </BottomBoxContainer>
          <BottomBoxContainer>
            <BottomBoxTop>
              <BottomBoxTopLeft>
                <AdjustIcon className="icon" />
                <h3>Growth Chart</h3>
              </BottomBoxTopLeft>
              <BottomBoxTopRight>
                <AddRoundedIcon className="plusIcon" />
              </BottomBoxTopRight>
            </BottomBoxTop>
            <BottomBoxBottom>
              <Item>
                <ItemLeft>
                  <MedicalServicesIcon />
                </ItemLeft>
                <ItemRight>
                  <h5>No Data Available</h5>
                </ItemRight>
              </Item>
            </BottomBoxBottom>
          </BottomBoxContainer>
          <BottomBoxContainer>
            <BottomBoxTop>
              <BottomBoxTopLeft>
                <AdjustIcon className="icon" />
                <h3>Medical Devices</h3>
              </BottomBoxTopLeft>
              <BottomBoxTopRight>
                <AddRoundedIcon className="plusIcon" />
              </BottomBoxTopRight>
            </BottomBoxTop>
            <BottomBoxBottom>
              <Item>
                <ItemLeft>
                  <MedicalServicesIcon />
                </ItemLeft>
                <ItemRight>
                  <h5>No Data Available</h5>
                </ItemRight>
              </Item>
            </BottomBoxBottom>
          </BottomBoxContainer>
        </ContainerBottom>
      </Container>
    </>
  );
};

export default MyMedicalInformation;
