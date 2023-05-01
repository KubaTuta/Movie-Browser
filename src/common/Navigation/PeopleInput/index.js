import { useEffect, useRef } from "react";
import { NavInput } from "../styled";
import { useDispatch, useSelector } from "react-redux";
import { fetchSearchPeoplePending, selectSearchedPeoplePages } from "./Search/searchPeopleSlice";

const PeopleInput = ({ query, setQuery }) => {

  const input = useRef(null);
  const page = useSelector(selectSearchedPeoplePages);
  const dispatch = useDispatch();

  const queryHandler = (event) => {
    const newQuery = event.target.value;
    setQuery(!!newQuery ? { search: newQuery, page: page } : "");
    dispatch(fetchSearchPeoplePending({ page: 1, query: newQuery }))
  };

  useEffect(() => {
    setQuery(!!query.get("search") ? { search: query.get("search"), page: page } : {});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page])

  return (
    <NavInput
      value={query.get("search") || ""}
      type="text"
      placeholder="Search for people..."
      ref={input}
      onChange={(event) => queryHandler(event)}
    />
  )
};

export default PeopleInput;