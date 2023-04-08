import { Route, Routes, Navigate } from "react-router-dom";
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
} from "./styled"

import { ReactComponent as Elipse } from "../../common/img/elipse.svg";
import Movies from "../../Features/Movies/PopularMovies";
import People from "../../Features/People/PopularPeople"
import SingleMovie from "../../Features/Movies/SingleMovie";
import Profile from "../../Features/People/Profile";
import Input from "./Input";
import { useDispatch } from "react-redux";
import { fetchSearchPending } from "./Input/Search/searchSlice";
import { useState } from "react";

const Navigation = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();

  const cleaningHandler = () => {
    dispatch(fetchSearchPending({ page: 1, query: "" }));
    setQuery("");
  };

  return (
    <>
      <NavigationBoxStyled>
        <NavBoxFrame>
          <NavigationWrapper>
            <NavBoxLine>
              <Stroke />
              <NavH1>movies browser</NavH1>
              <NavLinks           >
                <NavLi>
                  <StyledNavLink
                    to="/"
                    onClick={cleaningHandler}
                  >
                    movies
                  </StyledNavLink>
                </NavLi>
                <NavLi>
                  <StyledNavLink
                    to="/people"
                    onClick={cleaningHandler}
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
              <Input query={query} setQuery={setQuery} />
            </NavWrapperInput>
          </NavigationWrapper>
        </NavBoxFrame>

      </NavigationBoxStyled>
      <Routes>
        <Route path="/" element={<Movies />} />
        <Route path="/people" element={<People />} />
        <Route path="/movie/:id" element={<SingleMovie cleaningHandler={cleaningHandler} />} />
        <Route path="/profile/:id" element={<Profile />} />

        <Route path="*" element={<Navigate to="/movies" />} />
      </Routes>
    </>
  )
};

export default Navigation;