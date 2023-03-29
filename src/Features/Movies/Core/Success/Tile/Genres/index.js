import { GenersWrapper, GenerWrapper, Genre } from "./styled";

const Genres = ({ genres, genreIds }) => {

  return (
    <GenersWrapper>
      {genreIds && genreIds.map((genreId, id) => {
        const genreName = genres.find(genre => genreId === genre.id);
        return (
          <GenerWrapper key={id}>
            <Genre>
              {genreName ? genreName.name : null}
            </Genre>
          </GenerWrapper>
        )
      }
      )}
    </GenersWrapper>
  )
};

export default Genres;