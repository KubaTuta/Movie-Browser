import { useRef } from "react";
import { NavInput } from "../styled";
import { fetchSearchPending, selectSearchedPages } from "./Search/searchSlice";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

const Input = ({ query, setQuery }) => {

  const input = useRef(null);
  const location = useLocation();
  console.log(location.search)

  const page = useSelector(selectSearchedPages)

  const dispatch = useDispatch();

  const queryHandler = (event) => {
    const newQuery = event.target.value;
    setQuery(!!newQuery ? { search: newQuery, page: page } : "");
    dispatch(fetchSearchPending({ page: 1, query: newQuery }))
  };

  return (
    <NavInput
      value={query.get("search") || ""}
      type="text"
      placeholder="Search for movies..."
      ref={input}
      onChange={(event) => queryHandler(event)}
    />
  )
};

export default Input;