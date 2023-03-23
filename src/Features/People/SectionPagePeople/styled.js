import styled from "styled-components";


export const WrapperPeople = styled.section`
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-gap: 24px;

  @media(max-width: ${({ theme }) => theme.breakpoint.full}) {
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 16px;
    
    }
  @media(max-width: ${({ theme }) => theme.breakpoint.medium}) {
    grid-template-columns: repeat(4, 1fr);
    }
  @media(max-width: ${({ theme }) => theme.breakpoint.small}) {
    grid-template-columns: repeat(3,1fr);
    }
  @media(max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    grid-template-columns: repeat(2,1fr);
    }
`;

export const TileWrapperPeople = styled.div`
    max-width:208px;
    max-height: 339px;
    background:${({ theme }) => theme.color.white};
    box-shadow: 0px 4px 12px rgba(186, 199, 213, 0.5);
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    text-align: center;
  @media(max-width: ${({ theme }) => theme.breakpoint.medium}) {
    grid-gap: 16px;
    max-width: 136px;
    max-height: 245px;
    }
`;

export const PosterPeople = styled.img`
    max-width: 177px;
    max-height: 264px;
    margin:10px 16px 8px 16px;
    border-radius: 5px;
  
  @media(max-width: ${({ theme }) => theme.breakpoint.medium}) {
    max-width: 120px;
    max-height: 178px;
    margin: 8px 8px 0;
    }
`;

export const NamePeople = styled.span`
    font-weight: 500;
    font-size: 22px;
    line-height: 130%;
    margin-bottom:8px;
    display: flex;
    align-items:center;
    justify-content:center;
    
  @media(max-width: ${({ theme }) => theme.breakpoint.medium}) {
    max-width: 136px;
    max-height: 245px;
    font-weight: 500;
    font-size: 14px;
    }
`;