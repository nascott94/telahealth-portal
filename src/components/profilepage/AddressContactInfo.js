import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
  height: 500px;
  width: 98%;
  background-color: white;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  padding: 10px;
  overflow: scroll;
  border-top: 1px solid #ccc;
`;

const HeaderContainer = styled.div`
  height: 67px;
  width: 100%;
  margin-top: -10px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #ccc;
  color: #2658e2;
  font-size: 25px;
  margin-top: 15px;
  padding-bottom: 13px;
`;

const AddressContainer = styled.div`
  height: 100px;
  width: 98%;
  display: flex;
  padding-top: 20px;
  padding-bottom: 20px;

  .textInput {
    height: 25px;
    width: 435px;
    border-right: none;
    border-left: none;
    border-top: none;
    border-bottom: 1px solid black;
  }
`;

const AddressLeft = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #ccc;
  justify-content: center;
  padding-bottom: 20px;
  font-size: 14px;
  font-weight: bold;
  color: grey;
`;

const AddressRight = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #ccc;
  justify-content: center;
  padding-bottom: 20px;
  font-size: 14px;
  font-weight: bold;
  color: grey;
`;

// const InputBox = styled.div`
//   height: 30px;
//   width: 90%;
//   border-bottom: 1px solid black;
// `;

const CountryContainer = styled.div`
  height: 130px;
  width: 98%;
  display: flex;
  margin-top: 10px;
`;

const CountryContainerLeft = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  flex-direction: column;
  padding-top: 8px;

  .title {
    font-size: 14px;
    font-weight: bold;
    color: grey;
  }

  .title-2 {
    font-size: 14px;
    font-weight: bold;
    color: grey;
    padding-top: 5px;
  }

  .folder {
    height: 30px;
    width: 440px;
    background-color: #eaedf1;
    border-top: none;
    border-right: none;
    border-left: none;
    border-bottom: 1px solid #ccc;
  }
`;

const CountryContainerRight = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  flex-direction: column;
  padding-top: 8px;
  padding-bottom: 15px;

  .title {
    font-size: 14px;
    font-weight: bold;
    color: grey;
  }

  .folder {
    height: 30px;
    width: 440px;
    background-color: #eaedf1;
    border-top: none;
    border-right: none;
    border-left: none;
    border-bottom: 1px solid #ccc;
  }
`;

const CityZip = styled.div`
  height: 80px;
  width: 98%;
  display: flex;
  padding-top: 15px;
  padding-bottom: 15px;
`;

const CityZipLeft = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  flex-direction: column;

  .title {
    font-size: 14px;
    font-weight: bold;
    color: grey;
  }

  .textInput {
    height: 25px;
    width: 435px;
    border-right: none;
    border-left: none;
    border-top: none;
    border-bottom: 1px solid black;
  }
`;

const CityZipRight = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  flex-direction: column;

  .title {
    font-size: 14px;
    font-weight: bold;
    color: grey;
  }

  .textInput {
    height: 25px;
    width: 435px;
    border-right: none;
    border-left: none;
    border-top: none;
    border-bottom: 1px solid black;
  }
`;

const PhoneEmail = styled.div`
  height: 80px;
  width: 98%;
  display: flex;
  border-bottom: 1px solid #ccc;
  padding-top: 20px;
  padding-bottom: 20px;
`;

const PhoneEmailLeft = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  flex-direction: column;
  padding-bottom: 10px;

  .title {
    font-size: 14px;
    font-weight: bold;
    color: grey;
  }

  .textInput {
    height: 25px;
    width: 435px;
    border-right: none;
    border-left: none;
    border-top: none;
    border-bottom: 1px solid black;
  }
`;

const PhoneEmailRight = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  flex-direction: column;
  padding-bottom: 10px;

  .title {
    font-size: 14px;
    font-weight: bold;
    color: grey;
  }

  .textInput {
    height: 25px;
    width: 435px;
    border-right: none;
    border-left: none;
    border-top: none;
    border-bottom: 1px solid black;
  }
`;

const BillingAddressContainer = styled.div`
  height: 40px;
  width: 98%;
  display: flex;
  align-items: center;
  padding-top: 25px;
  font-size: 20px;
  color: black;
  font-weight: normal;

  .shippingAddress {
    padding-top: -90px;
  }
`;

const BillingAddress = styled.div`
  height: 100px;
  width: 98%;
  display: flex;

  .textInput {
    height: 25px;
    width: 435px;
    border-right: none;
    border-left: none;
    border-top: none;
    border-bottom: 1px solid black;
    padding-bottom: 20px;
  }

  .addressMargin {
    margin-top: -100px;
  }
`;

const BillingAddressLeft = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid black;
  justify-content: center;
  padding-bottom: 20px;

  .title {
    font-size: 14px;
    font-weight: bold;
    color: grey;
  }

  .textInput {
    height: 10px;
    width: 435px;
    border-right: none;
    border-left: none;
    border-top: none;
    border-bottom: 1px solid black;
  }

  .margin {
    margin-top: -40px;
  }
`;

const BillingAddressRight = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid black;
  justify-content: center;
  padding-bottom: 20px;

  .title {
    font-size: 14px;
    font-weight: bold;
    color: grey;
  }

  .textInput {
    height: 10px;
    width: 435px;
    border-right: none;
    border-left: none;
    border-top: none;
    border-bottom: 1px solid black;
  }
`;

const BillingCountryContainer = styled.div`
  height: 300px;
  width: 98%;
  display: flex;
  border-bottom: 1px solid #ccc;
`;

const BillingCountry2 = styled.div`
  height: 300px;
  width: 100%;
  background-color: white;
`;

const ShippingAddressContainer = styled.div`
  height: 400px;
  width: 98%;
  display: flex;
`;

const ShippingAddress2 = styled.div`
  height: 360px;
  width: 100%;
  background-color: white;
  font-size: 14px;
  font-weight: bold;
  color: grey;

  .title {
    font-size: 14px;
    font-weight: bold;
    color: grey;
  }
`;

const ShippingBottom = styled.div`
  height: 200px;
  width: 100%;
  display: flex;
  border-bottom: 1px solid #ccc;
`;

const ShippingAddressLeft = styled.div`
  height: 200px;
  width: 33.33%;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 14px;
  font-weight: bold;
  color: grey;

  .textInput {
    height: 35px;
    width: 265px;
    border-right: none;
    border-left: none;
    border-top: none;
    border-bottom: 1px solid black;
    margin-bottom: 15px;
  }
`;

const ShippingAddressMiddle = styled.div`
  height: 200px;
  width: 33.33%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: white;
  font-size: 14px;
  font-weight: bold;
  color: grey;

  .textInput {
    height: 35px;
    width: 265px;
    border-right: none;
    border-left: none;
    border-top: none;
    border-bottom: 1px solid black;
    margin-bottom: 15px;
  }
`;

const ShippingAddressRight = styled.div`
  height: 200px;
  width: 33.33%;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 14px;
  font-weight: bold;
  color: grey;

  .textInput {
    height: 35px;
    width: 265px;
    border-right: none;
    border-left: none;
    border-top: none;
    border-bottom: 1px solid black;
    margin-bottom: 87px;
  }
`;

const DeliveryAddressSection = styled.div`
  height: 400px;
  width: 100%;
`;

const DeleiveryAddressContainer = styled.div`
  height: 400px;
  width: 100%;

  .title {
    font-size: 14px;
    font-weight: bold;
    color: grey;
  }
`;

const UpdateButtonContainer = styled.div`
  height: 50px;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const UpdateButton = styled.button`
  height: 40px;
  width: 90px;
  margin-top: 10px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  background-color: #f7bc01;
  border-radius: 10px;
  border: none;
  cursor: pointer;
`;

const AddressContactInfo = () => {
  return (
    <>
      <Container>
        <HeaderContainer>Address and Contact Information</HeaderContainer>
        <AddressContainer>
          <AddressLeft>
            <label for="addressname">Address 1</label>
            <input
              className="textInput"
              type="text"
              id="addressname"
              name="addressname"
            />
          </AddressLeft>
          <AddressRight>
            <label for="addressname">Address 2</label>
            <input
              className="textInput"
              type="text"
              id="addressname"
              name="addressname"
            />
          </AddressRight>
        </AddressContainer>
        <CountryContainer>
          <CountryContainerLeft>
            <div className="title">Country of residence</div>
            <select name="folder" className="folder">
              <option value="1" selected="selected">
                Please Select
              </option>
            </select>
            <div className="title-2">Country</div>
            <select name="folder" className="folder">
              <option value="1" selected="selected">
                Please Select
              </option>
            </select>
          </CountryContainerLeft>
          <CountryContainerRight>
            <div className="title">State</div>
            <select name="folder" className="folder">
              <option value="1" selected="selected">
                Please Select
              </option>
            </select>
          </CountryContainerRight>
        </CountryContainer>
        <CityZip>
          <CityZipLeft>
            <label for="addressname" className="title">
              City
            </label>
            <input
              className="textInput"
              type="text"
              id="addressname"
              name="addressname"
            />
          </CityZipLeft>
          <CityZipRight>
            <label for="addressname" className="title">
              Zip Code
            </label>
            <input
              className="textInput"
              type="text"
              id="addressname"
              name="addressname"
            />
          </CityZipRight>
        </CityZip>
        <PhoneEmail>
          <PhoneEmailLeft>
            <label for="addressname" className="title">
              Phone
            </label>
            <input
              className="textInput"
              type="text"
              id="addressname"
              name="addressname"
            />
          </PhoneEmailLeft>
          <PhoneEmailRight>
            <label for="addressname" className="title">
              Email
            </label>
            <input
              className="textInput"
              type="text"
              id="addressname"
              name="addressname"
            />
          </PhoneEmailRight>
        </PhoneEmail>
        <BillingAddressContainer>
          <div>Billing Address</div>
        </BillingAddressContainer>
        <BillingAddress>
          <BillingAddressLeft>
            <label for="addressname" className="title">
              Address 1
            </label>
            <input
              className="textInput"
              type="text"
              id="addressname"
              name="addressname"
            />
          </BillingAddressLeft>
          <BillingAddressRight>
            <label for="addressname" className="title">
              Address 2
            </label>
            <input
              className="textInput"
              type="text"
              id="addressname"
              name="addressname"
            />
          </BillingAddressRight>
        </BillingAddress>
        <BillingCountryContainer>
          <BillingCountry2>
            <CountryContainer>
              <CountryContainerLeft>
                <div className="title">Country of residence</div>
                <select name="folder" className="folder">
                  <option value="1" selected="selected">
                    Please Select
                  </option>
                </select>
                <div className="title">Country</div>
                <select name="folder" className="folder">
                  <option value="1" selected="selected">
                    Please Select
                  </option>
                </select>
              </CountryContainerLeft>
              <CountryContainerRight>
                <div className="title">State</div>
                <select name="folder" className="folder">
                  <option value="1" selected="selected">
                    Please Select
                  </option>
                </select>
              </CountryContainerRight>
            </CountryContainer>
            <CityZip>
              <CityZipLeft>
                <label for="addressname" className="title">
                  City
                </label>
                <input
                  className="textInput"
                  type="text"
                  id="addressname"
                  name="addressname"
                />
              </CityZipLeft>
              <CityZipRight>
                <label for="addressname" className="title">
                  Zip Code
                </label>
                <input
                  className="textInput"
                  type="text"
                  id="addressname"
                  name="addressname"
                />
              </CityZipRight>
            </CityZip>
          </BillingCountry2>
        </BillingCountryContainer>
        <ShippingAddressContainer>
          <ShippingAddress2>
            <BillingAddressContainer>
              <div className="shippingAddress">Shipping Address</div>
            </BillingAddressContainer>
            <BillingAddress>
              <BillingAddressLeft>
                <label for="addressname" className="title">
                  Address 1
                </label>
                <input
                  className="textInput"
                  type="text"
                  id="addressname"
                  name="addressname"
                />
              </BillingAddressLeft>
              <BillingAddressRight>
                <label for="addressname">Address 2</label>
                <input
                  className="textInput"
                  type="text"
                  id="addressname"
                  name="addressname"
                />
              </BillingAddressRight>
            </BillingAddress>
            <ShippingBottom>
              <ShippingAddressLeft>
                <label for="addressname">City</label>
                <input
                  className="textInput"
                  type="text"
                  id="addressname"
                  name="addressname"
                />
                <label for="addressname">Zip</label>
                <input
                  className="textInput"
                  type="text"
                  id="addressname"
                  name="addressname"
                />
              </ShippingAddressLeft>
              <ShippingAddressMiddle>
                <label for="addressname">State</label>
                <input
                  className="textInput"
                  type="text"
                  id="addressname"
                  name="addressname"
                />
                <label for="addressname">Country</label>
                <input
                  className="textInput"
                  type="text"
                  id="addressname"
                  name="addressname"
                />
              </ShippingAddressMiddle>
              <ShippingAddressRight>
                <label for="addressname">County</label>
                <input
                  className="textInput"
                  type="text"
                  id="addressname"
                  name="addressname"
                />
              </ShippingAddressRight>
            </ShippingBottom>
          </ShippingAddress2>
        </ShippingAddressContainer>
        <DeliveryAddressSection>
          <DeleiveryAddressContainer>
            <BillingAddressContainer>
              <div>Delivery Address</div>
            </BillingAddressContainer>
            <BillingAddress>
              <BillingAddressLeft>
                <label for="addressname" className="title">
                  Address 1
                </label>
                <input
                  className="textInput"
                  type="text"
                  id="addressname"
                  name="addressname"
                />
              </BillingAddressLeft>
              <BillingAddressRight>
                <label for="addressname" className="title">
                  Address 2
                </label>
                <input
                  className="textInput"
                  type="text"
                  id="addressname"
                  name="addressname"
                />
              </BillingAddressRight>
            </BillingAddress>
            <ShippingBottom>
              <ShippingAddressLeft>
                <label for="addressname">City</label>
                <input
                  className="textInput"
                  type="text"
                  id="addressname"
                  name="addressname"
                />
                <label for="addressname">Zip</label>
                <input
                  className="textInput"
                  type="text"
                  id="addressname"
                  name="addressname"
                />
              </ShippingAddressLeft>
              <ShippingAddressMiddle>
                <label for="addressname">State</label>
                <input
                  className="textInput"
                  type="text"
                  id="addressname"
                  name="addressname"
                />
                <label for="addressname">Country</label>
                <input
                  className="textInput"
                  type="text"
                  id="addressname"
                  name="addressname"
                />
              </ShippingAddressMiddle>
              <ShippingAddressRight>
                <label for="addressname">County</label>
                <input
                  className="textInput"
                  type="text"
                  id="addressname"
                  name="addressname"
                />
              </ShippingAddressRight>
            </ShippingBottom>
          </DeleiveryAddressContainer>
        </DeliveryAddressSection>
        <UpdateButtonContainer>
          <UpdateButton>Update</UpdateButton>
        </UpdateButtonContainer>
      </Container>
    </>
  );
};

export default AddressContactInfo;
