import { Route, Routes, Navigate } from "react-router-dom";
import People from "../../Features/People";
import {
  NavWrapperInput,
  NavIconInput,
  NavBoxLine,
  NavLinks,
  NavH1,
  NavInput,
  NavigationBoxStyled,
  NavigationWrapper,
  NavLi,
  StyledNavLink,
  NavBoxFrame,
  Stroke,
} from "./styled"

import { ReactComponent as Elipse } from "../../image/elipse.svg"
import Movies from "../../Features/Movies/PopularMovies";

const Navigation = () => {
  return (
    <>
      <NavigationBoxStyled>
        <NavBoxFrame>
          <NavigationWrapper>
            <NavBoxLine>
              <Stroke />
              <NavH1>movies browser</NavH1>
              <NavLinks           >
                <NavLi><StyledNavLink to="/movies">movies</StyledNavLink></NavLi>
                <NavLi><StyledNavLink to="/people">people</StyledNavLink></NavLi>
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
          </NavigationWrapper>
        </NavBoxFrame>

      </NavigationBoxStyled>
      <Routes>
        <Route path="/movies" element={<Movies/>} />
        <Route path="/people" element={<People />} />
        <Route path="*" element={<Navigate to="/movies" />} />
      </Routes>
    </>
  )
};

export default Navigation;