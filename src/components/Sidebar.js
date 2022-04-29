import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Logo from '../media/logo.png';
import DashboardIcon from '@mui/icons-material/Dashboard';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import SettingsSystemDaydreamOutlinedIcon from '@mui/icons-material/SettingsSystemDaydreamOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import MessageIcon from '@mui/icons-material/Message';
import ArticleIcon from '@mui/icons-material/Article';
import EventIcon from '@mui/icons-material/Event';
import VaccinesIcon from '@mui/icons-material/Vaccines';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';

const Container = styled.div`
  .sidebar {
    flex: 1;
    border-right: 0.5px soild rgb(230, 227, 227);
    min-height: 100vh;
    background-color: white;
    .top {
      height: 70px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  hr {
    height: 0;
    border: 0.5px solid rgb(231, 228, 228);
  }

  .center {
    padding-left: 15px;

    ul {
      list-style: none;
      margin: 0;
      padding: 0;

      .title {
        font-size: 13px;
        font-weight: bold;
        color: #999;
        margin-top: 15px;
        margin-bottom: 5px;
      }

      li {
        display: flex;
        align-items: center;
        padding: 9px;
        cursor: pointer;
        &:hover {
          background-color: #d3d3d3;
        }

        .icon {
          font-size: 18px;
          color: #6fd0fa;
        }
        span {
          font-size: 13.5px;
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

const LogoImg = styled.img`
  width: 150px;
  height: 40px;
  display: flex;
  align-items: center;
  padding-right: 20px;
`;

const Sidebar = () => {
  return (
    <Container>
      <div className="sidebar">
        <div className="top">
          <Link to="/" style={{ textDecoration: 'none' }}>
            <LogoImg src={Logo} />
          </Link>
        </div>
        <hr />
        <div className="center">
          <ul>
            <p className="title">Dashboard</p>

            <li>
              <MessageIcon className="icon" />
              <span>Messages</span>
            </li>

            <Link to="/" style={{ textDecoration: 'none' }}>
              <li>
                <EventIcon className="icon" />
                <span>Appointments</span>
              </li>
            </Link>
            <Link to="/" style={{ textDecoration: 'none' }}>
              <li>
                <ArticleIcon className="icon" />
                <span>Records</span>
              </li>
            </Link>

            <li>
              <InsertChartIcon className="icon" />
              <span>COVID Credentials</span>
            </li>
            <li>
              <VaccinesIcon className="icon" />
              <span>Vaccinations</span>
            </li>

            <li>
              <SettingsSystemDaydreamOutlinedIcon className="icon" />
              <span>Programs/Membership</span>
            </li>
            <li>
              <MedicalServicesIcon className="icon" />
              <span>Products/Services</span>
            </li>
            <li>
              <DashboardIcon className="icon" />
              <span>Orders</span>
            </li>
            <br />
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
