import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import {
  NavWrapperInput,
  NavIconInput,
  NavBoxLine,
  NavLinks,
  NavH1,
  NavigationBoxStyled,
  NavigationWrapper,
  NavLi,
  StyledNavLink,
  NavBoxFrame,
  Stroke,
} from "./styled";

import { ReactComponent as Elipse } from "../../common/img/elipse.svg";
import Movies from "../../features/movies/PopularMovies";
import People from "../../features/people/PopularPeople";
import SingleMovie from "../../features/movies/SingleMovie";
import Profile from "../../features/people/SinglePerson";
import SearchBar from "../SearchBar";

const Navigation = () => {

  const navigate = useNavigate();

  const cleaningHandler = (url) => {
    navigate(url);
  };

  return (
    <>
      <NavigationBoxStyled>
        <NavBoxFrame>
          <NavigationWrapper>
            <NavBoxLine>
              <Stroke />
              <NavH1 to="/movies"
                onClick={() => cleaningHandler("/movies")}>movies browser</NavH1>
              <NavLinks>
                <NavLi>
                  <StyledNavLink
                    to="/movies"
                    onClick={() => cleaningHandler("/movies")}
                  >movies
                  </StyledNavLink>
                </NavLi>
                <NavLi>
                  <StyledNavLink
                    to="/people"
                    onClick={() => cleaningHandler("/people")}
                  >
                    people
                  </StyledNavLink>
                </NavLi>
              </NavLinks>
            </NavBoxLine>
            <NavWrapperInput>
              <NavIconInput>
                <Elipse />
              </NavIconInput>
              <SearchBar />
            </NavWrapperInput>
          </NavigationWrapper>
        </NavBoxFrame>
      </NavigationBoxStyled>
      <Routes>
        <Route path="/movies" element={<Movies />} />
        <Route path="/people" element={<People />} />
        <Route
          path="/movies/:id"
          element={<SingleMovie />}
        />
        <Route
          path="/people/:id"
          element={<Profile />}
        />
        <Route path="*" element={<Navigate replace to="/movies" />} />
      </Routes>
    </>
  );
};

export default Navigation;
