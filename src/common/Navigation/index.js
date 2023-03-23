import { Route, Routes, Navigate } from "react-router-dom";
import Movies from "../../Features/Movies";
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
} from "./styled"
import { ReactComponent as Stroke } from "../../image/stroke.svg"
import { ReactComponent as Elipse } from "../../image/elipse.svg"

const Navigation = () => {
  return (
    <>
      <NavigationBoxStyled>
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
      </NavigationBoxStyled>
      <Routes>
        <Route path="/movies" element={<Movies />} />
        <Route path="/people" element={<People />} />
        <Route path="*" element={<Navigate to="/movies" />} />
      </Routes>
    </>
  )
};

export default Navigation;