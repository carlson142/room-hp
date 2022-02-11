import React from "react";
import styled from "styled-components";
import { IoArrowForward } from "react-icons/io5";

const Container = styled.div`
  width: 100vw;
  height: 100%;

  display: flex;

  @media (max-width: 1155px) {
    flex-direction: column;
  }
`;

const ImageCont = styled.div`
  height: 100%;
  flex: 0 0 60%;

  @media (max-width: 1155px) {
    height: 60vh;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;

  object-fit: cover;
  object-position: center;

  @media (max-width: 460px) {
    display: none;
  }
`;

const MobileImage = styled.img`
  display: none;

  @media (max-width: 460px) {
    display: block;
    width: 100%;
    height: 100%;

    object-fit: contain;
    object-fit: cover;
    object-position: center;
  }
`;

const InfoCont = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 7rem;

  & > *:not(:last-child) {
    margin-bottom: 3rem;
  }

  @media (max-width: 1155px) {
    height: 35vh;
  }

  @media (max-width: 560px) {
    padding: 7rem 3rem;
  }
`;

const Title = styled.h1`
  font-size: 4rem;
  font-weight: bold;

  @media (max-width: 1435px) {
    font-size: 3rem;
  }

  @media (max-width: 560px) {
    font-size: 2.2rem;
  }
`;

const Text = styled.div`
  font-size: 1.4rem;
  line-height: 1.6;
  color: var(--color-primary-dark-gray);
`;

const CustomButton = styled.button`
  align-self: flex-start;

  border: none;
  background-color: transparent;

  color: var(--color-primary-very-dark-gray);
  font-size: 1.6rem;
  font-weight: 600;

  text-transform: uppercase;
  letter-spacing: 8px;

  display: flex;
  align-items: center;
  cursor: pointer;
  transition: all 0.2s ease-in;

  &:hover {
    color: var(--color-primary-dark-gray);
  }
`;

const SlideComponent = ({ title, text, img, imgMob }) => {
  return (
    <Container>
      <ImageCont>
        <Image src={img} />
        <MobileImage src={imgMob} />
      </ImageCont>

      <InfoCont>
        <Title>{title}</Title>
        <Text>{text}</Text>
        <CustomButton>
          shop now <IoArrowForward style={{ marginLeft: "1rem" }} />
        </CustomButton>
      </InfoCont>
    </Container>
  );
};

export default SlideComponent;
