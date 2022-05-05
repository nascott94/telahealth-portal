import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 100%;
  width: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HealthPassBox = styled.div`
  height: 100%;
  width: 100%;
  background-color: white;
  display: flex;
  flex-direction: column;
`;

const HealthPassTop = styled.div`
  display: flex;
  height: 25%;
  width: 100%;
  background-color: pink;
`;

const HealthPassTopLeft = styled.div`
  height: 100%;
  width: 10%;
  background-color: black;
`;
const HealthPassTopRight = styled.div`
  height: 100%;
  width: 90%;
  background-color: red;
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
  background-color: white;
`;
const HealthPassMiddleRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 50%;
  background-color: red;
`;

const HealthPassBottom = styled.div`
  display: flex;
  height: 25%;
  width: 100%;
  background-color: pink;
`;
const HealthPassBottomLeft = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 50%;
  background-color: white;
`;
const HealthPassBottomRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 50%;
  background-color: red;
`;

const HealthPass = () => {
  return (
    <Container>
      <HealthPassBox>
        <HealthPassTop>
          <HealthPassTopLeft></HealthPassTopLeft>
          <HealthPassTopRight></HealthPassTopRight>
        </HealthPassTop>
        <HealthPassMiddle>
          <HealthPassMiddleLeft>
            <h3>drg</h3>
            <h3>drg</h3>
            <h3>drg</h3>
          </HealthPassMiddleLeft>
          <HealthPassMiddleRight>
            <h3>drg</h3>
          </HealthPassMiddleRight>
        </HealthPassMiddle>
        <HealthPassBottom>
          <HealthPassBottomLeft>
            <h3>drg</h3>
          </HealthPassBottomLeft>
          <HealthPassBottomRight>
            <h3>drg</h3>
          </HealthPassBottomRight>
        </HealthPassBottom>
      </HealthPassBox>
    </Container>
  );
};

export default HealthPass;
