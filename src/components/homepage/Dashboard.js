import React from "react";
import styled from "@emotion/styled";

const TopContainer = styled.div`
  .dashboard-top {
    display: flex;
    justify-content: space-between;
    flex: 1;
    padding: 10px;
    -webkit-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
    box-shadow: 2px 4px 10px 1px rgba(201, 201, 201, 0.47);
    border-radius: 5px;
    width: 95%;
    height: 75px;

    .left {
      display: flex;
      flex-direction: column;

      .title {
        font-size: 20px;
        color: black;
      }
      .sub-title {
        font-weight: bold;
        font-size: 15px;
        color: rgb(160, 160, 160);
        margin-top: 5px;
      }
    }

    .right {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding-right: 30px;

      .appt-button {
        width: 100%;
        height: 80%;
        padding: 17px;
        background-color: #f7bc01;
        border-radius: 10px;
        border: none;
        cursor: pointer;
        :hover {
          background-color: #eaedf1;
        }
      }
    }
  }
`;

const BottomContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  padding-top: 25px;
  width: 95%;
  height: 400px;
  padding-left: 1.5%;

  /* .dashboard-bottom {
    display: flex;
    flex-direction: column;
    padding: 10px;
    padding-top: 25px;
    width: 90%;

    .left {
      display: flex;
      flex-direction: column;
      .title {
        font-weight: bold;
        font-size: 35px;
        color: black;
      }
      .sub-title {
        font-size: 20px;
        color: rgb(160, 160, 160);
        margin-top: 5px;
      }

      .appointments {
        display: flex;
        flex-flow: row wrap;
        padding-top: 30px;

        .view-button {
          width: 194%;
        }
        .appt-box {
          display: flex;
          flex-direction: column;
          -webkit-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
          box-shadow: 2px 4px 10px 1px rgba(201, 201, 201, 0.47);
          border-radius: 10px;
          width: 194%;
          height: 75px;
        }
      }

      .test-results {
        display: flex;
        flex-direction: column;
        padding-top: 30px;

        .view-button {
          /* margin-left: auto; */
          /* justify-content: space-between;
          width: 194%;
        }

        .test-box {
          -webkit-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
          box-shadow: 2px 4px 10px 1px rgba(201, 201, 201, 0.47);
          border-radius: 10px;
          width: 194%;
          height: 75px;
        }
      } */
    }

    /* .right {
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      .patient {
        font-size: 15px;
        padding: 10px 100px 10px 20px;
        background: #fff;
        border: 1px solid #ccc;
        border-radius: 6px;
      }
    } */ */
  }
`;

const BottomContainerTop = styled.div`
  height: 110px;
  width: 100%;
  background-color: #eaedf1;
  display: flex;
`;

const BottomTopLeft = styled.div`
  height: 50%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const BottomTopRight = styled.div`
  height: 200px;
  width: 100%;

  .folder {
    width: 100%;
    height: 20%;
    border: 1px solid #ccc;
  }
`;

const BottomContainerBottom = styled.div`
  height: 300px;
  width: 100%;
  background-color: #eaedf1;
  display: flex;
`;

const BottomBottomLeft = styled.div`
  height: 100%;
  width: 42%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ViewBox = styled.div`
  height: 45%;
  width: 100%;
  background-color: white;
  display: flex;
  flex-direction: column;
`;

const ViewBoxTop = styled.div`
  height: 30%;
  width: 100%;
  display: flex;
  align-items: center;
  background-color: #eaedf1;

  .margin {
    margin-left: 75px;
  }
`;

const ViewBoxBottom = styled.div`
  height: 50%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BottomBottomRight = styled.div`
  height: 100%;
  width: 50%;
`;

const Dashboard = () => {
  return (
    <>
      <TopContainer>
        <div className="dashboard-top">
          <div className="left">
            <span className="title">Patient Dashboard</span>
            <span className="sub-title">Welcome to the Patient Dashboard</span>
          </div>
          <div className="right">
            <button className="appt-button">Make Appointment</button>
          </div>
        </div>
      </TopContainer>
      <BottomContainer>
        <BottomContainerTop>
          <BottomTopLeft>
            <h1>Hello Natalie</h1>
            <div>Welcome to your dashboard</div>
          </BottomTopLeft>
          <BottomTopRight>
            <select name="folder" className="folder">
              <option value="1" selected="selected">
                Natalie Scott (self)
              </option>
            </select>
          </BottomTopRight>
        </BottomContainerTop>
        <BottomContainerBottom>
          <BottomBottomLeft>
            <ViewBox>
              <ViewBoxTop>
                <div>Today's appointments and registrations </div>
                <div className="margin">View All</div>
              </ViewBoxTop>
              <ViewBoxBottom>
                <div>None today.</div>
              </ViewBoxBottom>
            </ViewBox>
            <ViewBox>
              <ViewBoxTop>
                <div>Today's appointments and registrations </div>
                <div className="margin">View All</div>
              </ViewBoxTop>
              <ViewBoxBottom>
                <div>None today.</div>
              </ViewBoxBottom>
            </ViewBox>
          </BottomBottomLeft>
          <BottomBottomRight></BottomBottomRight>
        </BottomContainerBottom>
        {/* <div className="dashboard-bottom">
          <div className="left">
            <div className="title">Hello Olive</div>
            <div className="sub-title">Welcome to your dashboard</div>
            <div className="appointments">
              <div>Today's appointments and registations</div>
              <button className="view-button">View All</button>
              <div className="appt-box">None Today</div>
            </div>
            <div className="test-results">
              <div>Today's appointments and registations</div>
              <button className="view-button">View All</button>
              <div className="test-box">None Today</div>
            </div>
          </div>
          <div className="right">
            <select name="patient" className="patient">
              <option value="1" selected="selected">
                Olive Scott (self)
              </option>
              <option value="2">Leo Scott</option>
            </select>
          </div>
        </div> */}
      </BottomContainer>
    </>
  );
};

export default Dashboard;
