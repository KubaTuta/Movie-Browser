import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchCastCrewSuccess, fetchPersonPending } from "./personSlice";
import Core from "./Core";
import { Container } from "../../../common/Container/styled";

const SinglePerson = () => {

  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchPersonPending(id));
    dispatch(fetchCastCrewSuccess(id));
  }, [id, dispatch]);

  return (
    <Container>
      <Core />
    </Container>
  )
};
export default SinglePerson;
