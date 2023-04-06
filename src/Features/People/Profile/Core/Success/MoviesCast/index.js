import { useSelector } from "react-redux";
import { MovieData, Poster, PosterWrapper, TextInfoWrapper, TileWrapper } from "../../../../../../common/MovieTile/styled"
import { selectCast, selectCrew } from "../../../profileSlice";
import noPoster from "../../../../../../common/Image/noposter.svg"




const MoviesCast = ({ poster, titlei }) => {
    const cast = useSelector(selectCast);
    const casts = cast.slice(0, 4)
    const profilePicturePath = "https://image.tmdb.org/t/p/w300";

    console.log(casts)
    console.log(cast.map(title => title.id))
    return (
        

            <TileWrapper >
                {casts.map((cast, id) => (
                    <PosterWrapper key={id}>
                        <>
                            {
                                cast.poster_path ?
                                    (
                                        <Poster src={cast.poster_path && `${profilePicturePath}${cast.poster_path}`} alt="" />
                                    ) : (
                                        <Poster src={noPoster} alt="" />
                                    )
                            }
                        </>
                    </PosterWrapper>

                ))}
               
            </TileWrapper>

            
        
    )
}
export default MoviesCast;