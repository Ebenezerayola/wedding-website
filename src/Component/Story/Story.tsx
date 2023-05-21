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
          <OurStoryText>
            <p>Our Story</p>
          </OurStoryText>
          <OurStoryContext>
            <div>
              <p>
                Feugiat pretium egestas enim blandit purus euismod. Feugiat
                magna aliquam lectus lectus eu amet. Eros, accumsan purus enim
                nascetur quam diam felis, fringilla varius. Quis purus nisl orci
                eu, ultrices.
              </p>
              <p>
                Purus pretium egestas ultricies tempus sit elit. Maecenas
                pellentesque sit eros vitae. Maecenas suspendisse tincidunt
                ullamcorper justo neque quis et, laoreet. Vitae lacus, aliquet
                lorem mauris, sit dolor sodales. Nullam quam quis lorem dui
                tristique massa enim.
              </p>
              <p>Faucibus sed egestas mollis vivamus et sed sed</p>
            </div>
          </OurStoryContext>
        </BackgroundStory>
        <StoryImage></StoryImage>
      </TellMeStory>
    </>
  );
};
