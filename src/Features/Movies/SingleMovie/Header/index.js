const Header = () => {
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
                <VoteAverange> 7,6 / 10</VoteAverange>
                </VoteAverangeWrapper>
              <VoteCount>786 votes</VoteCount>
            </VoteWrapper>
          </TextWrapper>
        </HeadContainer>
      </BlackContainer>
  )
};

export default Header;