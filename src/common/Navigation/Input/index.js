import { useRef } from "react";
import { NavInput } from "./styled";
import { useState } from "react";
import { fetchSearchPending } from "./Search/searchSlice";
import { useDispatch } from "react-redux";

const Input = () => {

  const input = useRef(null);
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();

  const queryHandler = (event) => {
    setQuery(event.target.value);
    dispatch(fetchSearchPending( { page: 1, query: query}))
  };

  return (
    <>
      <NavInput
        value={query}
        type="text"
        placeholder="Search for movies..."
        ref={input}
        onChange={(event) => queryHandler(event)}
      />
    </>
  )
};

export default Input;