import {
  DisplayPhotos,
  ContainerPicture,
  PhotoTitle,
  PotoContainer,
  PictureFlex,
  ThePicture,
  TheOtherPicture,
} from "../Style";

const PhotoDisplay = () => {
  return (
    <>
      <DisplayPhotos>
        <ContainerPicture>
          <PhotoTitle></PhotoTitle>
          <PotoContainer>
            <PictureFlex>
              <ThePicture></ThePicture>
              <TheOtherPicture></TheOtherPicture>
            </PictureFlex>
            <PictureFlex
                style={{flexDirection: 'column-reverse'}}
            >
              <ThePicture></ThePicture>
              <TheOtherPicture></TheOtherPicture>
            </PictureFlex>
            <PictureFlex>
              <ThePicture></ThePicture>
              <TheOtherPicture></TheOtherPicture>
            </PictureFlex>
          </PotoContainer>
        </ContainerPicture>
      </DisplayPhotos>
    </>
  );
};

export default PhotoDisplay;
