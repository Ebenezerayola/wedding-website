import styled from "styled-components";

// Layout styles files only

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
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 728px) {
    width: 70%;
  }

  p {
    font-size: 30px;
    line-height: 0;
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
  height: 150vh;
  margin-top: 2rem;
  border: 2px solid red;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  // gap: 2%;
`;

export const BackgroundStory = styled.div`
  width: 100%;
  height: 90vh;
  border: 2px solid yellow;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`;

export const OurStoryText = styled.div`
  width: 30%;
  height: 10%;
  border: 1px solid black;
  margin-top: -9rem;

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

export const StoryImage = styled.div`
  width: 80%;
  height: 60vh;
  border: 1px solid black;
  margin-top: -5rem;
`;

// More information on the wedding

export const MoreInfos = styled.div`
  width: auto;
  height: 171.3vh;
  border: 1px solid blue;
  margin-top: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Infopadding = styled.div`
  width: 85%;
  height: 95%;
  border: 1px solid blue;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  @media (max-width: 728px) {
    width: 90%;
  }
`;

export const InfoDate = styled.div`
  width: 30%;
  height: 5rem;
  border: 1px solid yellow;
  border-style: outset;

  @media (max-width: 728px) {
    width: 70%;
    height: 4rem;
  }
`;

export const OtherInfo = styled.div`
  width: 98%;
  height: 80%;
  border: 2px solid green;
  border-style: dashed;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2%;
`;

export const WeddingContent = styled.div`
  width: 95%;
  height: 30%;
  border: 2px solid red;
  border-style: dotted;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 2%;

  @media (max-width: 728px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const EventTime = styled.div`
  width: 23%;
  height: 10%;
  border: 2px solid black;
  border-style: dotted;
  margin-top: 10px;

  @media (max-width: 728px) {
    width: 90%;
    margin-top: 0;
  }
`;

export const EventInformation = styled.div`
  width: 73%;
  height: 90%;
  border: 2px solid blue;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1%;

  @media (max-width: 728px) {
    width: 90%;
    margin-top: 0px;
  }
`;

export const EventTitle = styled.div`
  width: 20%;
  height: 13%;
  border: 2px solid green;

  @media (max-width: 728px) {
    width: 50%;
  }
`;

export const EventDescription = styled.div`
  width: 90%;
  height: 55%;
  border: 2px solid blue;
`;

export const EventLocation = styled.div`
  width: 30%;
  height: 20%;
  border: 2px solid purple;

  @media (max-width: 728px) {
    width: 50%;
  }
`;


// Phot Layout

export const DisplayPhotos = styled.div`
  width: auto;
  height: 80vh;
  border: 2px solid red;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 728px){
    height: 210vh;
  }
`;

export const ContainerPicture = styled.div`
  width: 80%;
  height: 90%;
  border: 1px solid yellow;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1%;
  @media (max-width: 728px){
    width: 95%;
    height: 99%;
  }
`;

export const PhotoTitle = styled.div`
  width: 30%;
  height: 10%;
  border: 1px solid red;

  @media (max-width: 728px){
    width: 70%;
    height: 3rem;
  }
`;

export const PotoContainer = styled.div`
  width: 100%;
  height: 85%;
  border: 2px solid blue;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1%;

  @media (max-width: 728px){
    height: 95%;
  }
`;

export const PictureFlex = styled.div`
  width: 32%;
  height: 95%;
  border: 1px solid green;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1%;

  @media (max-width: 728px) {
    width: 97%;
    height: 32%;
  }
`;

export const ThePicture = styled.div`
  width: 80%;
  height: 35%;
  border: 1px solid red;
`;

export const TheOtherPicture = styled.div`
  width: 80%;
  height: 62%;
  border: 1px solid blue;
`;


// Footer
export const FooterStyle = styled.div`
  width: auto;
  height: 30vh;
  border: 2px solid green;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2%;

  @media (max-width: 728px){
    height: 20vh;
  }
`;


export const ColorCode = styled.div`
  width: 30%;
  height: 20%;
  border: 1px solid black;

  @media (max-width: 728px){
    width: 90%;
  }
`;

export const RsvP = styled.div`
  width: 30%;
  height: 30%;
  border: 1px solid black;

  @media (max-width: 728px){
    width: 90%;
  }
`;

export const PoweredBy = styled.div`
  width: 30%;
  height: 20%;
  border: 1px solid black;

  @media (max-width: 728px){
    width: 90%;
  }
`;