import styled from 'styled-components'

// Header Styling

export const HeaderStyles = styled.div`
    width: auto;
    height: 5rem;
    border: 1px solid black;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5rem;

    @media (max-width: 728px) {
        gap: 1rem;
        height: 4rem;
    }
`;


export const LinkStyles = styled.div`
    width: 4rem;
    height: 2rem;
    border: 1px solid red;

    @media (max-width: 728px) {
        width: 3rem;
        height: 1.5rem;
    }
`;

export const LogoStyles = styled.div`
    width: 8rem;
    height: 4rem;
    border: 1px solid black;

    @media (max-width: 728px) {
        width: 5rem;
        height: 3rem;
    }
`;

// Landing

export const LandingStyle = styled.div`
    width: auto;
    height: 110vh;
    margin-top: 30px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2%;
`;

export const JoinusStyles = styled.div`
    width: 20%;
    height: 4%;
    border: 1px solid black;

    @media (max-width: 728px) {
        width: 70%;
    }
`;

export const CouplesNameStyles = styled.div`
    width: 40%;
    height: 15%;
    border: 1px solid black;

    @media (max-width: 728px) {
        width: 80%;
    }
`;

export const TimeLocationStyles = styled.div`
    width: 30%;
    height: 5%;
    border: 1px solid black;

    @media (max-width: 728px) {
        width: 70%;
    }
`;

export const CouplesImageStyles = styled.div`
    width: 80%;
    height: 70%;
    border: 1px solid black;
`;


// Story teller section

export const TellMeStory = styled.div`
    width: auto;
    height: 90vh;
    margin-top: 2rem;
    border: 1px solid red;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2%;
`;

export const OurStoryText = styled.div`
    width: 30%;
    height: 10%;
    border: 1px solid black;
    margin-top: -140px;

    @media (max-width: 728px) {
        width: 70%;
    }
`;

export const OurStoryContext = styled.div`
    width: 60%;
    height: 50vh;
    border: 1px solid blue;

    @media (max-width: 728px) {
        width: 80%;
    }
`;

// More information on the wedding

export const MoreInfos = styled.div`
    width: auto;
    height: 150vh;
    border: 1px solid blue;
`;