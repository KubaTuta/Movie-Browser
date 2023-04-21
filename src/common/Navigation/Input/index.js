import { useRef } from "react";
import { NavInput } from "../styled";
import { fetchSearchPending } from "./Search/searchSlice";
import { useDispatch } from "react-redux";

const Input = ({query, setQuery}) => {

  const input = useRef(null);
  
  const dispatch = useDispatch();

  const queryHandler = (event) => {
    const newQuery = event.target.value;
    setQuery({search: newQuery});
    dispatch(fetchSearchPending({page: 1, query: newQuery}))
  };

  return (
    <>
      <NavInput
        value={query.get("search") || ""}
        type="text"
        placeholder="Search for movies..."
        ref={input}
        onChange={(event) => queryHandler(event)}
      />
    </>
  )
};

export default Input;