import React from 'react';
import styled from '@emotion/styled';

const TopContainer = styled.div`
  .dashboard-top {
    display: flex;
    justify-content: space-between;
    flex: 1;
    padding: 10px;
    -webkit-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
    box-shadow: 2px 4px 10px 1px rgba(201, 201, 201, 0.47);
    border-radius: 10px;
    width: 90%;
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

      .button {
        width: 100%;
        height: 80%;
        padding: 17px;
        background-color: orange;
        border-radius: 10px;
        border: none;
        cursor: pointer;
      }
    }
  }
`;

const BottomContainer = styled.div`
  .dashboard-bottom {
    display: flex;
    justify-content: space-between;
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
    }

    .right {
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
    }
  }
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
            <button className="button">Make Appointment</button>
          </div>
        </div>
      </TopContainer>
      <BottomContainer>
        <div className="dashboard-bottom">
          <div className="left">
            <div className="title">Hello Olive</div>
            <div className="sub-title">Welcome to your dashboard</div>
            <div>Today's Appointments</div>
          </div>
          <div className="right">
            <select name="patient" className="patient">
              <option value="1" selected="selected">
                Olive Scott (self)
              </option>
              <option value="2" selected="selected">
                Leo Scott
              </option>
            </select>
          </div>
        </div>
      </BottomContainer>
    </>
  );
};

export default Dashboard;
