import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector, } from "react-redux";
import { fetchCastCrewSuccess, fetchPending } from "./profileSlice";
import { Container } from "../../../common/Container/styled";
import Core from "./Core";
import { fetchGenresPending } from "../../../common/Genres/genresSlice";
import { selectSearchedPeopleQuery } from "../../../common/Navigation/PeopleInput/Search/searchPeopleSlice";
import People from "../PopularPeople";


const ProfilePage = ({ cleaningHandler }) => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const query = useSelector(selectSearchedPeopleQuery)
    ;
  useEffect(() => {
    dispatch(fetchPending(id));
    dispatch(fetchCastCrewSuccess(id));
    cleaningHandler();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, dispatch]);

  useEffect(() => {
    dispatch(fetchGenresPending())
    // eslint-disable-next-line
  }, []);


  return (
    query.length > 0 ?
      <People /> :
      <Container>
        <Core />
      </Container>


  )
}
export default ProfilePage;



