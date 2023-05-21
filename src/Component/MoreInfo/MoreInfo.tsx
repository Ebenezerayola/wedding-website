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
} from "../Style";

export const MoreInfomation = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleButtonClick = () => {
    setIsModalOpen(true);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <MoreInfos>
        <ModalStyle>
          {" "}
          {isModalOpen && (
            <div className="modal" style={{ width: "100px", height: "100px" }}>
              <div className="modal-content">
                <h2>Modal Content</h2>
                <ButtonClick onClick={handleCloseModal}>Close</ButtonClick>
              </div>
            </div>
          )}
        </ModalStyle>
        <Infopadding>
          <InfoDate>
            <div>
              <p>Itinerary</p>
            </div>
            <div>
              <p>Saturday, June 23</p>
            </div>
          </InfoDate>

          <OtherInfo>
            <WeddingContent>
              <EventTime>
                <p>7am - 12pm</p>
              </EventTime>
              <EventInformation>
                <EventTitle>
                  <p>Engagement</p>
                </EventTitle>
                <EventDescription>
                  <p>
                    Purus pretium egestas ultricies tempus sit elit. Maecenas
                    pellentesque sit eros vitae. Maecenas suspendisse tincidunt
                    ullamcorper justo neque quis et, laoreet. Vitae lacus,
                    aliquet lorem mauris, sit dolor sodales. Nullam quam quis
                    lorem dui tristique massa enim.
                  </p>
                </EventDescription>
                <EventLocation>
                  <ButtonClick onClick={handleButtonClick}>
                    Map to Venue
                  </ButtonClick>
                </EventLocation>
              </EventInformation>
            </WeddingContent>
            <WeddingContent>
              <EventTime>
                <p>7am - 12pm</p>
              </EventTime>
              <EventInformation>
                <EventTitle>
                  <p>Church Wedding</p>
                </EventTitle>
                <EventDescription>
                  <p>
                    Purus pretium egestas ultricies tempus sit elit. Maecenas
                    pellentesque sit eros vitae. Maecenas suspendisse tincidunt
                    ullamcorper justo neque quis et, laoreet. Vitae lacus,
                    aliquet lorem mauris, sit dolor sodales. Nullam quam quis
                    lorem dui tristique massa enim.
                  </p>
                </EventDescription>
                <EventLocation>
                  <ButtonClick onClick={handleButtonClick}>
                    Map to Venue
                  </ButtonClick>
                </EventLocation>
              </EventInformation>
            </WeddingContent>
            <WeddingContent>
              <EventTime>
                <p>7am - 12pm</p>
              </EventTime>
              <EventInformation>
                <EventTitle>
                  <p>Reception</p>
                </EventTitle>
                <EventDescription>
                  <p>
                    Purus pretium egestas ultricies tempus sit elit. Maecenas
                    pellentesque sit eros vitae. Maecenas suspendisse tincidunt
                    ullamcorper justo neque quis et, laoreet. Vitae lacus,
                    aliquet lorem mauris, sit dolor sodales. Nullam quam quis
                    lorem dui tristique massa enim.
                  </p>
                </EventDescription>
                <EventLocation>
                  <ButtonClick onClick={handleButtonClick}>
                    Map to Venue
                  </ButtonClick>
                </EventLocation>
              </EventInformation>
            </WeddingContent>
          </OtherInfo>
        </Infopadding>
      </MoreInfos>
    </>
  );
};
