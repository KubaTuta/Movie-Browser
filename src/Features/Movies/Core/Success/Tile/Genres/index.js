import { GenresWrapper, GenreWrapper, Genre } from "./styled";

const Genres = ({ genres, genreIds }) => {

  return (
    <GenresWrapper>
      {genreIds && genreIds.map((genreId, id) => {
        const genreName = genres.find(genre => genreId === genre.id);
        return (
          <GenreWrapper key={id}>
            <Genre>
              {genreName ? genreName.name : null}
            </Genre>
          </GenreWrapper>
        )
      }
      )}
    </GenresWrapper>
  )
};

export default Genres;