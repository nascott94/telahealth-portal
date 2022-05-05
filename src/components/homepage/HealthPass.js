import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  .healthpass {
    flex: 4;
    -webkit-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
    box-shadow: 2px 4px 10px 1px rgba(201, 201, 201, 0.47);
    padding: 10px;
    color: gray;
  }
`;

const HealthPass = () => {
  return (
    <Container>
      <div className="healthpass">
        <div className="title"> Olive Scott</div>
        <div className="avatar">PICTURE</div>
        <div className="credential">Credential ID: 1045 022 1234</div>
        <div></div>
      </div>
    </Container>
  );
};

export default HealthPass;
