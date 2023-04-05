import { useDispatch, useSelector } from "react-redux";
import { fetchProfilePending, selectProfile } from "../../../profileSlice";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Wrapper } from "../../../../../Movies/SingleMovie/styled";
import {
  InfoCategory,
  InfoText,
  InfoWrapper,
  Overview,
  OverviewWrapper,
  Poster,
  PosterWrapper,
  TextWrapper,
  TileDetailsWrapper,
  Title
} from "../../../../../../common/DetailsTileStyles/styled";

const SingleProfile = () => {
  const profile = useSelector(selectProfile);






  

  const profilePicturePath = "https://image.tmdb.org/t/p/w300";

  return (
    <>
      <Wrapper>
     
        <TileDetailsWrapper >
         
          <PosterWrapper >
            <Poster src={profile.profile_path && `${profilePicturePath}${profile.profile_path}`} alt="" />
            <TextWrapper>
              <Title> {profile.name}</Title>
              <InfoWrapper>
                <InfoCategory>Date of birth:</InfoCategory>
                <InfoText>{profile.birthday}</InfoText> {/*Uwaga odwrócić kolejnośćw dacie */}
              </InfoWrapper>
              <InfoWrapper>
                <InfoCategory>Place of brith:</InfoCategory>
                <InfoText>{profile.place_of_birth}</InfoText>
              </InfoWrapper>
            </TextWrapper>
            <OverviewWrapper>
              <Overview>
                {profile.biography}
              </Overview>
            </OverviewWrapper>
          </PosterWrapper>

        </TileDetailsWrapper>

        
        
      </Wrapper>

    </>
  )
};
export default SingleProfile;
