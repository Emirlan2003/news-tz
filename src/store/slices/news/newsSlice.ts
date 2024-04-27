import { SliceConstants, SliceName } from "@constants/slices";
import { generateNewsUrl } from "@mappers/index";
import { INews } from "@models/news";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export interface NewsState {
  loading: boolean;
  news: {
    loading: boolean;
    amount: number;
    items: INews[];
  };
}

const initialState: NewsState = {
  loading: false,
  news: {
    loading: false,
    amount: 0,
    items: [],
  },
};

export const getNews = createAsyncThunk(
  SliceConstants.GetCrypt,
  async (url: any, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(generateNewsUrl(url));
      return { items: data.response.results, amount: data.response.total };
    } catch (error: any) {
      return rejectWithValue(error);
    }
  }
);

const newsSlice = createSlice({
  name: SliceName.News,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getNews.pending, (state) => {
      return {
        ...state,
        news: {
          ...state.news,
          loading: true,
        },
      };
    });
    builder.addCase(getNews.fulfilled, (state, { payload }) => {
      return {
        ...state,
        news: {
          loading: false,
          amount: payload.amount,
          items: payload.items,
        },
      };
    });
    builder.addCase(getNews.rejected, (state) => {
      return {
        ...state,
        news: {
          loading: false,
          amount: 0,
          items: [],
        },
      };
    });
  },
});

export default newsSlice.reducer;
