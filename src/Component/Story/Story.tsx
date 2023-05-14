import {
  BackgroundStory,
  OurStoryContext,
  OurStoryText,
  StoryImage,
  TellMeStory,
} from "../Style";

export const StoryTeller = () => {
  return (
    <>
      <TellMeStory>
        <BackgroundStory>
          <OurStoryText></OurStoryText>
          <OurStoryContext></OurStoryContext>
        </BackgroundStory>
        <StoryImage></StoryImage>
      </TellMeStory>
    </>
  );
};
