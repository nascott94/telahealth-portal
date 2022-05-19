import React from "react";
import styled from "@emotion/styled";

const Container = styled.div`
  height: 100%;
  width: 100%;
  background-color: orange;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  padding: 10px;
  overflow: scroll;
`;

const ContainerTop = styled.div`
  height: 100px;
  width: 98%;
`;

const HeaderContainer = styled.div`
  height: 100px;
  width: 100%;
  display: flex;
  align-items: center;
  border-bottom: 1px solid black;
`;

const ContainerMiddle = styled.div`
  height: 130px;
  width: 98%;

  display: flex;
  border-bottom: 1px solid black;
`;

const MiddleTop = styled.div`
  height: 50%;
  width: 100%;
  display: flex;
  align-items: center;
`;

const MiddleBottom = styled.div`
  height: 50%;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const ContainerMiddleLeft = styled.div`
  height: 100%;
  width: 33.3%;
`;

const ContainerMiddleMiddle = styled.div`
  height: 100%;
  width: 33.3%;
`;

const ContainerMiddleright = styled.div`
  height: 100%;
  width: 33.3%;
`;

const ContainerBottom = styled.div`
  height: 100px;
  width: 98%;

  border-bottom: 1px solid black;
`;

const NotificationSettings = () => {
  return (
    <>
      <Container>
        <ContainerTop>
          <HeaderContainer>
            <h1>Notification Settings</h1>
          </HeaderContainer>
        </ContainerTop>
        <ContainerMiddle>
          <ContainerMiddleLeft>
            <MiddleTop>
              <h5>Secure Messaging</h5>
            </MiddleTop>
            <MiddleBottom>
              Soccer: <input type="checkbox" name="sports" value="soccer" />
              <br />
              Soccer: <input type="checkbox" name="sports" value="soccer" />
              <br />
            </MiddleBottom>
          </ContainerMiddleLeft>
          <ContainerMiddleMiddle>
            <MiddleTop>
              <h5>Video Call</h5>
            </MiddleTop>
            <MiddleBottom>
              Soccer: <input type="checkbox" name="sports" value="soccer" />
              <br />
              Soccer: <input type="checkbox" name="sports" value="soccer" />
              <br />
            </MiddleBottom>
          </ContainerMiddleMiddle>
          <ContainerMiddleright>
            <MiddleTop>
              <h5>Appointment Reminders</h5>
            </MiddleTop>
            <MiddleBottom>
              Soccer: <input type="checkbox" name="sports" value="soccer" />
              <br />
              Soccer: <input type="checkbox" name="sports" value="soccer" />
              <br />
            </MiddleBottom>
          </ContainerMiddleright>
        </ContainerMiddle>
        <ContainerBottom></ContainerBottom>
      </Container>
    </>
  );
};

export default NotificationSettings;
