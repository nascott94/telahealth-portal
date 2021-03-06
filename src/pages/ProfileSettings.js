import React from 'react';
import styled from 'styled-components';
import Navbar from '../components/homepage/Navbar';
import Sidebar from '../components/homepage/Sidebar';
import { useState } from 'react';
import NotificationSettings from '../components/profilepage/NotificationSettings';
import AccountSettings from '../components/profilepage/AccountSettings';
import MyMedicalInformation from '../components/profilepage/MyMedicalInformation';
import Insurance from '../components/profilepage/Insurance';
import AddressContactInfo from '../components/profilepage/AddressContactInfo';
import PaymentDetails from '../components/profilepage/PaymentDetails';
import greybackground from '../media/greybackground.jpg';
import Footer from '../components/homepage/Footer';

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  overflow: hidden;
  background-color: #2658e2;
`;

const LeftContainer = styled.div`
  height: 100%;
  width: 15%;
  background-color: blue;
`;

const RightContainer = styled.div`
  height: 100vh;
  width: 85%;
  background-color: #eaedf1;
  display: flex;
  flex-direction: column;
`;

const RightMain = styled.div`
  height: 100vh;
  width: 100%;
  background-color: #eaedf1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const RightMainTop = styled.div`
  height: 20vh;
  width: 100%;
  /* background-image: url(${greybackground}); */
  background-color: #d1d1d1;
  border-bottom: 1px solid #b8b8b8;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 5%;
  overflow: hidden;
  font-size: 28px;

  .avatar {
    height: 100px;
    width: 100px;
    padding-right: 10px;
  }
`;

// const Pic = styled.div`
//   height: 12vh;
//   width: 7%;
//   background-color: black;
//   margin-right: 2%;
// `;

const BottomContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const RightMainBottomComponentContainer = styled.div`
  height: 90%;
  width: 70%;

  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const ComponentTabContainer = styled.div`
  width: 100%;
  height: 7%;
  background-color: #eaedf1;
  display: flex;
`;

const Tab = styled.div`
  height: 100%;
  width: 14%;
  background-color: white;
  border: 1px solid lightgrey;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 13px;
  cursor: pointer;
`;

function ProfileSettings() {
  const [toggle, setToggle] = useState(true);
  const [toggle2, setToggle2] = useState(false);
  const [toggle3, setToggle3] = useState(false);
  const [toggle4, setToggle4] = useState(false);
  const [toggle5, setToggle5] = useState(false);
  const [toggle6, setToggle6] = useState(false);

  const firstButton = () => {
    setToggle(true);
    setToggle2(false);
    setToggle3(false);
    setToggle4(false);
    setToggle5(false);
    setToggle6(false);
  };

  const secondButton = () => {
    setToggle(false);
    setToggle2(true);
    setToggle3(false);
    setToggle4(false);
    setToggle5(false);
    setToggle6(false);
  };

  const thirdButton = () => {
    setToggle(false);
    setToggle2(false);
    setToggle3(true);
    setToggle4(false);
    setToggle5(false);
    setToggle6(false);
  };

  const fourthButton = () => {
    setToggle(false);
    setToggle2(false);
    setToggle3(false);
    setToggle4(true);
    setToggle5(false);
    setToggle6(false);
  };

  const fifthButton = () => {
    setToggle(false);
    setToggle2(false);
    setToggle3(false);
    setToggle4(false);
    setToggle5(true);
    setToggle6(false);
  };

  const sixthButton = () => {
    setToggle(false);
    setToggle2(false);
    setToggle3(false);
    setToggle4(false);
    setToggle5(false);
    setToggle6(true);
  };

  return (
    <>
      <Container>
        <LeftContainer>
          <Sidebar></Sidebar>
        </LeftContainer>
        <RightContainer>
          <Navbar></Navbar>
          <RightMain>
            <RightMainTop>
              <img
                src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt="pic"
                className="avatar"
              />
              <div>Olive Scott</div>
            </RightMainTop>
            <BottomContainer>
              <RightMainBottomComponentContainer>
                <ComponentTabContainer>
                  <Tab onClick={firstButton}>
                    <div>Account Settings</div>
                  </Tab>
                  <Tab onClick={secondButton}>
                    <div>Notification Settings</div>
                  </Tab>
                  <Tab onClick={thirdButton}>
                    <div>My Medical Information</div>
                  </Tab>
                  <Tab onClick={fourthButton}>
                    <div>Insurance</div>
                  </Tab>
                  <Tab onClick={fifthButton}>
                    <div>Address/Contact Info</div>
                  </Tab>
                  <Tab onClick={sixthButton}>
                    <div>Payment Details</div>
                  </Tab>
                </ComponentTabContainer>
                {toggle && <AccountSettings />}
                {toggle2 && <NotificationSettings />}
                {toggle3 && <MyMedicalInformation />}
                {toggle4 && <Insurance />}
                {toggle5 && <AddressContactInfo />}
                {toggle6 && <PaymentDetails />}
              </RightMainBottomComponentContainer>
            </BottomContainer>
          </RightMain>
        </RightContainer>
      </Container>
      <Footer />
    </>
  );
}

export default ProfileSettings;
