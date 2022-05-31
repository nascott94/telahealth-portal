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
  height: 310px;
  width: 240px;
  background-color: white;
  margin: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .blue {
    background-color: #b5e9e9;
    height: 340px;
    width: 240px;
    margin: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .tan {
    background-color: #fef6dd;
    height: 340px;
    width: 240px;
    margin: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .pink {
    background-color: #ffe1d0;
    height: 340px;
    width: 240px;
    margin: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .yellow {
    background-color: #fff1b5;
    height: 340px;
    width: 240px;
    margin: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .green {
    background-color: #dcf3d0;
    height: 340px;
    width: 240px;
    margin: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
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
          <div>Patient Name:</div>
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
                <div>Vitals</div>
              </BottomBoxTopLeft>
              <BottomBoxTopRight>
                <AddRoundedIcon className="plusIcon" />
              </BottomBoxTopRight>
            </BottomBoxTop>
            <BottomBoxBottom className="blue">
              <Item>
                <ItemLeft>
                  <MedicalServicesIcon />
                </ItemLeft>
                <ItemRight>
                  <div>No Data Available</div>
                </ItemRight>
              </Item>
            </BottomBoxBottom>
          </BottomBoxContainer>
          <BottomBoxContainer>
            <BottomBoxTop>
              <BottomBoxTopLeft>
                <AdjustIcon className="icon" />
                <div>Medications</div>
              </BottomBoxTopLeft>
              <BottomBoxTopRight>
                <AddRoundedIcon className="plusIcon" />
              </BottomBoxTopRight>
            </BottomBoxTop>
            <BottomBoxBottom className="tan">
              <Item>
                <ItemLeft>
                  <MedicalServicesIcon />
                </ItemLeft>
                <ItemRight>
                  <div>No Data Available</div>
                </ItemRight>
              </Item>
            </BottomBoxBottom>
          </BottomBoxContainer>
          <BottomBoxContainer>
            <BottomBoxTop>
              <BottomBoxTopLeft>
                <AdjustIcon className="icon" />
                <div>Allergies</div>
              </BottomBoxTopLeft>
              <BottomBoxTopRight>
                <AddRoundedIcon className="plusIcon" />
              </BottomBoxTopRight>
            </BottomBoxTop>
            <BottomBoxBottom className="pink">
              <Item>
                <ItemLeft>
                  <MedicalServicesIcon />
                </ItemLeft>
                <ItemRight>
                  <div>No Data Available</div>
                </ItemRight>
              </Item>
            </BottomBoxBottom>
          </BottomBoxContainer>
          <BottomBoxContainer>
            <BottomBoxTop>
              <BottomBoxTopLeft>
                <AdjustIcon className="icon" />
                <div>Surgical history</div>
              </BottomBoxTopLeft>
              <BottomBoxTopRight>
                <AddRoundedIcon className="plusIcon" />
              </BottomBoxTopRight>
            </BottomBoxTop>
            <BottomBoxBottom className="yellow">
              <Item>
                <ItemLeft>
                  <MedicalServicesIcon />
                </ItemLeft>
                <ItemRight>
                  <div>No Data Available</div>
                </ItemRight>
              </Item>
            </BottomBoxBottom>
          </BottomBoxContainer>
          <BottomBoxContainer>
            <BottomBoxTop>
              <BottomBoxTopLeft>
                <AdjustIcon className="icon" />
                <div>Social history</div>
              </BottomBoxTopLeft>
              <BottomBoxTopRight>
                <AddRoundedIcon className="plusIcon" />
              </BottomBoxTopRight>
            </BottomBoxTop>
            <BottomBoxBottom className="blue">
              <Item>
                <ItemLeft>
                  <MedicalServicesIcon />
                </ItemLeft>
                <ItemRight>
                  <div>No Data Available</div>
                </ItemRight>
              </Item>
            </BottomBoxBottom>
          </BottomBoxContainer>
          <BottomBoxContainer>
            <BottomBoxTop>
              <BottomBoxTopLeft>
                <AdjustIcon className="icon" />
                <div>Family history</div>
              </BottomBoxTopLeft>
              <BottomBoxTopRight>
                <AddRoundedIcon className="plusIcon" />
              </BottomBoxTopRight>
            </BottomBoxTop>
            <BottomBoxBottom className="tan">
              <Item>
                <ItemLeft>
                  <MedicalServicesIcon />
                </ItemLeft>
                <ItemRight>
                  <div>No Data Available</div>
                </ItemRight>
              </Item>
            </BottomBoxBottom>
          </BottomBoxContainer>
          <BottomBoxContainer>
            <BottomBoxTop>
              <BottomBoxTopLeft>
                <AdjustIcon className="icon" />
                <div>Medical history</div>
              </BottomBoxTopLeft>
              <BottomBoxTopRight>
                <AddRoundedIcon className="plusIcon" />
              </BottomBoxTopRight>
            </BottomBoxTop>
            <BottomBoxBottom className="pink">
              <Item>
                <ItemLeft>
                  <MedicalServicesIcon />
                </ItemLeft>
                <ItemRight>
                  <div>No Data Available</div>
                </ItemRight>
              </Item>
            </BottomBoxBottom>
          </BottomBoxContainer>
          <BottomBoxContainer>
            <BottomBoxTop>
              <BottomBoxTopLeft>
                <AdjustIcon className="icon" />
                <div>Goal</div>
              </BottomBoxTopLeft>
              <BottomBoxTopRight>
                <AddRoundedIcon className="plusIcon" />
              </BottomBoxTopRight>
            </BottomBoxTop>
            <BottomBoxBottom className="yellow">
              <Item>
                <ItemLeft>
                  <MedicalServicesIcon />
                </ItemLeft>
                <ItemRight>
                  <div>No Data Available</div>
                </ItemRight>
              </Item>
            </BottomBoxBottom>
          </BottomBoxContainer>
          <BottomBoxContainer>
            <BottomBoxTop>
              <BottomBoxTopLeft>
                <AdjustIcon className="icon" />
                <div>Care Team</div>
              </BottomBoxTopLeft>
              <BottomBoxTopRight>
                <AddRoundedIcon className="plusIcon" />
              </BottomBoxTopRight>
            </BottomBoxTop>
            <BottomBoxBottom className="blue">
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
                <div>Conditions</div>
              </BottomBoxTopLeft>
              <BottomBoxTopRight>
                <AddRoundedIcon className="plusIcon" />
              </BottomBoxTopRight>
            </BottomBoxTop>
            <BottomBoxBottom className="tan">
              <Item>
                <ItemLeft>
                  <MedicalServicesIcon />
                </ItemLeft>
                <ItemRight>
                  <div>No Data Available</div>
                </ItemRight>
              </Item>
            </BottomBoxBottom>
          </BottomBoxContainer>
          <BottomBoxContainer>
            <BottomBoxTop>
              <BottomBoxTopLeft>
                <AdjustIcon className="icon" />
                <div>Covid Credentails</div>
              </BottomBoxTopLeft>
              <BottomBoxTopRight>
                <AddRoundedIcon className="plusIcon" />
              </BottomBoxTopRight>
            </BottomBoxTop>
            <BottomBoxBottom className="pink">
              <Item>
                <ItemLeft>
                  <MedicalServicesIcon />
                </ItemLeft>
                <ItemRight>
                  <div>No Data Available</div>
                </ItemRight>
              </Item>
            </BottomBoxBottom>
          </BottomBoxContainer>
          <BottomBoxContainer>
            <BottomBoxTop>
              <BottomBoxTopLeft>
                <AdjustIcon className="icon" />
                <div>Growth Chart</div>
              </BottomBoxTopLeft>
              <BottomBoxTopRight>
                <AddRoundedIcon className="plusIcon" />
              </BottomBoxTopRight>
            </BottomBoxTop>
            <BottomBoxBottom className="yellow">
              <Item>
                <ItemLeft>
                  <MedicalServicesIcon />
                </ItemLeft>
                <ItemRight>
                  <div>No Data Available</div>
                </ItemRight>
              </Item>
            </BottomBoxBottom>
          </BottomBoxContainer>
          <BottomBoxContainer>
            <BottomBoxTop>
              <BottomBoxTopLeft>
                <AdjustIcon className="icon" />
                <div>Medical Devices</div>
              </BottomBoxTopLeft>
              <BottomBoxTopRight>
                <AddRoundedIcon className="plusIcon" />
              </BottomBoxTopRight>
            </BottomBoxTop>
            <BottomBoxBottom className="blue">
              <Item>
                <ItemLeft>
                  <MedicalServicesIcon />
                </ItemLeft>
                <ItemRight>
                  <div>No Data Available</div>
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
