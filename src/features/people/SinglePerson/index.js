import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchCastCrewSuccess, fetchPersonPending } from "./personSlice";
import Core from "./Core";

const SinglePerson = () => {
  
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchPersonPending(id));
    dispatch(fetchCastCrewSuccess(id));
  }, [id, dispatch]);

  return <Core />;
};
export default SinglePerson;
