import { useRef } from "react";
import { useLocation } from "react-router-dom";
import {
  useQueryParameter,
  useReplaceQueryParameter,
} from "../useParameter";
import {NavInput} from "./styled";

const SearchBar = () => {
  const location = useLocation();
  const query = useQueryParameter("search");

  const input = useRef(null);
  const replaceQueryParameter = useReplaceQueryParameter();

  const onInputChange = ({ target }) => {
    replaceQueryParameter([
      {
        key: "search",
        value: target.value.trim() !== "" ? target.value : undefined,
      },
      {
        key: "page",
        value: undefined,
      },
    ]);
  };

  return (
    <NavInput
      value={query || ""}
      type="text"
      placeholder={
        location.pathname.includes("movies")
          ? "Search for movies..."
          : "Search for people..."
      }
      ref={input}
      onChange={onInputChange}
    />
  );
};

export default SearchBar;
