import React from 'react';
import styled from 'styled-components';
import Navbar from '../components/homepage/Navbar';
import Sidebar from '../components/homepage/Sidebar';
import FileUploadRoundedIcon from '@mui/icons-material/FileUploadRounded';
import FolderOpenRoundedIcon from '@mui/icons-material/FolderOpenRounded';

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: row;
`;

const LeftContainer = styled.div`
  height: 100vh;
  width: 15%;
  background-color: #2658e2;
`;

const RightContainer = styled.div`
  height: 100vh;
  width: 85%;
  background-color: #2658e2;
  display: flex;
  flex-direction: column;
`;

const RightMain = styled.div`
  height: 100vh;
  width: 100%;
  background-color: blue;
`;

const RightMainTop = styled.div`
  height: 15%;
  width: 100%;
  background-color: #f6f8f8;
  display: flex;
  overflow: hidden;
  border-bottom: 1px solid #ccc;
`;

const RightMainTopLeft = styled.div`
  height: 70%;
  width: 50%;
  padding-top: 20px;
  background-color: #f6f8f8;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 20px;

  .title {
    color: black;
    font-size: 25px;
  }

  .subtitle {
    color: #999;
    font-size: 15px;
  }
`;

// const RightMainTopRight = styled.div`
//   height: 100%;
//   width: 50%;
//   background-color: #2658e2;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: flex-end;
//   padding-right: 18px;
// `;

const RightMainBottom = styled.div`
  height: 85%;
  width: 100%;
  background-color: #eaedf1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const RightMainBottomMainTabs = styled.div`
  width: 85%;
  height: 7%;
  background-color: #f6f8f8;
  display: flex;
`;

const RightMainBottomContainer = styled.div`
  height: 75%;
  width: 85%;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const RightMainBottomSubContainer = styled.div`
  height: 85%;
  width: 95%;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid black;
  z-index: 99;
`;

const RightMainBottomSubTabs = styled.div`
  width: 100%;
  height: 10%;
  background-color: #f6f8f8;
  display: flex;
  border-bottom: 1px solid black;
`;

const RightMainBottomSubTabBoxes = styled.div`
  width: 10%;
  height: 100%;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  clip-path: polygon(6% 0, 94% 0, 100% 14%, 100% 99%, 0 100%, 0 14%);
  margin-left: 1px;
  font-size: 13px;
`;

const RightMainBottomSubContainerTwo = styled.div`
  height: 75%;
  width: 90%;
  background-color: white;
  margin-top: 25px;
  display: flex;
  flex-direction: column;
  border: 1px solid black;
`;

const SubContainerTwoSection1 = styled.div`
  height: 15%;
  width: 100%;
  background-color: none;
  display: flex;
  align-items: center;
  font-size: 13px;
  padding-left: 1%;
  border-bottom: 1px solid black;
`;

const SubContainerTwoSection2 = styled.div`
  height: 25%;
  width: 100%;
  display: flex;
  background-color: none;
  border-bottom: 1px solid black;
`;

const SubContainerTwoSection2Left = styled.div`
  height: 100%;
  width: 70%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 1%;

  .doc-title {
    border: 1px solid #ccc;
    border-radius: 2px;
    background: #fff;
    width: 25%;
    height: 30%;
    font-size: 12px;
  }
  .folder {
    width: 25%;
    height: 35%;
    font-size: 12px;
    /* padding: 10px 10px 10px 10px; */
    background: #fff;
    border: 1px solid #ccc;
    border-radius: 2px;
  }

  .patient {
    width: 25%;
    height: 35%;
    font-size: 12px;
    /* padding: 10px 10px 10px 10px; */
    background: #fff;
    border: 1px solid #ccc;
    border-radius: 2px;
  }

  .file-btn {
    height: 35%;
  }
`;

const SubContainerTwoSection2Right = styled.div`
  height: 100%;
  width: 30%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 40px;
  padding-right: 40px;
`;

const SubContainerTwoSection2Button = styled.div`
  height: 25px;
  width: 62px;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;

  .upload-btn {
    height: 100%;
    width: 100%;
  }
`;

const SubContainerTwoSection3 = styled.div`
  height: 20%;
  width: 100%;
  background-color: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid black;
`;

const SubContainerTwoSection3Button = styled.div`
  height: 22px;
  width: 92px;
  background-color: orange;
  border: 0.5px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SubContainerTwoSection4 = styled.div`
  height: 20%;
  width: 100%;
  display: flex;
  align-items: center;
  background-color: white;
  border-bottom: 1px solid black;
`;

const SubContainerTwoSection5 = styled.div`
  height: 20%;
  width: 100%;
  background-color: none;
  display: flex;
  align-items: center;
`;

const Records = () => {
  return (
    <>
      <Container>
        <LeftContainer>
          <Sidebar />
        </LeftContainer>
        <RightContainer>
          <Navbar></Navbar>
          <RightMain>
            <RightMainTop>
              <RightMainTopLeft>
                <div className="title">Clinical Notes</div>
                <div className="subtitle">
                  All added documents will be listed here
                </div>
              </RightMainTopLeft>
            </RightMainTop>
            <RightMainBottom>
              <RightMainBottomMainTabs>
                <RightMainBottomSubTabBoxes>
                  Clinical Notes
                </RightMainBottomSubTabBoxes>
                <RightMainBottomSubTabBoxes>
                  Laboratory
                </RightMainBottomSubTabBoxes>
                <RightMainBottomSubTabBoxes>Imaging</RightMainBottomSubTabBoxes>
                <RightMainBottomSubTabBoxes>
                  Pharmacy
                </RightMainBottomSubTabBoxes>
                <RightMainBottomSubTabBoxes>
                  Consents
                </RightMainBottomSubTabBoxes>
                <RightMainBottomSubTabBoxes>
                  Record Sharing
                </RightMainBottomSubTabBoxes>
              </RightMainBottomMainTabs>
              <RightMainBottomContainer>
                <RightMainBottomSubContainer>
                  <RightMainBottomSubTabs>
                    <RightMainBottomSubTabBoxes>
                      Clinical Notes
                    </RightMainBottomSubTabBoxes>
                    <RightMainBottomSubTabBoxes>
                      Folders
                    </RightMainBottomSubTabBoxes>
                  </RightMainBottomSubTabs>
                  <RightMainBottomSubContainerTwo>
                    <SubContainerTwoSection1>
                      <div>Clinical Notes</div>
                    </SubContainerTwoSection1>
                    <SubContainerTwoSection2>
                      <SubContainerTwoSection2Left>
                        <input
                          type="text"
                          className="doc-title"
                          placeholder="Document Title"
                        />
                        <select name="folder" className="folder">
                          <option value="1" selected="selected">
                            Select Folder
                          </option>
                        </select>
                        <select name="patient" className="patient">
                          <option value="1" selected="selected">
                            Olive Scott
                          </option>
                          <option value="2">Leo Scott</option>
                        </select>
                        <FolderOpenRoundedIcon className="icon" />
                        <button className="file-btn">Choose File</button>
                      </SubContainerTwoSection2Left>
                      <SubContainerTwoSection2Right>
                        <SubContainerTwoSection2Button>
                          <FileUploadRoundedIcon />
                          <button className="upload-btn">Upload</button>
                        </SubContainerTwoSection2Button>
                        <SubContainerTwoSection2Button>
                          <button className="search-btn">Search</button>
                        </SubContainerTwoSection2Button>
                      </SubContainerTwoSection2Right>
                    </SubContainerTwoSection2>
                    <SubContainerTwoSection3>
                      <h5>Document Title</h5>
                      <h5>View/Download</h5>
                      <h5>Folders</h5>
                      <h5>Uploaded Date</h5>
                      <h5>Action</h5>
                      <SubContainerTwoSection3Button>
                        Share
                      </SubContainerTwoSection3Button>
                    </SubContainerTwoSection3>
                    <SubContainerTwoSection4>
                      <h5>No Record To Display</h5>
                    </SubContainerTwoSection4>
                    <SubContainerTwoSection5>
                      <h5>Showing 1-0 or 0 items</h5>
                    </SubContainerTwoSection5>
                  </RightMainBottomSubContainerTwo>
                </RightMainBottomSubContainer>
              </RightMainBottomContainer>
            </RightMainBottom>
          </RightMain>
        </RightContainer>
      </Container>
    </>
  );
};

export default Records;
