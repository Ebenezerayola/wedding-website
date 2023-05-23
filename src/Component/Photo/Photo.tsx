import {
  DisplayPhotos,
  ContainerPicture,
  PhotoTitle,
  PotoContainer,
  PictureFlex,
  ThePicture,
  TheOtherPicture,
  SecondPictureFlex,
  ThirdPictureFlex,
} from "../Style";

const PhotoDisplay = () => {
  return (
    <>
      <DisplayPhotos>
        <ContainerPicture>
          <PhotoTitle>
            <p>#F&A</p>
          </PhotoTitle>
          <PotoContainer>
            <PictureFlex>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </PictureFlex>
            <SecondPictureFlex>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </SecondPictureFlex>
            <ThirdPictureFlex>
              <div></div>
              <div></div>
              <div></div>
            </ThirdPictureFlex>
          </PotoContainer>
        </ContainerPicture>
      </DisplayPhotos>
    </>
  );
};

export default PhotoDisplay;
