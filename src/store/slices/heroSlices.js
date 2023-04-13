import { createSlice } from "@reduxjs/toolkit";
import {
  getHeroesName,
  getHeroeForA,
  getHeroeFiltroIntelligence,
  getHeroeFiltroStrength,
  getHeroeFiltroSpeed,
  getHeroeFiltroDurability,
  getHeroeFiltroPower,
  getHeroeFiltroCombat,
  getHeroeFiltroGenderMale,
  getHeroeFiltroGenderFemale,
  getHeroeFiltroHeight,
  getHeroeFiltroRace,
  getHeroeFiltroWeight,
  getHeroeFiltroEyeColor,
  getHeroeFiltroHairColor
} from "../thunks/heroThunks";

const heroSlice = createSlice({
  name: "hero",
  initialState: {
    heroes: [],
    error: "",
    loading: false,
  },
  extraReducers: {
    [getHeroesName.fulfilled]: (state, action) => {
      state.loading = false;
      state.heroes = action.payload;
    },
    [getHeroeForA.fulfilled]: (state, action) => {
      state.loading = false;
      state.heroes = action.payload;
    },
    [getHeroeFiltroIntelligence.fulfilled]: (state, action) => {
      state.loading = false;
      state.heroes = action.payload;
    },
    [getHeroeFiltroStrength.fulfilled]: (state, action) => {
      state.loading = false;
      state.heroes = action.payload;
    },
    [getHeroeFiltroSpeed.fulfilled]: (state, action) => {
      state.loading = false;
      state.heroes = action.payload;
    },
    [getHeroeFiltroDurability.fulfilled]: (state, action) => {
      state.loading = false;
      state.heroes = action.payload;
    },
    [getHeroeFiltroPower.fulfilled]: (state, action) => {
      state.loading = false;
      state.heroes = action.payload;
    },
    [getHeroeFiltroCombat.fulfilled]: (state, action) => {
      state.loading = false;
      state.heroes = action.payload;
    },
    [getHeroeFiltroGenderMale.fulfilled]: (state, action) => {
      state.loading = false;
      state.heroes = action.payload;
    },
    [getHeroeFiltroGenderFemale.fulfilled]: (state, action) => {
      state.loading = false;
      state.heroes = action.payload;
    },
    [getHeroeFiltroHeight.fulfilled]: (state, action) => {
      state.loading = false;
      state.heroes = action.payload;
    },
    [getHeroeFiltroRace.fulfilled]: (state, action) => {
      state.loading = false;
      state.heroes = action.payload;
    },
    [getHeroeFiltroWeight.fulfilled]: (state, action) => {
      state.loading = false;
      state.heroes = action.payload;
    },
    [getHeroeFiltroEyeColor.fulfilled]: (state, action) => {
      state.loading = false;
      state.heroes = action.payload;
    },
    [getHeroeFiltroHairColor.fulfilled]: (state, action) => {
      state.loading = false;
      state.heroes = action.payload;
    },
  },
});

export default heroSlice.reducer;
