import { useState, useEffect } from "react";
import marvel from "../assets/Marvel.jpg";


const HeroImg = ({ urlImg }) => {
  const [status, setStatus] = useState();


  useEffect(() => {
    const image = new Image();
    image.src = urlImg;
    const statusOK = () => {
      image.addEventListener("load", () => setStatus("success"));
      image.addEventListener("error", () => setStatus("failure"));
    };
    statusOK();
  }, []);
  return (
    <div className="">
      <img className="rounded-t-lg xl:h-96  lg:h-80  md:h-96 sm:h-96 md:w-full lg:w-full sm:w-full " src={ status === "success" ? urlImg : marvel} alt="Es una imagen" />
    </div>
  );
};

export default HeroImg;
