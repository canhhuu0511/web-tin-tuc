import { configureStore } from '@reduxjs/toolkit';
import newsSlice from './redux/slices/newsSlice';

export default configureStore({
  reducer: {
    news: newsSlice,
  },
});
