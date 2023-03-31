import {
  BlackContainer,
  WhiteHeader,
  Poster,
  Star,
  VoteAverange,
  Scale,
  VoteCount,
  VoteWrapper,
  HeadContainer,
  TextWrapper,
  VoteAverangeWrapper
}
  from "./styled";
  import BigPoster from "../Backdrop/bigPoster.svg";

const Backdrop = () => {
  return (
    <BlackContainer>
        <HeadContainer>
          <Poster src={BigPoster} />
          <TextWrapper>
            <WhiteHeader>
              Mulan long title
            </WhiteHeader>
            <VoteWrapper>
              <VoteAverangeWrapper>
                <Star alt="" />
                <VoteAverange> 7,6</VoteAverange>
                <Scale>/ 10</Scale>
                </VoteAverangeWrapper>
              <VoteCount>786 votes</VoteCount>
            </VoteWrapper>
          </TextWrapper>
        </HeadContainer>
      </BlackContainer>
  )
};

export default Backdrop;