import { useDispatch } from "react-redux";
import { useState } from "react";
import {
  getHeroeForA,
  getHeroeFiltroIntelligence,
  getHeroeFiltroStrength,
  getHeroeFiltroSpeed,
  getHeroeFiltroDurability,
  getHeroeFiltroPower,
  getHeroeFiltroCombat,
} from "../store/thunks/heroThunks";

const Powerstats = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const dispatch = useDispatch();
  const filterAll = () => dispatch(getHeroeForA());
  const filterIntelligence = () => {
    dispatch(getHeroeFiltroIntelligence());
    setOpenMenu(!openMenu);
  };
  const filterStrength = () => {
    dispatch(getHeroeFiltroStrength());
    setOpenMenu(!openMenu);
  };
  const filterSpeed = () => {
    dispatch(getHeroeFiltroSpeed());
    setOpenMenu(!openMenu);
  };
  const filterDurability = () => {
    dispatch(getHeroeFiltroDurability());
    setOpenMenu(!openMenu);
  };
  const filterPower = () => {
    dispatch(getHeroeFiltroPower());
    setOpenMenu(!openMenu);
  };
  const filterCombat = () => {
    dispatch(getHeroeFiltroCombat());
    setOpenMenu(!openMenu);
  };

  const onMenu = () => setOpenMenu(!openMenu);
  return (
    <div>
      <div className="flex flex-row gap-3 max-sm:hidden max-lg:hidden">
        <button
          onClick={filterAll}
          className=" bg-red-700 text-white px-2 rounded-lg font-semibold"
        >
          All Heroes
        </button>
        <button
          onClick={filterIntelligence}
          className=" bg-red-700 text-white px-2 rounded-lg font-semibold"
        >
          Intelligence
        </button>
        <button
          onClick={filterStrength}
          className=" bg-red-700 text-white px-2 rounded-lg font-semibold"
        >
          Strength
        </button>
        <button
          onClick={filterSpeed}
          className=" bg-red-700 text-white px-2 rounded-lg font-semibold"
        >
          Speed
        </button>
        <button
          onClick={filterDurability}
          className=" bg-red-700 text-white px-2 rounded-lg font-semibold"
        >
          Durability
        </button>
        <button
          onClick={filterPower}
          className=" bg-red-700 text-white px-2 rounded-lg font-semibold"
        >
          Power
        </button>
        <button
          onClick={filterCombat}
          className=" bg-red-700 text-white px-2 rounded-lg font-semibold"
        >
          Combat
        </button>
      </div>
      <div className="flex flex-row lg:hidden gap-2 ">
        <button
          onClick={filterAll}
          className=" bg-red-700 text-white px-2 rounded-lg font-semibold"
        >
          All Heroes
        </button>
        <h1
          onClick={onMenu}
          className=" bg-red-700 text-white px-2 rounded-lg font-semibold"
        >
          All Powerstats
        </h1>
        {openMenu && (
          <div className="flex flex-col absolute mt-8 ml-20 max-md:ml-24 max-sm:ml-24 pr-3 pl-2 py-2 gap-2 bg-sky-500 rounded-lg">
            <button
              onClick={filterIntelligence}
              className=" bg-red-700 text-white px-2 rounded-lg"
            >
              Intelligence
            </button>
            <button
              onClick={filterStrength}
              className=" bg-red-700 text-white px-2 rounded-lg"
            >
              Strength
            </button>
            <button
              onClick={filterSpeed}
              className=" bg-red-700 text-white px-2 rounded-lg"
            >
              Speed
            </button>
            <button
              onClick={filterDurability}
              className=" bg-red-700 text-white px-2 rounded-lg"
            >
              Durability
            </button>
            <button
              onClick={filterPower}
              className=" bg-red-700 text-white px-2 rounded-lg"
            >
              Power
            </button>
            <button
              onClick={filterCombat}
              className=" bg-red-700 text-white px-2 rounded-lg"
            >
              Combat
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Powerstats;
