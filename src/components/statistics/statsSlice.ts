import { createSlice, current, PayloadAction } from "@reduxjs/toolkit";
import { startingStats } from "./startingClassStats";
import checkBounds from "../../functions/checkBounds";
import calculateRunes from "../../functions/calculateRunes";

interface statsState {
    className: string;
    level: number;
    vigor: number;
    mind: number;
    endurance: number;
    strength: number;
    dexterity: number;
    intelligence: number;
    faith: number;
    arcane: number;
    runesToLevel: number;
}

const statsKeys = [
    "vigor", "mind", "endurance"
]



const initialState: statsState = startingStats["hero"];

//TODO refactor increment reducers!!
export const statsSlice = createSlice({
    name: "stats",
    initialState,
    reducers: {
        setVigor: (state: statsState, action: PayloadAction<number>) => {
            const result = state.vigor + action.payload;
            const currentClass = startingStats[state.className];
            if (checkBounds(result, currentClass.vigor)) {
                state.vigor += action.payload;
                state.level += action.payload;
                state.runesToLevel = calculateRunes(state.level);
            }
        },
        setMind: (state: statsState, action: PayloadAction<number>) => {
            const result = state.mind + action.payload;
            const currentClass = startingStats[state.className];
            if (checkBounds(result, currentClass.mind)) {
                state.mind += action.payload;
                state.level += action.payload;
                
                state.runesToLevel = calculateRunes(state.level);
            }
        },
        setEndurance: (state: statsState, action: PayloadAction<number>) => {
            const result = state.endurance + action.payload;
            const currentClass = startingStats[state.className];
            if (checkBounds(result, currentClass.endurance)) {
                state.endurance += action.payload;
                state.level += action.payload;
                
                state.runesToLevel = calculateRunes(state.level);
            }
        },
        setStrength: (state: statsState, action: PayloadAction<number>) => {
            const result = state.strength + action.payload;
            const currentClass = startingStats[state.className];
            if (checkBounds(result, currentClass.strength)) {
                state.strength += action.payload;
                state.level += action.payload;
                
                state.runesToLevel = calculateRunes(state.level);
            }
        },
        setDexterity: (state: statsState, action: PayloadAction<number>) => {
            const result = state.dexterity + action.payload;
            const currentClass = startingStats[state.className];
            if (checkBounds(result, currentClass.dexterity)) {
                state.dexterity += action.payload;
                state.level += action.payload;
                
                state.runesToLevel = calculateRunes(state.level);
            }
        },
        setIntelligence: (state: statsState, action: PayloadAction<number>) => {
            const result = state.intelligence + action.payload;
            const currentClass = startingStats[state.className];
            if (checkBounds(result, currentClass.intelligence)) {
                state.intelligence += action.payload;
                state.level += action.payload;
                
                state.runesToLevel = calculateRunes(state.level);
            }
        },
        setFaith: (state: statsState, action: PayloadAction<number>) => {
            const result = state.faith + action.payload;
            const currentClass = startingStats[state.className];
            if (checkBounds(result, currentClass.faith)) {
                state.faith += action.payload;
                state.level += action.payload;
                
                state.runesToLevel = calculateRunes(state.level);
            }
        },
        setArcane: (state: statsState, action: PayloadAction<number>) => {
            const result = state.arcane + action.payload;
            const currentClass = startingStats[state.className];
            if (checkBounds(result, currentClass.arcane)) {
                state.arcane += action.payload;
                state.level += action.payload;
                
                state.runesToLevel = calculateRunes(state.level);
            }
        },
        setClass: (state: statsState, action: PayloadAction<string>) => {
            const currentClass = startingStats[state.className];
            const newClass = startingStats[action.payload];

            state.className = newClass.className;

            state.level += newClass.level - currentClass.level;
            state.vigor += newClass.vigor - currentClass.vigor;
            state.mind += newClass.mind - currentClass.mind;
            state.endurance += newClass.endurance - currentClass.endurance;
            state.strength += newClass.strength - currentClass.strength;
            state.dexterity += newClass.dexterity - currentClass.dexterity;
            state.intelligence +=
                newClass.intelligence - currentClass.intelligence;
            state.faith += newClass.faith - currentClass.faith;
            state.arcane += newClass.arcane - currentClass.arcane;
            
            state.runesToLevel = calculateRunes(state.level);
        },
        resetStats: (state: statsState) => {
            const currentClass = startingStats[state.className];

            state.level = currentClass.level;
            state.vigor = currentClass.vigor;
            state.mind = currentClass.mind;
            state.endurance = currentClass.endurance;
            state.strength = currentClass.strength;
            state.dexterity = currentClass.dexterity;
            state.intelligence = currentClass.intelligence;
            state.faith = currentClass.faith;
            state.arcane = currentClass.arcane;
            
            state.runesToLevel = calculateRunes(state.level);
        },
    },
});

export const {
    setVigor,
    setMind,
    setEndurance,
    setStrength,
    setDexterity,
    setIntelligence,
    setFaith,
    setArcane,
    setClass,
    resetStats,
} = statsSlice.actions;

export default statsSlice.reducer;
