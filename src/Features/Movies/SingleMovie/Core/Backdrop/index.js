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
  VoteAverangeWrapper
}
  from "./styled";

const Backdrop = ({ title, poster, votes, vote }) => {


  return (
    <>
      {
        poster ? (
          <BlackContainer>
            <HeadContainer backdrop={poster}>
              <TextWrapper>
                <WhiteHeader>{title}</WhiteHeader>
                <VoteWrapper>
                  <VoteAverangeWrapper>
                    <Star alt="" />
                    <VoteAverange>{vote && vote.toFixed(1)}</VoteAverange>
                    <Scale>/ 10</Scale>
                  </VoteAverangeWrapper>
                  <VoteCount>{votes}</VoteCount>
                </VoteWrapper>
              </TextWrapper>
            </HeadContainer>
          </BlackContainer>
        ) : null
      }
    </>
  )
};

export default Backdrop;