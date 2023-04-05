import { useSelector } from "react-redux"
import { selcetStatus } from "../profileSlice"
import Loading from "../../../../common/Loading";
import ErrorPage from "../../../../common/ErrorPage";
import Success from "./Success";

const Core = () => {
    const status = useSelector(selcetStatus);
    console.log(status)
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