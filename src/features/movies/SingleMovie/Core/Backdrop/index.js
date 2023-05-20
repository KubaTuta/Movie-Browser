import { useImageUrl } from "../../../../../common/hooks/useImageUrl";
import {
  BlackContainer,
  WhiteHeader,
  Star,
  VoteAverange,
  Scale,
  VoteCount,
  VoteWrapper,
  HeadContainer,
  TextWrapper,
  VoteAverangeWrapper,
} from "./styled";

const Backdrop = ({ title, poster, votes, vote }) => {
  const { backdropPathUrl } = useImageUrl();
  const backdropPath = `${backdropPathUrl()}${poster}`;

  return (
    <>
      {poster ? (
        <BlackContainer>
          <HeadContainer backdrop={backdropPath}>
            <TextWrapper>
              <WhiteHeader>{title}</WhiteHeader>
              <VoteWrapper>
                <VoteAverangeWrapper>
                  <Star alt="" />
                  <VoteAverange>{vote && vote.toFixed(1)}</VoteAverange>
                  <Scale>/ 10</Scale>
                </VoteAverangeWrapper>
                <VoteCount>{votes} votes</VoteCount>
              </VoteWrapper>
            </TextWrapper>
          </HeadContainer>
        </BlackContainer>
      ) : null}
    </>
  );
};

export default Backdrop;
