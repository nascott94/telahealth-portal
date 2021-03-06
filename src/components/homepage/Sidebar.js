import React from 'react';
import styled from 'styled-components';
import './sidebar.scss';
import { Link } from 'react-router-dom';
// import ZappiLogo from '../../media/zappi-logo.png';
import Logo from '../../media/health logo.png';
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

const LogoImg = styled.img`
  width: 165px;
  height: 170px;
  display: flex;
  align-items: center;
  padding-right: 20px;
`;

const Sidebar = () => {
  return (
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
          <Link to="/messages" style={{ textDecoration: 'none' }}>
            <li>
              <MessageIcon className="icon" />
              <span>Messages</span>
            </li>
          </Link>
          <Link to="/appointments" style={{ textDecoration: 'none' }}>
            <li>
              <EventIcon className="icon" />
              <span>Appointments</span>
            </li>
          </Link>
          <Link to="/records" style={{ textDecoration: 'none' }}>
            <li>
              <ArticleIcon className="icon" />
              <span>Records</span>
            </li>
          </Link>
          <Link to="/credentials" style={{ textDecoration: 'none' }}>
            <li>
              <InsertChartIcon className="icon" />
              <span>COVID Credentials</span>
            </li>
          </Link>
          <Link to="/vaccinations" style={{ textDecoration: 'none' }}>
            <li>
              <VaccinesIcon className="icon" />
              <span>Vaccinations</span>
            </li>
          </Link>
          <Link to="/programsmemberships" style={{ textDecoration: 'none' }}>
            <li>
              <SettingsSystemDaydreamOutlinedIcon className="icon" />
              <span>Programs/Membership</span>
            </li>
          </Link>
          <Link to="/productservices" style={{ textDecoration: 'none' }}>
            <li>
              <MedicalServicesIcon className="icon" />
              <span>Products/Services</span>
            </li>
          </Link>
          <Link to="/orders" style={{ textDecoration: 'none' }}>
            <li>
              <DashboardIcon className="icon" />
              <span>Orders</span>
            </li>
          </Link>
          <br />
          <p className="title">User</p>
          <Link to="/profile" style={{ textDecoration: 'none' }}>
            <li>
              <AccountCircleOutlinedIcon className="icon" />
              <span>Profile</span>
            </li>
          </Link>
          <Link to="/login" style={{ textDecoration: 'none' }}>
            <li>
              <ExitToAppIcon className="icon" />
              <span>Logout</span>
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
