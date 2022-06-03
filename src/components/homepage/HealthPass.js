import React from 'react';
import styled from 'styled-components';
import QrCode from '../../media/frame.png';
import CloseIcon from '@mui/icons-material/Close';

const Container = styled.div`
  height: 98%;
  width: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 20px;
  background-color: #eaedf1;
`;

const HealthPassBox = styled.div`
  height: 100%;
  width: 100%;
  background-color: white;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  -webkit-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
  box-shadow: 2px 4px 10px 1px rgba(201, 201, 201, 0.47);
`;

const HealthPassTop = styled.div`
  display: flex;
  height: 25%;
  width: 100%;
  padding-left: 15px;
  padding-top: 10px;
`;

const HealthPassTopLeft = styled.div`
  height: 100%;
  width: 15%;
  display: flex;
  align-items: center;

  img {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    margin-left: 10px;
  }
`;
const HealthPassTopRight = styled.div`
  height: 100%;
  width: 85%;
  padding-top: 5px;

  .name {
    font-size: 20px;
    padding-left: 6px;
  }

  .credentials {
    font-size: 12px;
    padding-top: 2px;
    padding-left: 6px;
  }

  button {
    border: none;
    background-color: transparent;
    font-size: 12px;
    cursor: pointer;
  }
`;

const HealthPassMiddle = styled.div`
  display: flex;
  height: 55%;
  width: 100%;
  background-color: white;
`;

const HealthPassMiddleLeft = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 60%;
  padding-top: 20px;
  padding-left: 15px;

  .title {
    color: grey;
    font-weight: bold;
    padding-top: 10px;
    font-size: 15px;
  }

  .info {
    padding-top: 5px;
    font-size: 15px;
  }

  .icon {
    color: maroon;
    /* padding-top: 20px; */
  }
`;
const HealthPassMiddleRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 40%;
`;

const QRImg = styled.img`
  width: 230px;
  height: 230px;
  display: flex;
  align-items: center;
  padding-right: 20px;
  padding-bottom: 20px;
`;

const HealthPassBottom = styled.div`
  display: flex;
  height: 20%;
  width: 100%;
  border-top: 1px solid rgb(231, 228, 228);
`;
const HealthPassBottomLeft = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 50%;
  background-color: white;
  border-right: 1px solid rgb(231, 228, 228);

  button {
    border: none;
    width: 100%;
    height: 100%;
    background-color: transparent;
    font-size: 15px;
    cursor: pointer;
    :hover {
      background-color: #fafafa;
      transition: 0.1s;
    }
  }
`;
const HealthPassBottomRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 50%;

  button {
    border: none;
    width: 100%;
    height: 100%;
    background-color: transparent;
    font-size: 15px;
    cursor: pointer;
    :hover {
      background-color: #fafafa;
      transition: 0.1s;
    }
  }
`;

const HealthPass = () => {
  return (
    <Container>
      <HealthPassBox>
        <HealthPassTop>
          <HealthPassTopLeft>
            <img
              src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt="pic"
            />
          </HealthPassTopLeft>
          <HealthPassTopRight>
            <div className="name">Natalie Scott</div>
            <div className="credentials">Credentials ID: 1276 09 2389</div>
            <button>View ID & Passport</button>
          </HealthPassTopRight>
        </HealthPassTop>
        <HealthPassMiddle>
          <HealthPassMiddleLeft>
            <div className="title">COVID-19 Vaccinations</div>
            <div className="info">
              Not Created(0)
              <CloseIcon className="icon" />
              Confirmed
              <CloseIcon className="icon" />
              Verified
              <CloseIcon className="icons" />
            </div>
            <div className="title">Days Since Negative COVID Test</div>
          </HealthPassMiddleLeft>
          <HealthPassMiddleRight>
            <QRImg src={QrCode} />
          </HealthPassMiddleRight>
        </HealthPassMiddle>
        <HealthPassBottom>
          <HealthPassBottomLeft>
            <button>View Health Pass</button>
          </HealthPassBottomLeft>
          <HealthPassBottomRight>
            <button>Share</button>
          </HealthPassBottomRight>
        </HealthPassBottom>
      </HealthPassBox>
    </Container>
  );
};

export default HealthPass;
