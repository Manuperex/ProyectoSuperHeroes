import { createAsyncThunk } from "@reduxjs/toolkit";
import * as heroSlice from "../services/servicesHero";


//get hero for name info
export const getHeroesName = createAsyncThunk(
  "hero/getHeroesName",
  async (name, { rejectWithValue }) => {
    try {
      console.log(await heroSlice.getHeroesName(name))
      const response = await heroSlice.getHeroesName(name);
      const resultsData = response.data.results.filter((data) => {
        if (data.biography.alignment === "good") {
          return data;
        }
      });
      console.log(resultsData)
      return resultsData;
    } catch (error) {
      return rejectWithValue(error.message.data);
    }
  }
);

//get heroes for the letter a
export const getHeroeForA = createAsyncThunk(
  "heroes/getHeroeForA",
  async (_, { rejectWithValue }) => {
    try {
      const response = await heroSlice.getHeroeForA();
      const resultsData = response.data.results.filter((data) => {
        if (data.biography.alignment === "good") {
          return data;
        }
      });
      return resultsData;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
// Filter heroes for Powerstats

// Filter heroes for Intelligence
export const getHeroeFiltroIntelligence= createAsyncThunk(
  "heroes/getHeroeFiltroIntelligence",
  async (_, { rejectWithValue }) => {
    try {
      const response = await heroSlice.getHeroeForA();
      const resultsData = response.data.results.filter((data) => 
      data.powerstats.intelligence !== 'null' && data.biography.alignment === "good" 
      );
      const resultsDataFilter = resultsData.sort((a, b) => {      
          if(!isNaN(a.powerstats.intelligence.split(' ')[0]) && !isNaN(b.powerstats.intelligence.split(' ')[0])) {
            return parseInt(a.powerstats.intelligence.split(' ')[0]) - parseInt(b.powerstats.intelligence.split(' ')[0])
        }
        return a.powerstats.intelligence - b.powerstats.intelligence

      })
      return resultsDataFilter;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
// Filter heroes for Strength
export const getHeroeFiltroStrength = createAsyncThunk(
  "heroes/getHeroeFiltroStrength",
  async (_, { rejectWithValue }) => {
    try {
      const response = await heroSlice.getHeroeForA();
      const resultsData = response.data.results.filter((data) => 
      data.powerstats.strength !== 'null' && data.biography.alignment === "good" 
      );
      const resultsDataFilter = resultsData.sort((a, b) => {      
          if(!isNaN(a.powerstats.strength.split(' ')[0]) && !isNaN(b.powerstats.strength.split(' ')[0])) {
            return parseInt(a.powerstats.strength.split(' ')[0]) - parseInt(b.powerstats.strength.split(' ')[0])
        }
        return a.powerstats.strength - b.powerstats.strength

      })
      return resultsDataFilter;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
// Filter heroes for Speed
export const getHeroeFiltroSpeed = createAsyncThunk(
  "heroes/getHeroeFiltroSpeed",
  async (_, { rejectWithValue }) => {
    try {
      const response = await heroSlice.getHeroeForA();
      const resultsData = response.data.results.filter((data) => 
      data.powerstats.speed !== 'null' && data.biography.alignment === "good" 
      );
      const resultsDataFilter = resultsData.sort((a, b) => {      
          if(!isNaN(a.powerstats.speed.split(' ')[0]) && !isNaN(b.powerstats.speed.split(' ')[0])) {
            return parseInt(a.powerstats.speed.split(' ')[0]) - parseInt(b.powerstats.speed.split(' ')[0])
        }
        return a.powerstats.speed - b.powerstats.speed

      })
      return resultsDataFilter;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
// Filter heroes for Durability
export const getHeroeFiltroDurability = createAsyncThunk(
  "heroes/getHeroeFiltroDurability",
  async (_, { rejectWithValue }) => {
    try {
      const response = await heroSlice.getHeroeForA();
      const resultsData = response.data.results.filter((data) => 
      data.powerstats.durability !== 'null' && data.biography.alignment === "good" 
      );
      const resultsDataFilter = resultsData.sort((a, b) => {      
          if(!isNaN(a.powerstats.durability.split(' ')[0]) && !isNaN(b.powerstats.durability.split(' ')[0])) {
            return parseInt(a.powerstats.durability.split(' ')[0]) - parseInt(b.powerstats.durability.split(' ')[0])
        }
        return a.powerstats.durability - b.powerstats.durability

      })
      return resultsDataFilter;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
// Filter heroes for Power
export const getHeroeFiltroPower = createAsyncThunk(
  "heroes/getHeroeFiltroPower",
  async (_, { rejectWithValue }) => {
    try {
      const response = await heroSlice.getHeroeForA();
      const resultsData = response.data.results.filter((data) => 
      data.powerstats.power !== 'null' && data.biography.alignment === "good" 
      );
      const resultsDataFilter = resultsData.sort((a, b) => {      
          if(!isNaN(a.powerstats.power.split(' ')[0]) && !isNaN(b.powerstats.power.split(' ')[0])) {
            return parseInt(a.powerstats.power.split(' ')[0]) - parseInt(b.powerstats.power.split(' ')[0])
        }
        return a.powerstats.power - b.powerstats.power

      })
      return resultsDataFilter;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
// Filter heroes for Combat
export const getHeroeFiltroCombat = createAsyncThunk(
  "heroes/getHeroeFiltroCombat",
  async (_, { rejectWithValue }) => {
    try {
      const response = await heroSlice.getHeroeForA();
      const resultsData = response.data.results.filter((data) => 
      data.powerstats.combat !== 'null' && data.biography.alignment === "good" 
      );
      const resultsDataFilter = resultsData.sort((a, b) => {      
          if(!isNaN(a.powerstats.combat.split(' ')[0]) && !isNaN(b.powerstats.combat.split(' ')[0])) {
            return parseInt(a.powerstats.combat.split(' ')[0]) - parseInt(b.powerstats.combat.split(' ')[0])
        }
        return a.powerstats.combat - b.powerstats.combat

      })
      return resultsDataFilter;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
// Filter heroes for Appearance

// Filter heroes for Gender Male
export const getHeroeFiltroGenderMale = createAsyncThunk(
  "heroes/getHeroeFiltroGenderMale",
  async (_, { rejectWithValue }) => {
    try {
      const response = await heroSlice.getHeroeForA();
      const resultsData = response.data.results.filter((data) => 
      data.appearance.gender !== 'null' && data.appearance.gender === 'Male' && data.biography.alignment === "good" 
      );
      const resultsDataFilter = resultsData.sort((a, b) => {      
          if(!isNaN(a.appearance.gender.split(' ')[0]) && !isNaN(b.appearance.gender.split(' ')[0])) {
            return a.appearance.gender.split(' ')[0] - b.appearance.gender.split(' ')[0]
        }
        return a.appearance.gender - b.appearance.gender

      })
      return resultsDataFilter;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Filter heroes for Gender Female
export const getHeroeFiltroGenderFemale = createAsyncThunk(
  "heroes/getHeroeFiltroGenderFemale",
  async (_, { rejectWithValue }) => {
    try {
      const response = await heroSlice.getHeroeForA();
      const resultsData = response.data.results.filter((data) => 
      data.appearance.gender !== 'null' && data.appearance.gender === 'Female' && data.biography.alignment === "good" 
      );
      const resultsDataFilter = resultsData.sort((a, b) => {      
          if(!isNaN(a.appearance.gender.split(' ')[0]) && !isNaN(b.appearance.gender.split(' ')[0])) {
            return a.appearance.gender.split(' ')[0] - b.appearance.gender.split(' ')[0]
        }
        return a.appearance.gender - b.appearance.gender

      })
      return resultsDataFilter;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Filter heroes for Height
export const getHeroeFiltroHeight = createAsyncThunk(
  "heroes/getHeroeFiltroHeight",
  async (_, { rejectWithValue }) => {
    try {
      const response = await heroSlice.getHeroeForA();
      const resultsData = response.data.results.filter((data) => 
      data.appearance.height[1] !== 'null' && data.biography.alignment === "good" 
      );
      const resultsDataFilter = resultsData.sort((a, b) => { 
        const dataA = parseInt(a.appearance.height[1]) 
        const dataB = parseInt(b.appearance.height[1])
        if(dataA < dataB) {
          return 1;
        }
        if(dataA > dataB) {
          return -1;
        }
        return 0

    })
    console.log(resultsDataFilter)
    return resultsDataFilter;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
}
);

// Filter heroes for Gender Race
export const getHeroeFiltroRace = createAsyncThunk(
  "heroes/getHeroeFiltroRace",
  async (_, { rejectWithValue }) => {
    try {
      const response = await heroSlice.getHeroeForA();
      const resultsData = response.data.results.filter((data) => 
      data.appearance.race !== 'null' && data.biography.alignment === "good" 
      );
      const resultsDataFilter = resultsData.sort((a, b) => {      
        const dataA = a.appearance.race
        const dataB = b.appearance.race 
        if(dataA < dataB) {
          return -1;
        }
        if(dataA > dataB) {
          return 1;
        }
        return 0

      })
      return resultsDataFilter;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Filter heroes for Gender Weight
export const getHeroeFiltroWeight = createAsyncThunk(
  "heroes/getHeroeFiltroHeight",
  async (_, { rejectWithValue }) => {
    try {
      const response = await heroSlice.getHeroeForA();
      const resultsData = response.data.results.filter((data) => 
      data.appearance.weight[1] !== 'null' && data.biography.alignment === "good" 
      );
      const resultsDataFilter = resultsData.sort((a, b) => { 
        const dataA = parseInt(a.appearance.weight[1]) 
        const dataB = parseInt(b.appearance.weight[1])
        if(dataA < dataB) {
          return 1;
        }
        if(dataA > dataB) {
          return -1;
        }
        return 0

    })
    console.log(resultsDataFilter)
    return resultsDataFilter;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
}
);

// Filter heroes for Gender Eye Color
export const getHeroeFiltroEyeColor = createAsyncThunk(
  "heroes/getHeroeFiltroEyeColor",
  async (_, { rejectWithValue }) => {
    try {
      const response = await heroSlice.getHeroeForA();
      const resultsData = response.data.results.filter((data) => 
      data.appearance['eye-color'] !== 'null' && data.appearance['eye-color'] !== '-' && data.biography.alignment === "good" 
      );
      const resultsDataFilter = resultsData.sort((a, b) => {      
        const dataA = a.appearance['eye-color']
        const dataB = b.appearance['eye-color'] 
        if(dataA < dataB) {
          return 1;
        }
        if(dataA > dataB) {
          return -1;
        }
        return 0

      })
      return resultsDataFilter;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Filter heroes for Gender Hair Color
export const getHeroeFiltroHairColor = createAsyncThunk(
  "heroes/getHeroeFiltroHairColor",
  async (_, { rejectWithValue }) => {
    try {
      const response = await heroSlice.getHeroeForA();
      const resultsData = response.data.results.filter((data) => 
      data.appearance['hair-color'] !== 'null' && data.appearance['hair-color'] !== '-' && data.biography.alignment === "good" 
      );
      const resultsDataFilter = resultsData.sort((a, b) => {      
        const dataA = a.appearance['hair-color']
        const dataB = b.appearance['hair-color']
        if(dataA < dataB) {
          return 1;
        }
        if(dataA > dataB) {
          return -1;
        }
        return 0

      })
      return resultsDataFilter;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);