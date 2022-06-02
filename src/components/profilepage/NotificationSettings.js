import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
  height: 270px;
  width: 100%;
  background-color: white;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  padding: 10px;
  overflow: scroll;
  border-bottom: 1px solid #ccc;
  border-top: 1px solid #ccc;
`;

const ContainerTop = styled.div`
  height: 100px;
  width: 98%;
`;

const HeaderContainer = styled.div`
  height: 67px;
  width: 100%;
  margin-top: -10px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #ccc;
  color: #2658e2;
  font-size: 28px;
  margin-top: 2px;
`;

const ContainerMiddle = styled.div`
  height: 50px;
  width: 98%;
  display: flex;
  border-bottom: 1px solid #ccc;
  padding-bottom: 18px;
`;

const MiddleTop = styled.div`
  height: 50%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  font-weight: bold;
`;

const MiddleBottom = styled.div`
  height: 50%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  color: grey;
`;

const ContainerMiddleLeft = styled.div`
  height: 100%;
  width: 31%;

  .padding {
    padding-right: 15px;
  }
`;

const ContainerMiddleMiddle = styled.div`
  height: 100%;
  width: 31%;

  .padding {
    padding-right: 15px;
  }
`;

const ContainerMiddleright = styled.div`
  height: 100%;
  width: 31%;

  .padding {
    padding-right: 15px;
  }
`;

const ContainerBottom = styled.div`
  height: 50px;
  width: 98%;
  border-bottom: 1px solid #ccc;
`;

const NotificationSettings = () => {
  return (
    <>
      <Container>
        <ContainerTop>
          <HeaderContainer>Notification Settings</HeaderContainer>
        </ContainerTop>
        <ContainerMiddle>
          <ContainerMiddleLeft>
            <MiddleTop>Secure Messaging</MiddleTop>
            <MiddleBottom>
              <div className="padding">
                <input type="checkbox" name="sports" value="soccer" /> SMS
              </div>

              <div className="padding">
                <input type="checkbox" name="sports" value="soccer" /> Email
              </div>
            </MiddleBottom>
          </ContainerMiddleLeft>
          <ContainerMiddleMiddle>
            <MiddleTop>
              <div>Video Call</div>
            </MiddleTop>
            <MiddleBottom>
              <div className="padding">
                <input type="checkbox" name="sports" value="soccer" /> SMS
              </div>
              <div className="padding">
                <input type="checkbox" name="sports" value="soccer" /> Email
              </div>
            </MiddleBottom>
          </ContainerMiddleMiddle>
          <ContainerMiddleright>
            <MiddleTop>
              <div>Appointment Reminders</div>
            </MiddleTop>
            <MiddleBottom>
              <div className="padding">
                <input type="checkbox" name="sports" value="soccer" /> SMS
              </div>
              <div className="padding">
                <input type="checkbox" name="sports" value="soccer" /> Email
              </div>
            </MiddleBottom>
          </ContainerMiddleright>
        </ContainerMiddle>
        <ContainerBottom></ContainerBottom>
      </Container>
    </>
  );
};

export default NotificationSettings;
