import { useState } from "react";

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
  ButtonClick,
  ModalStyle,
  ModalBorder,
  Ptag,
} from "../Style";

export const MoreInfomation = () => {
  const openNewTab = (url: string) => {
    window.open(url, "_blank");
  };

  const handleClick = () => {
    const url = "https://maps.app.goo.gl/NgGRu2o8EwQzedpU7";
    openNewTab(url);
  };

  const handleClicks = () => {
    const url = "https://maps.app.goo.gl/PEMZ5cxzzwonNNs67";
    openNewTab(url);
  };
  return (
    <>
      <MoreInfos>
        <Infopadding>
          <InfoDate>
            <div>
              <p>Itinerary</p>
            </div>
            <div>
              <p style={{ color: "#A07250" }}>Saturday, June 23</p>
            </div>
          </InfoDate>

          <OtherInfo>
            <WeddingContent>
              <EventTime>
                <Ptag>7AM</Ptag>
                <p>Engagement</p>
              </EventTime>
              <EventInformation>
                <EventTitle>
                  <p>7AM</p>
                </EventTitle>
                <EventDescription>
                  <p>
                    Mayjoy event hall, Afin iyanu junction, ologuneru,
                    Eleyele road. Ibadan.
                  </p>
                </EventDescription>
                <EventLocation>
                  <ButtonClick onClick={handleClick}>Map to Venue</ButtonClick>
                </EventLocation>
              </EventInformation>
            </WeddingContent>
            <WeddingContent>
              <EventTime>
                <Ptag>7AM</Ptag>
                <p>Church Wedding</p>
              </EventTime>
              <EventInformation>
                <EventTitle>
                  <p>7AM</p>
                </EventTitle>
                <EventDescription>
                  <p>Eleyele Baptist Church, Eleyele Ibadan.</p>
                </EventDescription>
                <EventLocation>
                  <ButtonClick onClick={handleClicks}>Map to Venue</ButtonClick>
                </EventLocation>
              </EventInformation>
            </WeddingContent>
            <WeddingContent>
              <EventTime>
                <Ptag>7AM</Ptag>
                <p>Reception</p>
              </EventTime>
              <EventInformation>
                <EventTitle>
                  <p>7AM</p>
                </EventTitle>
                <EventDescription>
                  <p>
                    Mayjoy event hall, Afin iyanu junction, ologuneru,
                    Eleyele road. Ibadan
                  </p>
                </EventDescription>
                <EventLocation>
                  <ButtonClick onClick={handleClicks}>Map to Venue</ButtonClick>
                </EventLocation>
              </EventInformation>
            </WeddingContent>
          </OtherInfo>
        </Infopadding>
      </MoreInfos>
    </>
  );
};
