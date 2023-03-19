import { NavIconInput,NavBoxLine, Navigation, NavLinks, NavLinkStyled, NavH1, NavInput, NavigationBoxStyled } from "./styled"
import { ReactComponent as Stroke } from "../../image/stroke.svg"

const HeaderMovies = () => {
  return (
    <NavigationBoxStyled>
      <Navigation>
        <NavBoxLine>
          <Stroke />
          <NavH1>MOVIES BROWSER</NavH1>
          <NavLinks>
            <NavLinkStyled>movies</NavLinkStyled>
            <NavLinkStyled>people</NavLinkStyled>
          </NavLinks></NavBoxLine>
        <NavIconInput>
        <NavInput
          type="text"
          placeholder="Search for movies..."></NavInput>
        </NavIconInput>
      </Navigation>
    </NavigationBoxStyled>)
    };

export default HeaderMovies;