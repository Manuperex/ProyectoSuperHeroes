import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  getHeroeFiltroGenderMale,
  getHeroeFiltroGenderFemale,
  getHeroeFiltroHeight,
  getHeroeFiltroRace,
  getHeroeFiltroWeight,
  getHeroeFiltroEyeColor,
  getHeroeFiltroHairColor,
} from "../store/thunks/heroThunks";

const AppearanceDropdown = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [openMenuGender, setOpenMenuGender] = useState(false);
  const dispatch = useDispatch();
  const filterGenderMale = () => {
    dispatch(getHeroeFiltroGenderMale());
    setOpenMenu(!openMenu);
    setOpenMenuGender(!openMenuGender);
  };
  const filterGenderFemale = () => {
    dispatch(getHeroeFiltroGenderFemale());
    setOpenMenu(!openMenu);
    setOpenMenuGender(!openMenuGender);
  };
  const filterHeight = () => {
    dispatch(getHeroeFiltroHeight());
    if (openMenuGender === true) {
      setOpenMenuGender(!openMenuGender);
    }
    setOpenMenu(!openMenu);
  };
  const filterRace = () => {
    dispatch(getHeroeFiltroRace());
    if (openMenuGender === true) {
      setOpenMenuGender(!openMenuGender);
    }
    setOpenMenu(!openMenu);
  };
  const filterWeight = () => {
    dispatch(getHeroeFiltroWeight());
    if (openMenuGender === true) {
      setOpenMenuGender(!openMenuGender);
    }
    setOpenMenu(!openMenu);
  };
  const filterEyeColor = () => {
    dispatch(getHeroeFiltroEyeColor());
    if (openMenuGender === true) {
      setOpenMenuGender(!openMenuGender);
    }
    setOpenMenu(!openMenu);
  };
  const filterHairColor = () => {
    dispatch(getHeroeFiltroHairColor());
    if (openMenuGender === true) {
      setOpenMenuGender(!openMenuGender);
    }
    setOpenMenu(!openMenu);
  };
  const onMenu = () => {
    setOpenMenu(!openMenu);
    if (openMenuGender === true) {
      setOpenMenuGender(!openMenuGender);
    }
  };
  const onMenuGender = () => setOpenMenuGender(!openMenuGender);
  return (
    <div>
      <div className="flex flex-col">
        <button
          className="ml-2 bg-red-700 text-white px-2 rounded-lg font-semibold"
          onClick={onMenu}
        >
          Appearance
        </button>
        {openMenu && (
          <div className="flex flex-col absolute mt-8 ml-5 pr-3 pl-2 py-2 gap-2 bg-sky-500 rounded-lg">
            <button
              onClick={onMenuGender}
              className=" bg-red-700 text-white px-2 rounded-lg"
            >
              Gender
            </button>
            <button
              className=" bg-red-700 text-white px-2 rounded-lg"
              onClick={filterRace}
            >
              Race
            </button>
            <button
              className=" bg-red-700 text-white px-2 rounded-lg"
              onClick={filterHeight}
            >
              Height
            </button>
            <button
              className=" bg-red-700 text-white px-2 rounded-lg"
              onClick={filterWeight}
            >
              Weight
            </button>
            <button
              className=" bg-red-700 text-white px-2 rounded-lg"
              onClick={filterEyeColor}
            >
              Eye Color
            </button>
            <button
              className=" bg-red-700 text-white px-2 rounded-lg"
              onClick={filterHairColor}
            >
              Hair Color
            </button>
          </div>
        )}
        {openMenuGender && (
          <div
            className="flex flex-col absolute mt-8 -ml-14 py-2 pr-2 pl-2 gap-2 bg-sky-500 rounded-l-lg"
            type="button"
          >
            <button
              className="rounded-lg bg-red-700 text-white px-2"
              onClick={filterGenderMale}
            >
              Male
            </button>
            <button
              className="rounded-lg bg-red-700 text-white px-2"
              onClick={filterGenderFemale}
            >
              Female
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AppearanceDropdown;
