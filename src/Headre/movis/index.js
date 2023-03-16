import { Navigation, NavLinks, NavLinkStyled, NavH1, NavInput, NavigationBoxStyled } from "./styled"


const HeaderMovies = () => {
  return (
    <NavigationBoxStyled>
      <Navigation>
        <NavH1>MOVIES BROWSER</NavH1>
        <NavLinks>
          <NavLinkStyled>movies</NavLinkStyled>
          <NavLinkStyled>people</NavLinkStyled>
        </NavLinks>
        <NavInput
          type="text"
          placeholder="Search for movies">
        </NavInput>
      </Navigation>
    </NavigationBoxStyled>)



};

export default HeaderMovies;