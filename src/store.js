import createSagaMiddleware from '@redux-saga/core';
import { configureStore } from '@reduxjs/toolkit';
import rootSaga from './rootSaga';
import popularMoviesReducer from './Features/Movies/popularMoviesSlice';
import popularPeopleReducer from './Features/People/popularPeopleSlice';
import genresReducer from "./Features/genresSlice";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    popularMovies: popularMoviesReducer,
    popularPeople: popularPeopleReducer,
    genres: genresReducer,
  },
  middleware: [sagaMiddleware]
});

sagaMiddleware.run(rootSaga);

export default store;