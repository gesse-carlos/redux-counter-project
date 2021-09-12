import { configureStore } from "@reduxjs/toolkit";
import { composeWithDevTools } from 'redux-devtools-extension';

import { counterSlice, authSlice } from "../reducers";

const store = configureStore({
  reducer: {
    counterState: counterSlice.reducer,
    authState: authSlice.reducer,
  },
}, composeWithDevTools());

export default store;
