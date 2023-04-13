import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getHeroeForA } from "../store/thunks/heroThunks";
import HeroCard from "./HeroCard";
import SearchName from "./SearchName";
import Powerstats from "./Powerstats";
import AppearanceDropdown from "./AppearanceDropdown";

const HeroesList = () => {
  const { heroes } = useSelector((state) => ({
    ...state.hero,
  }));

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getHeroeForA());
  }, [dispatch]);

  return (
    <div className="flex flex-col  items-center">
      <div className="flex flex-row flex-wrap items-center justify-center gap-1">
        <SearchName />
        <Powerstats />
        <AppearanceDropdown />
      </div>

      <div className="grid  lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2  my-4 lg:mx-14 md:mx-10 sm:mx-4 gap-4 self-center">
        {heroes &&
          heroes.map((data, index) => <HeroCard data={data} key={index} />)}
      </div>
    </div>
  );
};

export default HeroesList;
