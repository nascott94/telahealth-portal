import React from "react";
import styled from "styled-components";
import Navbar from "../components/homepage/Navbar";
import Sidebar from "../components/homepage/Sidebar";
import { useState } from "react";
import NotificationSettings from "../components/profilepage/NotificationSettings";
import AccountSettings from "../components/profilepage/AccountSettings";
import MyMedicalInformation from "../components/profilepage/MyMedicalInformation";
import Insurance from "../components/profilepage/Insurance";
import AddressContactInfo from "../components/profilepage/AddressContactInfo";
import PaymentDetails from "../components/profilepage/PaymentDetails";

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
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
  background-color: pink;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 5%;
  overflow: hidden;
`;

const Pic = styled.div`
  height: 12vh;
  width: 7%;
  background-color: black;
  margin-right: 2%;
`;

const BottomContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const RightMainBottomComponentContainer = styled.div`
  height: 90%;
  width: 90%;
  background-color: green;
  display: flex;
  flex-direction: column;
`;

const ComponentTabContainer = styled.div`
  width: 100%;
  height: 7%;
  background-color: grey;
  display: flex;
`;

const Tab = styled.div`
  height: 100%;
  width: 14%;
  background-color: white;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
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
              <Pic></Pic>
              <h1>Nat Scott</h1>
            </RightMainTop>
            <BottomContainer>
              <RightMainBottomComponentContainer>
                <ComponentTabContainer>
                  <Tab onClick={firstButton}>Account Settings</Tab>
                  <Tab onClick={secondButton}>Notification Settings</Tab>
                  <Tab onClick={thirdButton}>My medical Information</Tab>
                  <Tab onClick={fourthButton}>Insurance</Tab>
                  <Tab onClick={fifthButton}>address and Contact Info</Tab>
                  <Tab onClick={sixthButton}>Payment Details</Tab>
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
    </>
  );
}

export default ProfileSettings;
