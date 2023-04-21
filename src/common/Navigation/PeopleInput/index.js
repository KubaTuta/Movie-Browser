import { useRef } from "react";
import { NavInput } from "../styled";
import { useDispatch } from "react-redux";
import { fetchSearchPeoplePending } from "./Search/searchPeopleSlice";

const PeopleInput = ({ query, setQuery }) => {

  const input = useRef(null);

  const dispatch = useDispatch();

  const queryHandler = (event) => {
    const newQuery = event.target.value;
    setQuery({ search: newQuery });
    dispatch(fetchSearchPeoplePending({ page: 1, query: newQuery }))
  };

  return (
    <>
      <NavInput
        value={query.get("search") || ""}
        type="text"
        placeholder="Search for people..."
        ref={input}
        onChange={(event) => queryHandler(event)}
      />
    </>
  )
};

export default PeopleInput;