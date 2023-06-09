// import {
//   BackgroundStory,
//   OurStoryContext,
//   OurStoryText,
//   StoryImage,
//   TellMeStory,
// } from "../Style";

import { styled } from "styled-components";
import Picture from "../../public/picture16.jpg";

export const StoryTeller = () => {
  return (
    <>
      <TellMeStory>
        <BackgroundStory>
          <p>Our Story</p>
          <div>
            <p>From Crispy Beginnings to Golden Bliss: Our Toasty Love Story.</p>
            <p>
              Love stories come in many forms, and sometimes they can be as
              simple and comforting as a warm slice of toast. Such is the tale
              of ours, whose love story can only be described as a toasty
              journey of warmth and butter.
            </p>
            <p>
              Just like a slice of bread being gently placed in a toaster, our
              paths crossed in a serendipitous moment. From that very first
              encounter, a spark ignited, and their lives intertwined like the
              perfect fusion of flavors.
            </p>
            <p>
              Our love blossomed gradually, just like the golden hue that
              spreads across a slice of toast as it is toasted to perfection.
              Every shared moment was like spreading a layer of butter, adding
              richness and depth to our connection. With each passing day, our
              bond grew stronger, becoming a delightful blend of sweet and
              savory, just like the perfect topping on a slice of warm toast.
            </p>
            <p>
              But like any great love story, our journey was not without its
              challenges. Just as toast can sometimes burn if left unattended,
              we faced our fair share of trials. However, our love proved
              resilient, capable of withstanding the heat and emerging stronger
              than ever, through God's love and grace. We toast to our
              commitment, turning every challenge into an opportunity for
              growth.
            </p>
            <p>
              Today, we stand together, our love like a hearty breakfast,
              nourishing and fulfilling. We have built a foundation rooted in
              God's love, truth, trust, and mutual support, much like the sturdy
              foundation of a slice of toast. Our story reminds us that even the
              simplest things in life, like a humble slice of toast, can become
              a symbol of love and affection when shared with someone special.
            </p>
            <p>God is indeed Love!!!</p>
          </div>
        </BackgroundStory>
        <StoryImage>
          <img src={Picture} alt=""/>
        </StoryImage>
      </TellMeStory>
    </>
  );
};

const TellMeStory = styled.div`
    display: flex ;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const BackgroundStory = styled.div`
  background: #a07250;
  padding-bottom: 250px;
  text-align: center;
  color: white;
  font-family: montaga;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  p:first-child {
    font-size: 56px;
    font-weight: 400;

    @media (max-width: 820px){
      font-size: 40px;
    }
  }

  div {
    font-size: 18px;
    font-weight: 400;
    width: 55%;
    height: 55%;
    text-align: justify;

    @media (max-width: 820px){
      font-size: 15px;
      width: 85%;
      height: auto;
    }

    p:first-child {
      font-size: 20px;

      @media (max-width: 820px){
        font-size: 15px;
      }
    }
  }
`;

const StoryImage = styled.div`
  margin-top: -12rem;
  display: flex;
  align-content: center;
  width: 60%;

  img{
    width: 80%;
    margin-left: auto;
    margin-right: auto;
  }
  @media (max-width: 820px){
    width: 75%;

    }
`;
