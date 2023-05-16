import createSagaMiddleware from '@redux-saga/core';
import { configureStore } from '@reduxjs/toolkit';
import rootSaga from './rootSaga';
import popularMoviesReducer from './features/movies/PopularMovies/popularMoviesSlice';
import popularPeopleReducer from './features/people/PopularPeople/popularPeopleSlice';
import searchedMoviesReducer from "./common/SearchBar/searchMoviesSlice";
import genresReducer from "./common/Genres/genresSlice";
import singleMovieReducer from './features/movies/SingleMovie/movieSlice';
import personReducer from "./features/people/SinglePerson/personSlice";
import searchedPeopleReducer from "./common/SearchBar/searchPeopleSlice";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    searchPeople: searchedPeopleReducer,
    searchMovie: searchedMoviesReducer,
    popularMovies: popularMoviesReducer,
    popularPeople: popularPeopleReducer,
    genres: genresReducer,
    movie: singleMovieReducer,
    profileId: personReducer,
  },
  middleware: [sagaMiddleware]
});

sagaMiddleware.run(rootSaga);

export default store;