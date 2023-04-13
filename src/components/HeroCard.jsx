import HeroImg from "./HeroImg";

const HeroCard = ({ data }) => {
  return (
    <div className="max-w-xs flex flex-col gap-3 bg-blue-300 border border-blue-200 rounded-lg shadow dark:bg-blue-800 dark:border-blue-700 hover:bg-blue-200">
      <div className="">
        <HeroImg urlImg={data.image.url} />
      </div>
      <div className="p-3">
        <div className="text-gray-900 font-bold text-2xl mb-2">
          {data.name}
        </div>

        <div className="grid grid-cols-2 text-gray-700 self-center">
          <div>
            <h1 className="font-semibold  text-base">Appearance</h1>
            <p className="text-sm">Gender: {data.appearance.gender}</p>
            <p className="text-sm">Race: {data.appearance.race}</p>
            <p className="text-sm">Height: {`${data.appearance.height[0]} or ${data.appearance.height[1]}`}</p>
            <p className="text-sm">Weight: {`${data.appearance.weight[0]} or ${data.appearance.weight[1]}`}</p>
            <p className="text-sm">Eye Color: {data.appearance['eye-color']}</p>
            <p className="text-sm">Hair Color: {data.appearance['hair-color']}</p>
          </div>
          <div>
            <h1 className="font-semibold text-base">Powerstats</h1>
            <p className="text-sm">Intelligence: {data.powerstats.intelligence}</p>
            <p className="text-sm">Strength: {data.powerstats.strength}</p>
            <p className="text-sm">Speed: {data.powerstats.speed}</p>
            <p className="text-sm">Durability: {data.powerstats.durability}</p>
            <p className="text-sm">Power: {data.powerstats.power}</p>
            <p className="text-sm">Combat: {data.powerstats.combat}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroCard;
