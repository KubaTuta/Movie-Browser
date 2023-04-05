import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector, } from "react-redux";
import { fetchProfilePending } from "./profileSlice";
import { fetchCastCrewPending, selectCastCrew } from "./castCrewSlice";
import { Container } from "../../../common/Container/styled";
import SingleProfile from "./Core/Success/SingleProfile";
import Core from "./Core";


const ProfilePage = () => {
    const { id } = useParams();
    

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchProfilePending(id));
        dispatch(fetchCastCrewPending(id));
    }, [dispatch, id]);


    return (

        <>
            <Container>
                <SingleProfile />

            </Container>
        </>


    )
}
export default ProfilePage;