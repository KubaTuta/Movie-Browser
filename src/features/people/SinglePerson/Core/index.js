import { useSelector } from "react-redux"
import { selectStatus } from "../personSlice"
import Loading from "../../../../common/statuses/Loading";
import ErrorPage from "../../../../common/statuses/ErrorPage";
import Success from "./Success";

const Core = () => {
    const status = useSelector(selectStatus);
  
    switch (status) {
        case "pending":
            return <Loading />
        case "success":
            return <Success />
        default: 
            return <ErrorPage />

    }
};
export default Core;