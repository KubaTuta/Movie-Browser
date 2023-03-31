import styled from "styled-components";


export const WrapperPeople = styled.section`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(208px, 1fr));
    grid-gap: 24px;

  @media(max-width: ${({ theme }) => theme.breakpoint.small}) {
    grid-template-columns: repeat(auto-fit, minmax(136px, 1fr));
    grid-gap: 16px;
    }
    @media(max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    grid-template-columns: repeat(auto-fit, minmax(136px, 1fr));
    grid-gap: 16px;
    }
`;

export const TileWrapperPeople = styled.div`
  height: 339px;
  width: 100%;
  background:${({ theme }) => theme.color.white};
  box-shadow: 0px 4px 12px rgba(186, 199, 213, 0.5);
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;

  @media(max-width: ${({ theme }) => theme.breakpoint.small}) {
    grid-gap: 16px;
    height: 245px;
  };

  @media(max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    grid-gap: 16px;
    height: 245px;
  };
`;

export const PosterPeople = styled.img`
  width: 100%;
  height: 264px;
  object-fit: contain;
  margin: 16px;
  border-radius: 5px;
  
  @media(max-width: ${({ theme }) => theme.breakpoint.small}) {
    height: 178px;
    margin: 8px 8px 0;
  };

  @media(max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    height: 178px;
    margin: 8px 8px 0;
  };
`;

export const NamePeople = styled.span`
  font-weight: 500;
  font-size: 22px;
  line-height: 130%;
  margin-bottom:8px;
  display: flex;
  align-items:center;
  justify-content:center;
    
  @media(max-width: ${({ theme }) => theme.breakpoint.small}) {
    max-width: 136px;
    max-height: 245px;
    font-weight: 500;
    font-size: 14px;
  };
  @media(max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    max-width: 136px;
    max-height: 245px;
    font-weight: 500;
    font-size: 14px;
  };
`;