import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import DashboardIcon from '@mui/icons-material/Dashboard';
import StoreIcon from '@mui/icons-material/Store';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import SettingsSystemDaydreamOutlinedIcon from '@mui/icons-material/SettingsSystemDaydreamOutlined';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

const Container = styled.div`
  .sidebar {
    flex: 1;
    border-right: 0.5px soild rgb(230, 227, 227);
    min-height: 100vh;
    background-color: white;
    .top {
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .logo {
      font-size: 20px;
      font-weight: bold;
      color: #6439ff;
    }
  }

  hr {
    height: 0;
    border: 0.5px soild rgb(230, 227, 227);
  }

  .center {
    padding-left: 10px;

    ul {
      list-style: none;
      margin: 0;
      padding: 0;

      .title {
        font-size: 10px;
        font-weight: bold;
        color: #999;
        margin-top: 15px;
        margin-bottom: 5px;
      }

      li {
        display: flex;
        align-items: center;
        padding: 5px;
        cursor: pointer;
        &:hover {
          background-color: #ece8ff;
        }

        .icon {
          font-size: 18px;
          color: #7451f8;
        }
        span {
          font-size: 13px;
          font-weight: 600;
          color: #888;
          margin-left: 10px;
        }
      }
    }
  }

  .bottom {
    display: flex;
    align-items: center;
    margin: 10px;

    .colorOption {
      width: 20px;
      height: 20px;
      border-radius: 5px;
      border: 1px solid #7451f8;
      cursor: pointer;
      margin: 5px;

      &:nth-child(1) {
        background-color: whitesmoke;
      }
      &:nth-child(2) {
        background-color: #333;
      }
      &:nth-child(3) {
        background-color: darkblue;
      }
    }
  }
`;

const Sidebar = () => {
  return (
    <Container>
      <div className="sidebar">
        <div className="top">
          <Link to="/" style={{ textDecoration: 'none' }}>
            <span className="logo">USER</span>
          </Link>
        </div>
        <hr />
        <div className="center">
          <ul>
            <p className="title">MAIN</p>
            <li>
              <DashboardIcon className="icon" />
              <span>Dashboard</span>
            </li>
            <p className="title">LISTS</p>
            <Link to="/users" style={{ textDecoration: 'none' }}>
              <li>
                <PersonOutlineIcon className="icon" />
                <span>Users</span>
              </li>
            </Link>
            <Link to="/products" style={{ textDecoration: 'none' }}>
              <li>
                <StoreIcon className="icon" />
                <span>Products</span>
              </li>
            </Link>
            <li>
              <CreditCardIcon className="icon" />
              <span>Delivery</span>
            </li>
            <p className="title">USEFUL</p>
            <li>
              <InsertChartIcon className="icon" />
              <span>Stats</span>
            </li>
            <li>
              <NotificationsNoneIcon className="icon" />
              <span>Notifications</span>
            </li>
            <p className="title">SERVICE</p>
            <li>
              <SettingsSystemDaydreamOutlinedIcon className="icon" />
              <span>System Health</span>
            </li>
            <li>
              <PsychologyOutlinedIcon className="icon" />
              <span>Logs</span>
            </li>
            <li>
              <SettingsApplicationsIcon className="icon" />
              <span>Settings</span>
            </li>
            <p className="title">USER</p>
            <li>
              <AccountCircleOutlinedIcon className="icon" />
              <span>Profile</span>
            </li>
            <li>
              <ExitToAppIcon className="icon" />
              <span>Logout</span>
            </li>
          </ul>
        </div>
        <div className="bottom"></div>
      </div>
    </Container>
  );
};

export default Sidebar;
