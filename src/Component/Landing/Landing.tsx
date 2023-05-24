import * as React from "react";
import Picture from "./picture/picture1.jpg";
import { styled } from "styled-components";
// import {
//   CouplesNameStyles,
//   JoinusStyles,
//   LandingStyle,
//   TimeLocationStyles,
//   CouplesImageStyles,
// } from "../Style";

const Landing = () => {
  return (
    <>
      <LandingStyle>
        <JoinusStyles>
          <p>Join Us to celebrate</p>
          <p>Fiyin <span>&</span> Ayo</p>
          <p>June 24, 2023 - Eleyele, Ibadan</p>
        </JoinusStyles>

        <CouplesNameStyles>
        </CouplesNameStyles>
        <TimeLocationStyles>
        </TimeLocationStyles>
        <CouplesImageStyles>
          <img src={Picture} alt="couples_image" />
        </CouplesImageStyles>
      </LandingStyle>
    </>
  );
};

export default Landing;

const LandingStyle = styled.div`
  gap: 2%;

  @media (max-width: 728px) {
    margin-bottom: -40vh;
  }
`;

const JoinusStyles = styled.div`
  text-align: center;

  p:first-child{
    font-family: montaga;
    font-size: 24px;
    font-weight: 400;
    color: #2a1105;

    @media (max-width: 820px) {}
    
  }

  p:nth-child(2){
    font-family: montaga;
    font-size: 101px;
    font-weight: 400;
    color: #2a1105;
    line-height: 5px;

    span {
      color: #f5b252;
    }
  }

  p:nth-child(3){
    font-family: montaga;
    font-size: 24px;
    font-weight: 400;
    color: #2a1105;

  }

`;

const CouplesNameStyles = styled.div``;

const TimeLocationStyles = styled.div``;

const CouplesImageStyles = styled.div`
  // width: 100%;

  img{
    width: 100%;
  }
`;


