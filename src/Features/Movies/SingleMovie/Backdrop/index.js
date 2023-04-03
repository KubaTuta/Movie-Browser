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

const Backdrop = ({ title, poster, votes, vote }) => {

  const posterPath = "https://image.tmdb.org/t/p/original/";


  return (
    <>
      {
        poster ? (
          <BlackContainer>
            <HeadContainer>

              {poster ? (
                <Poster src={`${posterPath}${poster}`} alt="" />
              ) : null}

              <TextWrapper>
                <WhiteHeader>{title}</WhiteHeader>
                <VoteWrapper>
                  <VoteAverangeWrapper>
                    <Star alt="" />
                    <VoteAverange>{vote && vote.toFixed(2)}</VoteAverange>
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