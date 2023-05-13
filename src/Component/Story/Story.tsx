import { OurStoryContext, OurStoryText, TellMeStory } from "../Style"

export const StoryTeller = () => {
    return(
        <>
            <TellMeStory>
                <OurStoryText></OurStoryText>
                <OurStoryContext></OurStoryContext>
            </TellMeStory>
        </>
    )
}