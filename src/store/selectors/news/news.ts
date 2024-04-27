import { createSelector } from "@reduxjs/toolkit";
import { NewsState } from "@store/slices/news";

type WithNewsState = {
  news: NewsState;
};

export const newsStateSelector = (state: WithNewsState): NewsState =>
  state.news;

export const getLoadingSelector = createSelector(
  newsStateSelector,
  (newsSliceState) => {
    return newsSliceState.loading;
  }
);

export const getNewsSelector = createSelector(
  newsStateSelector,
  (newsSliceState) => {
    return newsSliceState.news;
  }
);
