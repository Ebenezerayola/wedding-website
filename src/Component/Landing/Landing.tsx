import * as React from 'react';
import { CouplesNameStyles, JoinusStyles, LandingStyle, TimeLocationStyles, CouplesImageStyles } from '../Style';

const Landing = () => {
    return(
        <>
            <LandingStyle>
                <JoinusStyles>
                    <p>Join Us</p>
                </JoinusStyles>
                <CouplesNameStyles></CouplesNameStyles>
                <TimeLocationStyles></TimeLocationStyles>
                <CouplesImageStyles></CouplesImageStyles>
            </LandingStyle>
        </>
    )
}

export default Landing