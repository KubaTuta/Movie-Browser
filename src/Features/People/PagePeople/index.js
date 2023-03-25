import { PosterPeople, WrapperPeople, TileWrapperPeople, NamePeople } from "./styled"
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { selectPeople, fetchPeoplePending } from "../popularPeopleSlice";


const PagePeople = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch((fetchPeoplePending(1)));
  }, [dispatch])

  const people = useSelector(selectPeople);
  console.log(people)
  const posterPath = "https://image.tmdb.org/t/p/w300";
  return (

    <WrapperPeople>
      {people.map(person => (
        <TileWrapperPeople key={person.id} >
          <PosterPeople src={`${posterPath}${person.profile_path}`} alt="" />
          <NamePeople>{person.name}</NamePeople>
        </TileWrapperPeople>
      ))}
    </WrapperPeople>
  );
}
export default PagePeople;