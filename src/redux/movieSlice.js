import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { fetchMovieInsights } from "../services/movieService"

export const getMovie = createAsyncThunk(
  "movie/getMovie",
  async (id, { rejectWithValue }) => {

    try {

      const data = await fetchMovieInsights(id)

      return data

    } catch (error) {

      return rejectWithValue("Movie not found")

    }

  }
)

const movieSlice = createSlice({

  name: "movie",

  initialState: {
    movie: null,
    reviews: [],
    sentiment: null,
    loading: false,
    error: null
  },

  extraReducers: (builder) => {

    builder

      .addCase(getMovie.pending, (state) => {
        state.loading = true
        state.error = null
      })

      .addCase(getMovie.fulfilled, (state, action) => {
        state.loading = false
        state.movie = action.payload.movie
        state.reviews = action.payload.reviews
        state.sentiment = action.payload.sentiment
      })

      .addCase(getMovie.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })

  }

})

export default movieSlice.reducer