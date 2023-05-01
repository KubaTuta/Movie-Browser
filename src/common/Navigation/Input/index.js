import { useEffect, useRef } from "react";
import { NavInput } from "../styled";
import { fetchSearchPending, selectSearchedPages } from "./Search/searchSlice";
import { useDispatch, useSelector } from "react-redux";

const Input = ({ query, setQuery }) => {

  const input = useRef(null);
  const page = useSelector(selectSearchedPages);
  const dispatch = useDispatch();

  const queryHandler = (event) => {
    const newQuery = event.target.value;
    setQuery(!!newQuery ? { search: newQuery, page: page } : "");
    dispatch(fetchSearchPending({ page: 1, query: newQuery }))
  };

  useEffect(() => {
    setQuery(!!query.get("search") ? { search: query.get("search"), page: page } : {});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page])

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