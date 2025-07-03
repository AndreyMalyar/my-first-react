import { configureStore } from "@reduxjs/toolkit";
import CountSlice from "./slice/countSlice.ts";
import CharacterSlice from "./slice/characterSlice.ts";

export const index = configureStore({
    reducer: {
        counter: CountSlice,
        characters: CharacterSlice,
    }
})

export type AppState = ReturnType<typeof index.getState>;
export type AppDispatch = typeof index.dispatch;