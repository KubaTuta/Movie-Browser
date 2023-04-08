import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, } from "react-redux";
import { fetchCastCrewSuccess,  fetchPending } from "./profileSlice";
import { Container } from "../../../common/Container/styled";
import Core from "./Core";
import { fetchGenresPending } from "../../../common/Genres/genresSlice";


const ProfilePage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPending(id))
    dispatch(fetchCastCrewSuccess(id));
  }, [dispatch, id]);

  useEffect(() => {
    dispatch(fetchGenresPending())
    // eslint-disable-next-line
  }, []);


  return (
    <>
      <Container>
        <Core />
      </Container>
    </>
  )
}
export default ProfilePage;



