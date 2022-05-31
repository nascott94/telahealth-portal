import React from "react";
import styled from "@emotion/styled";

const Container = styled.div`
  height: 500px;
  width: 98%;
  background-color: white;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  padding: 10px;
  overflow: scroll;
  border-top: 1px solid black;
`;

const HeaderContainer = styled.div`
  height: 111px;
  width: 98%;
  display: flex;
  align-items: center;
  border-bottom: 1px solid black;
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
  border-bottom: 1px solid black;
  justify-content: center;
  padding-bottom: 20px;
`;

const AddressRight = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid black;
  justify-content: center;
  padding-bottom: 20px;
`;

const InputBox = styled.div`
  height: 30px;
  width: 90%;
  border-bottom: 1px solid black;
`;

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

  .folder {
    height: 30px;
    width: 440px;
  }
`;

const CountryContainerRight = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  flex-direction: column;
  padding-top: 15px:
  padding-bottom: 15px;
  
  .folder {
    height: 30px;
    width: 440px;
  }
`;

const CityZip = styled.div`
  height: 80px;
  width: 98%;
  display: flex;
  border-bottom: 1px solid black;
  padding-top: 15px;
  padding-bottom: 15px;
`;

const CityZipLeft = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  flex-direction: column;

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
  border-bottom: 1px solid black;
  padding-top: 20px;
  padding-bottom: 20px;
`;

const PhoneEmailLeft = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  flex-direction: column;

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
  padding-top: 10px;

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
`;

const BillingCountry2 = styled.div`
  height: 300px;
  width: 100%;
  background-color: pink;
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
`;

const ShippingBottom = styled.div`
  height: 200px;
  width: 100%;
  display: flex;
  border-bottom: 1px solid black;
`;

const ShippingAddressLeft = styled.div`
  height: 200px;
  width: 33.33%;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;

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
  background-color: red;
`;

const UpdateButtonContainer = styled.div`
  height: 50px;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const UpdateButton = styled.div`
  height: 30px;
  width: 80px;
  border: 1px solid black;
  margin-top: 10px;
  margin-bottom: 10px;
  background-color: orange;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const AddressContactInfo = () => {
  return (
    <>
      <Container>
        <HeaderContainer>
          <h1>Address and Contact Information</h1>
        </HeaderContainer>
        <AddressContainer>
          <AddressLeft>
            <label for="addressname">Address 1:</label>
            <input
              className="textInput"
              type="text"
              id="addressname"
              name="addressname"
            />
          </AddressLeft>
          <AddressRight>
            <label for="addressname">Address 2:</label>
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
            <h4>Country Of residence</h4>
            <select name="folder" className="folder">
              <option value="1" selected="selected">
                Please Select
              </option>
            </select>
            <h4>Country</h4>
            <select name="folder" className="folder">
              <option value="1" selected="selected">
                Please Select
              </option>
            </select>
          </CountryContainerLeft>
          <CountryContainerRight>
            <h4>State</h4>
            <select name="folder" className="folder">
              <option value="1" selected="selected">
                Please Select
              </option>
            </select>
          </CountryContainerRight>
        </CountryContainer>
        <CityZip>
          <CityZipLeft>
            <label for="addressname">City:</label>
            <input
              className="textInput"
              type="text"
              id="addressname"
              name="addressname"
            />
          </CityZipLeft>
          <CityZipRight>
            <label for="addressname">Zip Code:</label>
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
            <label for="addressname">Phone:</label>
            <input
              className="textInput"
              type="text"
              id="addressname"
              name="addressname"
            />
          </PhoneEmailLeft>
          <PhoneEmailRight>
            <label for="addressname">Email:</label>
            <input
              className="textInput"
              type="text"
              id="addressname"
              name="addressname"
            />
          </PhoneEmailRight>
        </PhoneEmail>
        <BillingAddressContainer>
          <h1>Billing Address</h1>
        </BillingAddressContainer>
        <BillingAddress>
          <BillingAddressLeft>
            <label for="addressname">Address 1:</label>
            <input
              className="textInput"
              type="text"
              id="addressname"
              name="addressname"
            />
          </BillingAddressLeft>
          <BillingAddressRight>
            <label for="addressname">Address 2:</label>
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
                <h4>Country Of residence</h4>
                <select name="folder" className="folder">
                  <option value="1" selected="selected">
                    Please Select
                  </option>
                </select>
                <h4>Country</h4>
                <select name="folder" className="folder">
                  <option value="1" selected="selected">
                    Please Select
                  </option>
                </select>
              </CountryContainerLeft>
              <CountryContainerRight>
                <h4>State</h4>
                <select name="folder" className="folder">
                  <option value="1" selected="selected">
                    Please Select
                  </option>
                </select>
              </CountryContainerRight>
            </CountryContainer>
            <CityZip>
              <CityZipLeft>
                <label for="addressname">City:</label>
                <input
                  className="textInput"
                  type="text"
                  id="addressname"
                  name="addressname"
                />
              </CityZipLeft>
              <CityZipRight>
                <label for="addressname">Zip Code:</label>
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
              <h1 className="shippingAddress">Shipping Address</h1>
            </BillingAddressContainer>
            <BillingAddress>
              <BillingAddressLeft>
                <label for="addressname">Address 1:</label>
                <input
                  className="textInput"
                  type="text"
                  id="addressname"
                  name="addressname"
                />
              </BillingAddressLeft>
              <BillingAddressRight>
                <label for="addressname">Address 2:</label>
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
              <h1>Delivery Address</h1>
            </BillingAddressContainer>
            <BillingAddress>
              <BillingAddressLeft>
                <label for="addressname">Address 1:</label>
                <input
                  className="textInput"
                  type="text"
                  id="addressname"
                  name="addressname"
                />
              </BillingAddressLeft>
              <BillingAddressRight>
                <label for="addressname">Address 2:</label>
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
