import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import Header from "../Header/Header";
import { sliderData } from "../data";
import SlideComponent from "../SlideComponent/SlideComponent";
import { IoChevronForward, IoChevronBack } from "react-icons/io5";
import "./icons.scss";

const Container = styled.div`
  height: 65vh;
  width: 100%;

  position: relative;
  display: flex;

  overflow: hidden;

  @media (max-width: 1155px) {
    height: 100vh;
  }
`;

const Wrapper = styled.div`
  display: flex;
  height: 100%;

  transition: all 0.5s ease-in;

  transform: translateX(${(props) => props.sliderIndex * -100}vw);
`;

const SliderButton = styled.button`
  border: none;
  background-color: black;

  min-width: 10rem;
  min-height: 10rem;

  cursor: pointer;

  transition: all 0.2s ease-in;

  &:hover {
    background-color: var(--color-primary-very-dark-gray);
  }

  @media (max-width: 560px) {
    min-width: 7rem;
    min-height: 7rem;
  }
`;

const ButtonContainer = styled.div`
  display: flex;

  position: fixed;
  bottom: 35vh;
  left: 60%;

  @media (max-width: 1155px) {
    position: absolute;
    left: auto;
    right: 0;
    bottom: 40vh;
  }
`;

const Slider = () => {
  const [sliderIndex, setSliderIndex] = useState(0);

  const handleClick = (direction) => {
    if (direction === "right") {
      sliderIndex > 1 ? setSliderIndex(0) : setSliderIndex(sliderIndex + 1);
    }
    if (direction === "left") {
      sliderIndex === 0 ? setSliderIndex(2) : setSliderIndex(sliderIndex - 1);
    }
  };

  const keyPress = useCallback(
    (e) => {
      if (e.key === "ArrowRight") {
        sliderIndex > 1 ? setSliderIndex(0) : setSliderIndex(sliderIndex + 1);
      }
      if (e.key === "ArrowLeft") {
        sliderIndex === 0 ? setSliderIndex(2) : setSliderIndex(sliderIndex - 1);
      }
    },
    [setSliderIndex, sliderIndex]
  );

  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    return () => document.removeEventListener("keydown", keyPress);
  }, [keyPress]);

  return (
    <Container>
      <Header></Header>
      <Wrapper sliderIndex={sliderIndex}>
        {sliderData.map(({ id, ...otherProps }) => {
          return <SlideComponent key={id} {...otherProps} />;
        })}
      </Wrapper>

      <ButtonContainer>
        <SliderButton
          direction="left"
          onClick={() => {
            handleClick("left");
          }}
        >
          <IoChevronBack className="icons" />
        </SliderButton>
        <SliderButton
          direction="right"
          onClick={() => {
            handleClick("right");
          }}
        >
          <IoChevronForward className="icons" />
        </SliderButton>
      </ButtonContainer>
    </Container>
  );
};

export default Slider;
