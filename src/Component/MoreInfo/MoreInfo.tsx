import {
  MoreInfos,
  Infopadding,
  InfoDate,
  OtherInfo,
  WeddingContent,
  EventTime,
  EventInformation,
  EventTitle,
  EventDescription,
  EventLocation,
} from "../Style";

export const MoreInfomation = () => {
  return (
    <>
      <MoreInfos>
        <Infopadding>
          <InfoDate></InfoDate>
          <OtherInfo>
            <WeddingContent>
              <EventTime></EventTime>
              <EventInformation>
                <EventTitle></EventTitle>
                <EventDescription></EventDescription>
                <EventLocation></EventLocation>
              </EventInformation>
            </WeddingContent>
            <WeddingContent>
              <EventTime></EventTime>
              <EventInformation>
                <EventTitle></EventTitle>
                <EventDescription></EventDescription>
                <EventLocation></EventLocation>
              </EventInformation>
            </WeddingContent>
            <WeddingContent>
              <EventTime></EventTime>
              <EventInformation>
                <EventTitle></EventTitle>
                <EventDescription></EventDescription>
                <EventLocation></EventLocation>
              </EventInformation>
            </WeddingContent>
          </OtherInfo>
        </Infopadding>
      </MoreInfos>
    </>
  );
};
