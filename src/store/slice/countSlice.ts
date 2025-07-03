import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface ICountState {
    count: number;
}

const InitialState: ICountState = {
    count: 0,
}

export const countSlice = createSlice({
    name: "count",
    initialState: InitialState,
    reducers: {
        increment: (state: ICountState) => {
            state.count += 1;
        },
        decrement: (state: ICountState) => {
            state.count -= 1;
        },
        setCount: (state: ICountState, action: PayloadAction<number>) => {
            state.count = action.payload;
        }
    }
})

export const { increment, decrement, setCount } = countSlice.actions;
export default countSlice.reducer;