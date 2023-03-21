import { NavWrapperInput, NavIconInput, NavBoxLine, Navigation, NavLinks, NavLinkStyled, NavH1, NavInput, NavigationBoxStyled } from "./styled"
import { ReactComponent as Stroke } from "../../image/stroke.svg"
import { ReactComponent as Elipse } from "../../image/elipse.svg"

const HeaderMovies = () => {
  return (
    <NavigationBoxStyled>
      <Navigation>
        <NavBoxLine>
          <Stroke />
          <NavH1>movies browser</NavH1>
          <NavLinks>
            <NavLinkStyled>movies</NavLinkStyled>
            <NavLinkStyled>people</NavLinkStyled>
          </NavLinks>
        </NavBoxLine>
        <NavWrapperInput>
          <NavIconInput>
            <Elipse />
          </NavIconInput>
          <NavInput
            type="text"
            placeholder="Search for movies..." />
        </NavWrapperInput>
      </Navigation>
    </NavigationBoxStyled>
  )
};

export default HeaderMovies;