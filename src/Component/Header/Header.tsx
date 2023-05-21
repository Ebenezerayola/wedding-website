import * as React from "react";
import { HeaderStyles, LinkStyles, LogoStyles } from "../Style";

const Header = () => {
  return (
    <>
      <HeaderStyles>
        <LinkStyles>
          <a href="www">Home</a>
        </LinkStyles>
        <LinkStyles>
          <a href="www">Our Story</a>
        </LinkStyles>
        <LogoStyles>
          <div>
            <div>
              <p>F & A</p>
            </div>
          </div>
        </LogoStyles>
        <LinkStyles>
          <a href="www">Itinierary</a>
        </LinkStyles>
        <LinkStyles>
          <a href="www">Photos</a>
        </LinkStyles>
      </HeaderStyles>
    </>
  );
};

export default Header;
