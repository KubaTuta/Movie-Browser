import createSagaMiddleware from '@redux-saga/core';
import { configureStore } from '@reduxjs/toolkit';
import rootSaga from './rootSaga';
import popularMoviesReducer from './Features/Movies/PopularMovies/popularMoviesSlice';
import popularPeopleReducer from './Features/People/PopularPeople/popularPeopleSlice';
import genresReducer from "./common/Genres/genresSlice";
import movieReducer from './Features/Movies/SingleMovie/movieSlice';
import profileReducer from "./Features/People/Profile/profileSlice"

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    popularMovies: popularMoviesReducer,
    popularPeople: popularPeopleReducer,
    genres: genresReducer,
    movie: movieReducer,
    profileId: profileReducer,
    
  },
  middleware: [sagaMiddleware]
});

sagaMiddleware.run(rootSaga);

export default store;