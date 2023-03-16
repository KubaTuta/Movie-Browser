import { Image, Navigation, NavLinks, NavLinkStyled, NavH1, NavInput, NavigationBoxStyled } from "./styled"
import stroke from "../../image/stroke.png";
import { ReactComponent as Elipse } from '../../image/elipse.svg';




const HeaderMovies = () => {
  return (
    <NavigationBoxStyled>
      <Navigation>
        <Image src={stroke} alt="" />
        <NavH1>MOVIES BROWSER</NavH1>
        <NavLinks>
          <NavLinkStyled>movies</NavLinkStyled>
          <NavLinkStyled>people</NavLinkStyled>
        </NavLinks><Elipse />
        <NavInput
          type="text"
          placeholder="Search for movies"></NavInput>
      </Navigation>
    </NavigationBoxStyled>)

};

export default HeaderMovies;