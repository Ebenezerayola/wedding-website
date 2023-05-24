import { styled } from "styled-components";

export const MoreInfomation = () => {
  const openNewTab = (url: string) => {
    window.open(url, "_blank");
  };

  const EventInfo = [
    {
      Title: "Engagement",
      Time: "7AM",
      Desc: "Mayjoy event hall, Afin iyanu junction, ologuneru, Eleyele road. Ibadan.",
      Link: 'https://maps.app.goo.gl/NgGRu2o8EwQzedpU7'
    },
    {
      Title: "Church",
      Time: "9AM",
      Desc: "Eleyele Baptist Church, Eleyele Ibadan.",
      Link: "https://maps.app.goo.gl/PEMZ5cxzzwonNNs67"
    },
    {
      Title: "Reception",
      Time: "12Noon",
      Desc: "Mayjoy event hall, Afin iyanu junction, ologuneru, Eleyele road. Ibadan.",
      Link: 'https://maps.app.goo.gl/NgGRu2o8EwQzedpU7'
    },
  ]
  return (
    <>
      <MoreInfos>
        <InfoDate>
          <div>
            <p>Itinerary</p>
          </div>
          <div>
            <p style={{ color: "#A07250" }}>Saturday, June 24</p>
          </div>
        </InfoDate>
      {
        EventInfo.map((event) =>{
          return (
            <OtherInfo>
              <EventTime>
                <p>{event.Title}</p>
                <p>-</p>
                <p>{event.Time}</p>
              </EventTime>
              <EventInformation>
                <EventDescription>
                  <p>
                    {event.Desc}
                  </p>
                </EventDescription>
                <EventLocation>
                  <ButtonClick onClick={() => openNewTab(event.Link)}>Map to Venue</ButtonClick>
                </EventLocation>
              </EventInformation>
            </OtherInfo>
          )
        })
      }

      </MoreInfos>
    </>
  );
};

const MoreInfos = styled.div`
  margin-top: 10px;
  font-family: montaga;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const InfoDate = styled.div`
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
  
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  padding-left: 30px;
  gap: 8rem;

  @media (max-width: 728px) {
    flex-direction: column;
    gap: 0.5rem;
    border: 2px solid red;
    padding: 0px 10px;
  }
`;

const EventTime = styled.div`
 
  display: flex;
  align-items: center;
  gap: 20px;
  justify-content: space-between;
  font-size: 20px;
  margin-top: -4rem;

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
  padding: 18px 26px;
  cursor: pointer;
  font-family: montaga;
  background-color: #a07250;
  color: white;
  width: auto;
  font-size: 15px;
`;
