import styled from "styled-components";
import Photo1 from "../public/picture1.jpg";
import Photo2 from "../public/picture2.jpg";
import Photo3 from "../public/picture3.jpg";
import Photo4 from "../public/picture4.jpg";
import Photo5 from "../public/picture5.jpg";
import Photo6 from "../public/picture6.jpg";
import Photo7 from "../public/picture7.jpg";
import Photo8 from "../public/picture8.jpg";
import Photo9 from "../public/picture9.jpg";
import Photo10 from "../public/picture10.jpg";
import Photo11 from "../public/picture11.jpg";
import Photo12 from "../public/picture12.jpg";
import Photo14 from "../public/picture14.png"

// Layout styles files only

// Header Styling

export const HeaderStyles = styled.div`
  width: auto;
  height: 8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5rem;

  @media (max-width: 728px) {
    gap: 15px;
    height: 5rem;
  }
`;

export const LinkStyles = styled.div`
  width: auto;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: ceenter;

  @media (max-width: 728px) {
    width: auto;
    height: 1.5rem;
  }

  a {
    margin: auto;
    text-decoration: none;
    font-size: 18px;
    font-family: Montaga;
    color: black;

    @media (max-width: 728px) {
      font-size: 14px;
    }
  }
`;

export const LogoStyles = styled.div`
  width: 7rem;
  height: 7rem;
  display: flex;
  align-item: center;
  justify-content: center;

  @media (max-width: 728px) {
    width: 4rem;
    height: 4rem;
  }

  div {
    margin: auto;
    border: 2px solid #f5b252;
    border-radius: 50%;
    width: 90%;
    height: 90%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #f5b252;

    div {
      width: 90%;
      height: 50%;
      border: none;
      border-radius: 0;
      display: flex;
      align-items: center;
      justify-content: center;

      p {
        font-family: Montaga;
        font-size: 2.2rem;

        @media (max-width: 728px) {
          font-size: 1.2rem;
        }
      }
    }
  }
`;

// Landing

export const LandingStyle = styled.div`
  width: auto;
  height: 100vh;
  margin-top: 30px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2%;

  @media (max-width: 728px) {
    margin-bottom: -40vh;
  }
`;

export const JoinusStyles = styled.div`
  width: 40%;
  height: 4%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: montaga;

  @media (max-width: 728px) {
    width: 90%;
    margin-top: -40vh;
  }

  p {
    font-size: 24px;
    line-height: 0;
  }
`;

export const CouplesNameStyles = styled.div`
  width: 70%;
  height: 15%;
  font-family: montaga;
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    color: #f5b252;
  }

  @media (max-width: 728px) {
    height: 10%;
    width: 90%;
  }

  p {
    font-size: 100px;

    @media (max-width: 728px) {
      font-size: 50px;
    }
  }
`;

export const TimeLocationStyles = styled.div`
  width: 40%;
  height: 5%;
  font-family: montaga;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 728px) {
    width: 90%;
    height: 3%;
  }

  p {
    font-size: 20px;
  }
`;

export const CouplesImageStyles = styled.div`
  width: 100%;
  height: 70%;
  display: flex;
  align-items: center;
  justify-content: center;
  // overflow: hidden;

  @media (max-width: 728px) {
    height: 40%;
  }

  img {
    width: 100%;
    background-position-x: 200px;
  }
`;

// Story teller section

export const TellMeStory = styled.div`
  // width: auto;
  // height: 150vh;
  // margin-top: 2rem;
  // display: flex;
  // flex-direction: column;
  // align-items: center;
  // justify-content: center;
  // gap: 2%;
  border: 2px solid red;

  @media (max-width: 820px) {
    // margin-top: -20rem;
  }

  @media (max-width: 728px) {
    // margin-top: 3rem;
    // height: 200vh;
  }
`;

export const BackgroundStory = styled.div`
  width: 100%;
  // height: 120vh;
  background: #a07250;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  padding-top: 10px;

  @media (max-width: 820px) {
    // height: 40vh;
  }

  @media (max-width: 728px) {
    // height: 180vh;
  }
`;

export const OurStoryText = styled.div`
  // width: 50%;
  // height: 10%;
  // display: flex;
  // align-items: center;
  // justify-content: center;
  // font-family: montaga;
  // color: white;
  // margin-top: -12rem;

  // @media (max-width: 820px) {
  //   width: 70%;
  //   margin-top: -4rem;
  // }

  // @media (max-width: 728px) {
  //   margin-top: -7rem;
  // }

  // p {
  //   font-size: 56px;

  //   @media (max-width: 820px) {
  //     font-size: 42px;
  //     margin-top: 60px;
  //   }
  // }
`;

export const OurStoryContext = styled.div`
  width: 95%;
  // height: 50vh;
  // display: flex;
  // align-items: center;
  // justify-content: center;
  font-family: montaga;
  color: white;
  // overflow: hidden;

  @media (max-width: 820px) {
    margin-top: -4rem;
    width: 100%;
    // height: 33vh;
  }

  @media (max-width: 728px) {
    margin-top: -2rem;
    // height: 110vh;
  }

  div {
    width: 95%;
    height: 90%;
    font-size: 20px;
    gap: 10px;
    display: flex;
    flex-direction: column;
    // align-items: center;
    justify-content: center;

    @media (max-width: 820px) {
      height: 22vh;
    }

    @media (max-width: 728px) {
      height: 36vh;
      margin-top: -1rem;
    }

    p {
      font-size: 12px;
      @media (max-width: 820px) {
        font-size: 13px;
        text-align: justify;
      }
    }
  }
`;

export const StoryImage = styled.div`
  // width: 80%;
  // height: 70vh;
  // margin-top: -4rem;
  // overflow: hidden;
  // display: flex;
  // align-items: center;
  // justify-content: center;
  // background-image: url(${Photo1});
  // background-repeat: no-repeat;
  // background-size: cover;
  // background-position-y: -500px;

  // @media (max-width: 820px) {
  //   margin-top: -100px;
  //   background-position-y: -1px;
  //   background-size: covered;
  //   padding-bottom: -20px;
  //   height: 50vh;
  //   width: 90%;
  // }

  // @media (max-width: 728px) {
  //   margin-top: -80px;
  //   height: 70vh;
  //   background-size: contain;
  // }

  // @media (max-width: 728px) {
  // }
`;

// More information on the wedding

export const MoreInfos = styled.div`
  // width: auto;
  // height: 171.3vh;
  // // border: 1px solid blue;
  // margin-top: 40px;
  // display: flex;
  // align-items: center;
  // justify-content: center;

  // @media (max-width: 820px) {
  //   margin-top: -40vh;
  // }

  // @media (max-width: 728px) {
  //   margin-top: -4rem;
  //   height: 150vh;
  // }
`;

export const Infopadding = styled.div`
  width: 85%;
  height: 95%;
  // border: 1px solid blue;
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
  height: 7rem;
  // border: 2px solid yellow;
  // border-style: outset;
  font-family: montaga;

  @media (max-width: 728px) {
    width: 70%;
    height: 8rem;
  }

  div:first-child {
    width: 100%;
    height: 65%;
    // border: 2px solid red;
    display: flex;
    align-items: center;
    justify-content: center;

    p {
      font-size: 60px;
    }
  }

  div:nth-child(2) {
    width: 100%;
    height: 28%;
    // border: 2px solid blue;
    display: flex;
    align-items: center;
    justify-content: center;

    p {
      font-size: 20px;
    }
  }
`;

export const OtherInfo = styled.div`
  width: 98%;
  height: 80%;
  // border: 2px solid green;
  // border-style: dashed;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3%;
`;

export const WeddingContent = styled.div`
  width: 95%;
  height: 30%;
  // border: 2px solid red;
  // border-style: dotted;
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
  // border: 2px solid black;
  // border-style: dotted;
  margin-top: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: montaga;

  @media (max-width: 820px) {
    width: 30%;
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: space-between;
    margin-top: 0;
  }

  @media (max-width: 728px) {
    width: 100%;
  }

  p {
    font-size: 30px;

    @media (max-width: 820px) {
      font-size: 20px;
    }
  }
`;

export const Ptag = styled.p`
  display: none;

  @media (max-width: 820px) {
    display: block;
  }
`;

export const EventInformation = styled.div`
  width: 73%;
  height: 90%;
  // border: 2px solid blue;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;

  @media (max-width: 728px) {
    width: 90%;
    margin-top: 0px;
  }
`;

export const EventTitle = styled.div`
  width: 35%;
  height: 13%;
  border: 2px solid green;
  display: flex;
  align-items: center;
  // justify-content: center;
  font-family: montaga;

  @media (max-width: 820px) {
    display: none;
  }

  @media (max-width: 728px) {
    display: none;
    width: 80%;
  }

  p {
    font-size: 20px;
  }
`;

export const EventDescription = styled.div`
  width: 90%;
  height: 40%;
  // border: 2px solid blue;
  display: flex;
  align-item: center;
  font-family: montaga;
  text-align: justify;

  @media (max-width: 820px) {
    margin-top: -4rem;
    overflow: hidden;
    width: 100%;
    height: 3rem;
  }

  p {
    font-size: 18px;
    align-text: justify;

    @media (max-width: 728px) {
      font-size: 13px;
    }
  }
`;

export const EventLocation = styled.div`
  width: 30%;
  height: 30%;
  // border: 2px solid purple;
  display: flex;
  align-items: center;
  // justify-content: center;
  font-family: montaga;

  @media (max-width: 728px) {
    width: 50%;
  }
`;

export const ButtonClick = styled.button`
  width: 80%;
  height: 80%;
  // margin: auto;
  border-radius: 1px;
  border: none;
  cursor: pointer;
  font-family: montaga;
  background-color: #a07250;
  color: white;
`;

// Phot Layout

export const DisplayPhotos = styled.div`
  width: auto;
  height: 270vh;
  display: flex;
  align-items: center;
  justify-content: center;
  // border: 2px solid black;

  @media (max-width: 820px){
    height: 100vh;
  }

  @media (max-width: 728px) {
    height: 66vh;
    margin-top: 0rem;
    padding-bottom: 9rem;
  }
`;

export const ContainerPicture = styled.div`
  width: 80%;
  height: 95%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1%;

  @media (max-width: 728px) {
    width: 95%;
    height: 99%;
  }

  @media (max-width: 820px) {
    width: 98%;
  }
`;

export const PhotoTitle = styled.div`
  width: 30%;
  height: 10%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 728px) {
    width: 70%;
    height: 3rem;
    margin-top: 0rem;
  }

  p {
    font-size: 56px;
    font-family: montaga;
    color: #2b1105;
  }
`;

export const PotoContainer = styled.div`
  width: 100%;
  height: 85%;
  display: flex;
  align-items: center;
  justify-content: center;
  // flex-wrap: wrap;
  gap: 10px;
  // border: 2px solid red;

  @media (max-width: 820px) {
    // height: 10%;
    border: none;
    flex-direction: column;
    gap: 0px;
    // border: 2px solid red;
    margin-top: 1rem;
    background-image: url(${Photo14});
    background-size: contain;
    background-repeat: no-repeat;
  }

  @media (max-width: 820px) {
  }
`;

export const PictureFlex = styled.div`
  width: 32%;
  height: 95%;
  // border: 1px solid green;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1%;

  @media (max-width: 820px) {
  }

  @media (max-width: 820px) {
    display: none;
    width: 97%;
    height: 40%;
  }

  div:first-child {
    width: 100%;
    height: 63vh;
    // border: 1px solid black;
    background-image: url(${Photo3});
    background-size: cover;
    background-repeat: no-repeat;
  }

  div:nth-child(2) {
    width: 100%;
    height: 63vh;
    // border: 1px solid black;
    background-image: url(${Photo8});
    background-size: cover;
    background-repeat: no-repeat;

    @media (max-width: 728px) {
      background-position-y: -100px;
    }
  }

  div:nth-child(3) {
    width: 100%;
    height: 63vh;
    // border: 1px solid black;
    background-image: url(${Photo6});
    background-size: cover;
    background-repeat: no-repeat;
  }

  div:last-child {
    width: 100%;
    height: 31vh;
    // border: 1px solid black;
    background-image: url(${Photo7});
    background-size: cover;
    background-repeat: no-repeat;
    background-position-y: -79px;

    @media (max-width: 728px) {
      height: 40vh;
    }
  }
`;

export const SecondPictureFlex = styled.div`
  width: 32%;
  height: 95%;
  // border: 1px solid green;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1%;

  @media (max-width: 820px) {
  }

  @media (max-width: 820px) {
    display: none;
    width: 97%;
    height: 40%;
    margin-top: 8px;
  }

  div:first-child {
    width: 100%;
    height: 50vh;
    // border: 1px solid black;
    background-image: url(${Photo12});
    background-size: contain;
    background-repeat: no-repeat;
    // background-position-x: -10px;

    @media (max-width: 728px) {
      background-size: cover;
      background-position-y: -62px;
    }
  }

  div:nth-child(2) {
    width: 100%;
    height: 60vh;
    // border: 1px solid black;
    background-image: url(${Photo9});
    background-size: cover;
    background-repeat: no-repeat;

    @media (max-width: 728px) {
      background-position-y: -61px;
    }
  }

  div:nth-child(3) {
    width: 100%;
    height: 60vh;
    // border: 1px solid black;
    background-image: url(${Photo5});
    background-size: cover;
    background-repeat: no-repeat;
  }

  div:last-child {
    width: 100%;
    height: 50vh;
    // border: 1px solid black;
    background-image: url(${Photo10});
    background-size: cover;
    background-repeat: no-repeat;
  }
`;

export const ThirdPictureFlex = styled.div`
  width: 32%;
  height: 95%;
  // border: 1px solid green;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1%;

  @media (max-width: 820px) {
  }

  @media (max-width: 820px) {
    display: none;
    width: 97%;
    height: 40%;
    margin-top: 8px;
  }

  div:first-child {
    width: 100%;
    height: 63vh;
    // border: 1px solid black;
    background-image: url(${Photo1});
    background-size: cover;
    background-repeat: no-repeat;

    @media (max-width: 728px) {
      background-position-y: -81px;
    }
  }

  div:nth-child(2) {
    width: 100%;
    height: 63vh;
    // border: 1px solid black;
    background-image: url(${Photo11});
    background-size: cover;
    background-repeat: no-repeat;

    @media (max-width: 728px) {
      background-position-y: -71px;
    }
  }

  div:last-child {
    width: 100%;
    height: 95vh;
    // border: 1px solid black;
    background-image: url(${Photo4});
    background-size: cover;
    background-repeat: no-repeat;
    background-position-x: -50px;

    @media (max-width: 728px) {
      background-position-x: 0px;
    }
  }
`;

export const ThePicture = styled.div`
  width: 100%;
  height: 35%;
  border: 1px solid red;
  background-image: url(${Photo1});
  background-size: cover;

  @media (max-width: 820px) {
    width: 92%;
  }

  @media (max-width: 728px) {
    width: 95%;
  }
`;

export const TheOtherPicture = styled.div`
  width: 100%;
  height: 62%;
  // border: 1px solid blue;
  background-image: url(${Photo1});
  background-size: cover;

  @media (max-width: 820px) {
    width: 92%;
    background-position-x: -79px;
    background-repeat: no-repeat;
  }

  @media (max-width: 728px) {
    width: 95%;
    background-position-x: 0px;
  }
`;

// Footer
export const FooterStyle = styled.div`
  width: auto;
  height: 30vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2%;
  background: #a07250;

  @media (max-width: 728px) {
    height: 20vh;
    margin-top: 3rem;
  }
`;

export const ColorCode = styled.div`
  width: 30%;
  height: 20%;
  // border: 1px solid black;
  font-family: montaga;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 728px) {
    width: 90%;
  }
`;

export const RsvP = styled.div`
  width: 30%;
  height: 30%;
  // border: 1px solid black;
  font-family: montaga;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 728px) {
    width: 90%;
  }

  p{
    line-height: 1px;
  }

  p:nth-child(2){
    margin-top: 2px;
    // border: 1px solid black;
  }

  p:last-child{
    margin-top: 2px;
  }
`;

export const PoweredBy = styled.div`
  width: 30%;
  height: 20%;
  // border: 1px solid black;
  font-family: montaga;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 728px) {
    width: 90%;
  }
`;

// For Modal

export const ModalStyle = styled.div`
  position: absolute;
  // border: 2px solid black;
`;

export const ModalBorder = styled.div`
  width: 70rem;
  height: 30rem;
  border-radius: 5px;

  @media (max-width: 820px) {
    width: 40rem;
  }

  @media (max-width: 728px) {
    width: 100%;
    position: absolute;
    top: 0;
  }
`;
