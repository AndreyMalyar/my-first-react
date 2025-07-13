import {createSlice, createAsyncThunk, type PayloadAction} from "@reduxjs/toolkit";

interface Character {
    id: number;
    name: string;
    status: string;
    species: string;
    gender: string;
    image: string;
    origin: {
        name: string;
        url: string;
    }
    location: {
        name: string;
        url: string;
    }
    episode: string[];
    created: string;
}

interface ICharacterState {
    characters: Array<{name: string; image: string, id: number}>;
    currentCharacter: Character | null;
    isLoading: boolean;
    isLoadingDetail: boolean; // отдельный лоадер для детального просмотра
    currentPage: number;
    totalPages: number;
    error: string | null;
    inputPage: number;
}

const initialState: ICharacterState = {
    characters: [],
    currentCharacter: null,
    isLoading: false,
    isLoadingDetail: false,
    currentPage: 1,
    totalPages: 0,
    error: null,
    inputPage: 1,
}

export const fetchCharacters = createAsyncThunk(
    'fetchCharacters',
    async (pageNumber: number | undefined = 1, thunkAPI) => {
        try {
            // console.log(thunkAPI.getState())// Доп. логика
            const response = await fetch(`https://rickandmortyapi.com/api/character?page=${pageNumber}`)
            if(!response.ok) {
                throw new Error('Failed to fetch characters.');
            }
            const dataResp = await response.json();
            // Имитация задержки. Убрать в продакшене
            await new Promise(res => {
                setTimeout(() => res(true), 2000)
            })
            return dataResp;
        } catch (error) {
            return thunkAPI.rejectWithValue(error instanceof Error ? error.message : 'Unknown error');
        }
    }
)

// отдельный thunk для получения полной информации о персонаже:
export const fetchCharacterById = createAsyncThunk(
    'fetchCharacterById',
    async (id: number, thunkAPI) => {
        try {
            const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
            if(!response.ok) {
                throw new Error('Failed to fetch character.');
            }
            // Имитация задержки. Убрать в продакшене
            await new Promise(res => {
                setTimeout(() => res(true), 2000)
            })
            return await response.json();
        } catch (error) {
            return thunkAPI.rejectWithValue(error instanceof Error ? error.message : 'Unknown error');
        }
    }
);

export const charactersSlice = createSlice({
    name: "characterSlice",
    initialState: initialState,
    reducers: {
        setCurrentPage: (state, action) => {
            state.currentPage = action.payload;
        },
        clearCurrentCharacter: (state) => {
            state.currentCharacter = null;
        },
        clearError: (state) => {
            state.error = null;
        },
        setInputPage: (state, action: PayloadAction<number>) => {
            state.inputPage = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            // ===== ОБРАБОТКА СПИСКА ПЕРСОНАЖЕЙ =====
            .addCase(fetchCharacters.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(fetchCharacters.fulfilled, (state, action) => {
                state.characters = action.payload.results;
                state.totalPages = action.payload.info.pages;
                state.isLoading = false;
                state.error = null;
            })
            .addCase(fetchCharacters.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload as string;
            })
            // ===== ОБРАБОТКА ДЕТАЛЬНОГО ПЕРСОНАЖА =====
            .addCase(fetchCharacterById.pending, (state) => {
                state.isLoadingDetail = true;
                state.error = null;
            })
            .addCase(fetchCharacterById.fulfilled, (state, action) => {
                state.currentCharacter = action.payload;
                state.isLoadingDetail = false;
                state.error = null;
            })
            .addCase(fetchCharacterById.rejected, (state, action) => {
                state.isLoadingDetail = false;
                state.error = action.payload as string;
             })

    }
})

export const { setCurrentPage, clearCurrentCharacter, clearError, setInputPage } = charactersSlice.actions;
export default charactersSlice.reducer;