import React from "react";
import styled from "styled-components";

import dark from "../../images/image-about-dark.jpg";
import light from "../../images/image-about-light.jpg";

const Container = styled.div`
  width: 100vw;
  height: 35vh;

  display: flex;

  @media (max-width: 975px) {
    flex-direction: column;
  }
`;

const ImgCont = styled.div`
  height: 100%;
  flex: 0 0 30%;
`;

const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

const InfoCont = styled.div`
  height: 100%;
  flex: 1;

  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 5rem 4rem;

  @media (max-width: 560px) {
    padding: 5rem 3rem;
  }
`;

const Title = styled.div`
  font-size: 1.6rem;
  font-weight: bold;

  text-transform: uppercase;
  letter-spacing: 3px;

  margin-bottom: 2rem;
`;

const Text = styled.p`
  font-size: 1.4rem;
  line-height: 1.6;

  color: var(--color-primary-dark-gray);
`;

const About = () => {
  return (
    <Container>
      <ImgCont>
        <Image src={dark} />
      </ImgCont>

      <InfoCont>
        <Title> About our furniture</Title>
        <Text>
          Our multifunctional collection blends design and function to suit your
          individual taste. Make each room unique, or pick a cohesive theme that
          best express your interests and what inspires you. Find the furniture
          pieces you need, from traditional to contemporary styles or anything
          in between. Product specialists are available to help you create your
          dream space.
        </Text>
      </InfoCont>

      <ImgCont>
        <Image src={light} />
      </ImgCont>
    </Container>
  );
};

export default About;
