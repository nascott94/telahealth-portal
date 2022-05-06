import React from 'react';
import styled from 'styled-components';
import QrCode from '../../media/frame.png';

const Container = styled.div`
  height: 100%;
  width: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 20px;
`;

const HealthPassBox = styled.div`
  height: 100%;
  width: 100%;
  padding-left: 20px;
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
  /* background-color: pink; */
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
  }

  .credentials {
    font-size: 12px;
    padding-top: 2px;
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
  height: 50%;
  width: 100%;
  background-color: white;
`;

const HealthPassMiddleLeft = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 50%;
  padding-top: 20px;
  background-color: white;

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
`;
const HealthPassMiddleRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 50%;
  background-color: red;
`;

const QRImg = styled.img`
  width: 150px;
  height: 40px;
  display: flex;
  align-items: center;
  padding-right: 20px;
`;

const HealthPassBottom = styled.div`
  display: flex;
  height: 25%;
  width: 100%;
`;
const HealthPassBottomLeft = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 50%;
  background-color: white;

  button {
    border: none;
    background-color: transparent;
    font-size: 15px;
  }
`;
const HealthPassBottomRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 50%;

  button {
    border: none;
    font-size: 15px;
    background-color: transparent;
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
            <div className="name">Olive Scott</div>
            <div className="credentials">Credentials ID: 1276 09 2389</div>
            <button>View ID & Passport</button>
          </HealthPassTopRight>
        </HealthPassTop>
        <HealthPassMiddle>
          <HealthPassMiddleLeft>
            <div className="title">COVID-19 Vaccinations</div>
            <div className="info">Not Created(0) Confirmed Verified</div>
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
