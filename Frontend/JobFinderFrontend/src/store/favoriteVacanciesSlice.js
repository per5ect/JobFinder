import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  addToFavoriteVacancies,
  removeFromFavoriteVacancies,
  getUserFavoriteVacancies,
} from "../services/userService";

// Načte seznam oblíbených nabídek uživatele ze serveru
export const fetchFavorites = createAsyncThunk(
  "favorites/fetchFavorites",
  async () => {
    const response = await getUserFavoriteVacancies();
    return response;
  },
);

// Přidá nebo odebere danou nabídku z oblíbených podle aktuálního stavu
export const toggleFavorite = createAsyncThunk(
  "favorites/toggleFavorite",
  async ({ vacancy, isCurrentlyFavorite }) => {
    if (isCurrentlyFavorite) {
      await removeFromFavoriteVacancies(vacancy.id);
      window.location.reload();
      return { vacancyId: vacancy.id, remove: true };
    } else {
      await addToFavoriteVacancies(vacancy.id);
      return { vacancy, remove: false };
    }
  },
);

const favoriteVacanciesSlice = createSlice({
  name: "favorites",
  initialState: {
    items: [],
    isLoaded: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Po úspěšném načtení nahradí celý seznam oblíbených položek
      .addCase(fetchFavorites.fulfilled, (state, action) => {
        state.items = action.payload;
        state.isLoaded = true;
      })
      // Po úspěšné změně buď položku odebere ze seznamu, nebo ji do něj přidá
      .addCase(toggleFavorite.fulfilled, (state, action) => {
        if (action.payload.remove) {
          state.items = state.items.filter(
            (v) => v.id !== action.payload.vacancyId,
          );
        } else {
          state.items.push(action.payload.vacancy);
        }
      })
      .addCase(fetchFavorites.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export default favoriteVacanciesSlice.reducer;
