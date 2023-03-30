import { useSelector } from "react-redux";
import Pagination from "../../../../../common/Pagination";
import { fetchPeoplePending, selectPages } from "../../popularPeopleSlice";
import Tile from "../Success/Tile/index";

const Success = () => {
  const page = useSelector(selectPages);
  return (
    <>
      <Tile />
      <Pagination page={page} fetchApi={fetchPeoplePending} />
    </>
  )
};

export default Success;
