import { useState } from "react";
import { styled } from "styled-components";

// import {
//   MoreInfos,
//   Infopadding,
//   InfoDate,
//   OtherInfo,
//   WeddingContent,
//   EventTime,
//   EventInformation,
//   EventTitle,
//   EventDescription,
//   EventLocation,
//   ButtonClick,
//   ModalStyle,
//   ModalBorder,
//   Ptag,
// } from "../Style";

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
        <InfoDate>
          <div>
            <p>Itinerary</p>
          </div>
          <div>
            <p style={{ color: "#A07250" }}>Saturday, June 23</p>
          </div>
        </InfoDate>

        <OtherInfo>
          <EventTime>
            <p>Engagement</p>
            <p>-</p>
            <p>7AM</p>
          </EventTime>
          <EventInformation>
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
        </OtherInfo>

        <OtherInfo>
          <EventTime>
            <p>Church</p>
            <p>-</p>
            <p>7AM</p>
          </EventTime>
          <EventInformation>
            <EventDescription>
              <p>Eleyele Baptist Church, Eleyele Ibadan.</p>
            </EventDescription>
            <EventLocation>
              <ButtonClick onClick={handleClicks}>Map to Venue</ButtonClick>
            </EventLocation>
          </EventInformation>
        </OtherInfo>

        <OtherInfo>
          <EventTime>
            <p>Engagement</p>
            <p>-</p>
            <p>7AM</p>
          </EventTime>
          <EventInformation>
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
        </OtherInfo>
      </MoreInfos>
    </>
  );
};

const MoreInfos = styled.div`
  margin-top: 10px;
  // border: 2px solid red;
  font-family: montaga;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const InfoDate = styled.div`
  // border: 1px solid blue;
  text-align: center;
  font-family: montaga;

  div:first-child {
    p {
      font-size: 80px;
      line-height: 0px;
    }
  }

  div:last-child {
    p {
      font-size: 30px;
      line-height: 0px;
    }
  }
`;

const OtherInfo = styled.div`
  // border: 2px solid yellow;
  display: flex;
  align-items: center;
  justify-content: center;
  // justify-content: space-between;
  gap: 10rem;

  @media (max-width: 728px) {
    flex-direction: column;
    gap: 0.5rem;
  }
`;

const EventTime = styled.div`
  // border: 2px solid purple;
  display: flex;
  align-items: center;
  gap: 20px;
  justify-content: space-between;
  font-size: 20px;
  margin-top: -4rem;
  width: 14rem;

  @media (max-width: 728px) {
    margin-top: 1px;
  }
`;

const EventInformation = styled.div`
  // border: 2px solid black;
  width: 35rem;

  @media (max-width: 728px){
    width: 100%;
  }
`;

const EventLocation = styled.div``;

const EventDescription = styled.div`
  p {
    font-size: 20px;
  }
`;

const ButtonClick = styled.button`
  border: none;
  padding: 20px;
  cursor: pointer;
  font-family: montaga;
  background-color: #a07250;
  color: white;
  width: auto;
  font-size: 15px;
`;
