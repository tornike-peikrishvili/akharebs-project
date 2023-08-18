import React from "react";
import styled from "styled-components";

function Copyright() {
  return (
    <CopyrightContainer>
      <p>&copy; 2023 ახარებს. All rights reserved.</p>
    </CopyrightContainer>
  );
}

export default Copyright;

const CopyrightContainer = styled.footer`
  background-color: #333;
  color: #fff;
  text-align: center;
  padding: 10px 0;
`;
