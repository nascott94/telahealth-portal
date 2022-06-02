import React from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import VideoCallRoundedIcon from "@mui/icons-material/VideoCallRounded";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
// import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';

const Container = styled.div`
  .navbar {
    height: 70px;
    width: 100%;
    border-bottom: 0.5px solid rgb(231, 228, 228);
    display: flex;
    align-items: center;
    font-size: 14px;
    color: #555;
    background-color: white;

    .wrapper {
      width: 100%;
      padding: 20px;
      display: flex;
      align-items: center;
      justify-content: space-between;

      .search {
        display: flex;
        align-items: center;
        border: 0.5px soild lightgrey;
        border-radius: 10px;
        padding: 3px;

        input {
          border: none;
          outline: none;
          background: transparent;

          &::placeholder {
            font-size: 12px;
          }
        }
      }
      .compose-btn {
        width: 100%;
        height: 40px;
        padding-left: 10px;
        padding-right: 10px;
        margin-left: 30px;
        font-size: 12px;
        background-color: #f7bc01;
        border-radius: 10px;
        border: none;
        cursor: pointer;
        :hover {
          background-color: #eaedf1;
        }
      }

      .compose-icon {
        font-size: 15px;
        padding-right: 5px;
      }

      .items {
        display: flex;
        align-items: center;
        color: #555555;

        .item {
          display: flex;
          align-items: center;
          margin-right: 20px;
          position: relative;
          color: #555555;

          .name {
            padding-right: 2px;
            color: #555555;
          }

          .icon {
            font-size: 20px;
            color: #555555;
          }

          .avatar {
            width: 30px;
            height: 30px;
            border-radius: 50%;
          }

          .counter {
            width: 15px;
            height: 15px;
            background-color: red;
            border-radius: 50%;
            color: white;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 10px;
            font-weight: bold;
            position: absolute;
            top: -5px;
            right: -5px;
          }
        }
        .dropbtn {
          color: transparent;
          padding: 16px;
          border: none;
          cursor: pointer;
        }

        .dropdown {
          position: relative;
          display: inline-block;
        }

        .dropdown-content {
          display: none;
          position: absolute;
          background-color: #f1f1f1;
          font-size: 13px;
          min-width: 80px;
          box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
          z-index: 1;
        }

        .dropdown-content li {
          color: black;
          padding: 12px 16px;
          text-decoration: none;
          display: block;
        }

        .dropdown-content a:hover {
          background-color: white;
        }

        .dropdown:hover .dropdown-content {
          display: block;
        }

        .dropdown:hover .dropbtn {
          background-color: transparent;
        }
      }
    }
  }
`;

const Navbar = () => {
  return (
    <Container>
      <div className="navbar">
        <div className="wrapper">
          <div className="search">
            <input type="text" placeholder="Search" />
            <SearchOutlinedIcon />
            <Link to="/messages" style={{ textDecoration: "none" }}>
              <button className="compose-btn">
                {/* <AddBoxOutlinedIcon className="compose-icon" /> */}+ Compose
                New Message
              </button>
            </Link>
          </div>
          <div className="items">
            <div className="item">
              <Link to="/pdf" style={{ textDecoration: "none" }}>
                <FolderOpenIcon
                  className="icon"
                  style={{
                    width: 25,
                    height: 25,
                    marginTop: 5,
                  }}
                />
              </Link>
            </div>
            <div className="item">
              <Link to="/">
                <VideoCallRoundedIcon
                  className="icon"
                  style={{
                    height: 25,
                    width: 25,
                    paddingRight: 2,
                    paddingTop: 5,
                  }}
                />
              </Link>
              Video Call
            </div>
            <div className="item">
              <Link to="/messages" style={{ textDecoration: "none" }}>
                <NotificationsNoneOutlinedIcon className="icon" />
                <div className="counter">1</div>
              </Link>
            </div>
            <div className="item">
              <Link to="/messages" style={{ textDecoration: "none" }}>
                <ChatBubbleOutlineOutlinedIcon className="icon" />
                <div className="counter">2</div>
              </Link>
            </div>
            <div className="item">
              <div className="name">Olive Scott</div>
              <div className="dropdown">
                <div className="dropbtn">
                  <img
                    src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                    alt="pic"
                    className="avatar"
                  />
                  <div>
                    <div className="dropdown-content">
                      <Link to="/profile" style={{ textDecoration: "none" }}>
                        <li>Profile</li>
                      </Link>
                      <Link to="/settings" style={{ textDecoration: "none" }}>
                        <li>Settings</li>
                      </Link>
                      <Link to="/logout" style={{ textDecoration: "none" }}>
                        <li>Logout</li>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Navbar;
