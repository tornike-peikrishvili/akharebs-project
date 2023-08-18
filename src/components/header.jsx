import React from "react";
import styled from "styled-components";
import headerLogo from "../assets/logo.png";

function Header({ width }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Container width={width}>
      <Logo src={headerLogo} alt="Logo" onClick={scrollToTop} />
      <HeaderLine></HeaderLine>
    </Container>
  );
}

export default Header;

export const Container = styled.section`
  width: ${(props) => (props.width ? props.width : "")};
  margin: auto;
  position: fixed;
  top: 0;
  background-color: White;
`;

const Logo = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80px;
  margin: auto;
  padding: 7px 0px 7px 0px;
  cursor: pointer;

  @media only screen and (max-width: 768px) {
    height: 60px;
  }
`;

const HeaderLine = styled.div`
  width: 100vw;
  height: 2px;
  background-color: #e8e8e8;
`;
