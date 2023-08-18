import React, { useState } from "react";
import styled from "styled-components";
import Card from "./card";

import vaseOne from "../assets/vase1.webp";
import vaseTwo from "../assets/vase2.avif";
import vaseThree from "../assets/vase3.avif";
import vaseFour from "../assets/vase4.jpg";
import vaseFive from "../assets/vase5.webp";
import vaseSix from "../assets/vase4.jpg";
import vaseSeven from "../assets/vase6.webp";

const initialData = [
  { id: 1, name: "ვაზა 1", imageSrc: vaseOne },
  { id: 2, name: "ვაზა 2", imageSrc: vaseTwo },
  { id: 3, name: "ვაზა 3", imageSrc: vaseThree },
  { id: 4, name: "ვაზა 4", imageSrc: vaseFour },
  { id: 5, name: "ვაზა 5", imageSrc: vaseFive },
  { id: 6, name: "ვაზა 6", imageSrc: vaseSix },
  { id: 7, name: "ვაზა 7", imageSrc: vaseSeven },
  { id: 8, name: "ვაზა 8", imageSrc: vaseFive },
  { id: 9, name: "ვაზა 9", imageSrc: vaseSeven },
  { id: 10, name: "ვაზა 10", imageSrc: vaseFive },
  { id: 11, name: "ვაზა 11", imageSrc: vaseThree },
  { id: 12, name: "ვაზა 12", imageSrc: vaseSeven },
  { id: 13, name: "ვაზა 13", imageSrc: vaseFive },
  { id: 14, name: "ვაზა 14", imageSrc: vaseThree },
  { id: 15, name: "ვაზა 15", imageSrc: vaseFive },
];

function Works() {
  const [data, setData] = useState(initialData);
  const [visibleCards, setVisibleCards] = useState(6);
  const [enlargedImage, setEnlargedImage] = useState(null);

  const loadMore = () => {
    setVisibleCards((prevVisibleCards) => prevVisibleCards + 6);
  };

  const showLess = () => {
    setVisibleCards((prevVisibleCards) => prevVisibleCards - 6);
  };

  const openModal = (imageSrc) => {
    setEnlargedImage(imageSrc);
  };

  const closeModal = () => {
    setEnlargedImage(null);
  };

  return (
    <WorksContainer>
      <Wrapper>
        {data.slice(0, visibleCards).map((item) => (
          <Card
            key={item.id}
            imageSrc={item.imageSrc}
            name={item.name}
            onClick={() => openModal(item.imageSrc)}
          />
        ))}
      </Wrapper>
      <ButtonWrapper>
        {visibleCards < data.length ? (
          <LoadMoreButton onClick={loadMore}>ნახეთ მეტი</LoadMoreButton>
        ) : null}
        {visibleCards > 6 ? (
          <ShowLessButton onClick={showLess}>ნახეთ ნაკლები</ShowLessButton>
        ) : null}
      </ButtonWrapper>
      {enlargedImage && (
        <Modal onClick={closeModal}>
          <CloseButton onClick={closeModal}>დახურვა</CloseButton>
          <EnlargedImage src={enlargedImage} alt="Enlarged" />
        </Modal>
      )}
    </WorksContainer>
  );
}

export default Works;

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const EnlargedImage = styled.img`
  max-width: 90%;
  max-height: 90%;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 16px;
  background-color: transparent;
  color: white;
  border: none;
  cursor: pointer;
`;

const LoadMoreButton = styled.button`
  width: 160px;
  font-size: 18px;
  background-color: transparent;
  color: black;
  border: 2px solid black;
  border-radius: 10px;
  padding: 8px 16px;
  cursor: pointer;

  &:hover {
    color: white;
    border: 2px solid gray;
    background-color: gray;
    transition: 0.3s;
  }

  @media only screen and (max-width: 768px) {
    width: 140px;
    font-size: 15px;
  }
`;

const ShowLessButton = styled(LoadMoreButton)``;

const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px 0 16px 0;
  gap: 10px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 10px;

  @media only screen and (max-width: 768px) {
    justify-content: center;
    flex-wrap: nowrap;
    flex-direction: column;
  }
`;

const WorksContainer = styled.div`
  margin: auto;
  width: 80%;
  margin-top: 100px;

  @media only screen and (max-width: 768px) {
    margin-top: 65px;
  }
`;
