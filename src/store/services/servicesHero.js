// To consume for the API
import axios from "axios";

// Create the api url main
const API = axios.create({ baseURL: "https://www.superheroapi.com/api.php/10228736561666406" });

//Request to get the question Foro info
export const getHeroesName = (name) => 
    API.get(`/search/${name}`);

//Request to get the question and answers report
export const getHeroeForA = () => 
    API.get("/search/a"); 