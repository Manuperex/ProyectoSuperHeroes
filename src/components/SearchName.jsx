import { useDispatch } from "react-redux";
import Lupa from "../assets/lupa.png";
import { getHeroesName } from "../store/thunks/heroThunks";
import { useState } from "react";

const SearchName = () => {
  const [nameComplete, setNameComplete] = useState("");
  const dispatch = useDispatch();
  const filterForName = (e) => {
    e.preventDefault();
    dispatch(getHeroesName(nameComplete));
  };
  return (
    <div className="flex font-semibold text-lg">
      <img className="w-7 mx-1 hover:mr-2" src={Lupa} onClick={filterForName} />
      <input
        className="mx-1 w-24 hover:ml-2 bg-blue-500 text-white placeholder:text-blue-300"
        type="text"
        placeholder="Search"
        value={nameComplete}
        onChange={(e) => setNameComplete(e.target.value)}
      />
    </div>
  );
};

export default SearchName;
