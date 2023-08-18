import React from "react";
import styled from "styled-components";

function Card({ imageSrc, name, onClick }) {
  return (
    <CardContainer onClick={onClick}>
      <Image src={imageSrc} alt={name} />
      <Name>{name}</Name>
    </CardContainer>
  );
}

const CardContainer = styled.div`
  margin: auto;
  width: 30%;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0px 0px 30px 0px rgba(0, 0, 0, 0.1);
  padding: 16px;
  text-align: center;
  cursor: pointer;
  margin-top: 10px;

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Image = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  margin-bottom: 10px;
`;

const Name = styled.h3`
  margin: 0;
  font-size: 18px;
  color: #333;
`;

export default Card;
