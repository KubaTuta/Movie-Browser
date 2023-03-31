import { NamePeople, PosterPeople, TileWrapperPeople, WrapperPeople } from "../../../../common/PersonTileStyles/styled";
import noProfilePicture from "../../../../common/PersonTileStyles/noProfilePicture.svg"
import { Role } from "./styled";

const Credits = () => {
  return (
    <WrapperPeople>
      <TileWrapperPeople>
        <PosterPeople src={noProfilePicture}/>
        <NamePeople>Takkde Frdxqedqe</NamePeople>
        <Role>Actress</Role>
      </TileWrapperPeople>
      <TileWrapperPeople>
        <PosterPeople src={noProfilePicture}/>
        <NamePeople>Takkde Frdxqedqe</NamePeople>
        <Role>Actress</Role>
      </TileWrapperPeople>
      <TileWrapperPeople>
        <PosterPeople src={noProfilePicture}/>
        <NamePeople>Takkde Frdxqedqe</NamePeople>
        <Role>Actress</Role>
      </TileWrapperPeople> 
      <TileWrapperPeople>
        <PosterPeople src={noProfilePicture}/>
        <NamePeople>Takkde Frdxqedqe</NamePeople>
        <Role>Actress</Role>
      </TileWrapperPeople> 
      <TileWrapperPeople>
        <PosterPeople src={noProfilePicture}/>
        <NamePeople>Takkde Frdxqedqe</NamePeople>
        <Role>Actress</Role>
      </TileWrapperPeople> 
    </WrapperPeople>
  )
};

export default Credits;