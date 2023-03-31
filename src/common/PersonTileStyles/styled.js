import styled from "styled-components";

export const WrapperPeople = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
  grid-gap: 24px;
  justify-items: center;

  
  @media(max-width: ${({ theme }) => theme.breakpoint.small}) {
    grid-template-columns: repeat(auto-fit, minmax(136px, 1fr));
    grid-gap: 16px;
    }

`;

export const TileWrapperPeople = styled.div`
  min-height: 339px;
  width: 100%;
  background:${({ theme }) => theme.color.white};
  box-shadow: 0px 4px 12px rgba(186, 199, 213, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 16px;
  @media(max-width: ${({ theme }) => theme.breakpoint.small}) {
    min-height: 245px;
    width: 136px;
    padding: 8px;
    border-radius: 5px;
  };
`;

export const PeoplePosterWrapper = styled.div`
  min-width: 177px;
  min-height: 256px;
 
    @media(max-width: ${({ theme }) => theme.breakpoint.small}) {
      min-width: 120px;
      min-height: 178px;
    };
`;

export const PosterPeople = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
  border-radius: 5px;

  @media(max-width: ${({ theme }) => theme.breakpoint.small}) {
    height: 178px;
    };
  `;

export const NamePeopleWrapper= styled.div`
  display: flex;
  justify-content: center;
  min-height: 64px;
    @media(max-width: ${({ theme }) => theme.breakpoint.small}) {
      min-height: 42px;
    };
`;

export const NamePeople = styled.p`
  font-weight: 500;
  font-size: 22px;
  line-height: 130%;
  margin: 0px;
  padding-top: 8px;
    @media(max-width: ${({ theme }) => theme.breakpoint.small}) {
      font-size: 14px;
    };   
`;