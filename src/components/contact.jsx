import React from "react";
import styled from "styled-components";
import { FaPhone, FaEnvelope, FaWhatsapp } from "react-icons/fa";

function Contact() {
  return (
    <ContactContainer id="contact">
      <ContactHeader>საკონტაქტო ინფორმაცია</ContactHeader>
      <ContactInfo>
        <ContactItem>
          <ContactIcon>
            <FaPhone />
          </ContactIcon>
          <ContactText>+(995) 599-371-221</ContactText>
        </ContactItem>
        <ContactItem>
          <ContactIcon>
            <FaWhatsapp />
          </ContactIcon>
          <ContactText>+(995) 599-371-221 (WhatsApp)</ContactText>
        </ContactItem>
        <ContactItem>
          <ContactIcon>
            <FaEnvelope />
          </ContactIcon>
          <ContactText>Alechaxi@gmail.com</ContactText>
        </ContactItem>
      </ContactInfo>
    </ContactContainer>
  );
}

export default Contact;

const ContactContainer = styled.section`
  background-color: #f9f9f9;
  padding: 50px 0 50px 0;
  text-align: center;

  @media only screen and (max-width: 768px) {
    padding: 30px 0 30px 0;
  }
`;

const ContactHeader = styled.h2`
  font-size: 24px;
  margin-bottom: 30px;
`;

const ContactInfo = styled.div`
  margin: auto;
  width: 50%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media only screen and (max-width: 768px) {
    display: block;
  }
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    margin-top: 10px;
  }
`;

const ContactIcon = styled.div`
  font-size: 30px;
  color: #333;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContactText = styled.p`
  font-size: 18px;
  color: #555;
  margin-left: 5px;

  @media only screen and (max-width: 768px) {
    font-size: 15px;
  }
`;
