import { Header } from "./styled";

const HeaderTitle = ({ title, query, results }) => {

  let displayedText;

  if (!!query && query.length > 0) {
    displayedText =
      !!results && results.length !== 0
        ? `Search results for "${query}" (${results})`
        : `Sorry, there are no results for "${query}"`;
  } else {
    displayedText = title;
  }

  return (
    <>
      <Header>{displayedText}</Header>
    </>
  );
};

export default HeaderTitle;
