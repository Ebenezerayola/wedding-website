import * as React from "react";
import Picture from "./picture/picture1.jpg";
import {
  CouplesNameStyles,
  JoinusStyles,
  LandingStyle,
  TimeLocationStyles,
  CouplesImageStyles,
} from "../Style";

const Landing = () => {
  return (
    <>
      <LandingStyle>
        <JoinusStyles>
          <p>Join Us to celebrate</p>
        </JoinusStyles>

        <CouplesNameStyles>
          <p>Fiyin & Ayo</p>
        </CouplesNameStyles>
        <TimeLocationStyles>
          <p>June 24, 2023 - Eleyele, Ibadan</p>
        </TimeLocationStyles>
        <CouplesImageStyles>
          <img src={Picture} alt="couples_image" />
        </CouplesImageStyles>
      </LandingStyle>
    </>
  );
};

export default Landing;
