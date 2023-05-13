import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchCastCrewSuccess, fetchPending } from "./profileSlice";
import Core from "./Core";

const ProfilePage = () => {
  
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchPending(id));
    dispatch(fetchCastCrewSuccess(id));
  }, [id, dispatch]);

  return <Core />;
};
export default ProfilePage;
