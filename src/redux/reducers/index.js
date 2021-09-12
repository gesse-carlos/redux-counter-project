import { createSlice } from "@reduxjs/toolkit";

const initialCounterState = {
  showCounter: true,
  counter: 0,
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState: initialCounterState,
  reducers: {
    increment(state) { state.counter++ },
    decrement(state) { state.counter-- },
    increase(state, action) { state.counter += action.payload },
    clear(state) { state.counter = 0 },
    toggleCounter(state) { state.showCounter = !state.showCounter },
  }
});

const initialAuthState = {
  isAuthenticated: false,
}

export const authSlice = createSlice({
  name: 'authentication',
  initialState: initialAuthState,
  reducers: {
    login(state) { state.isAuthenticated = true },
    logout(state) { state.isAuthenticated = false },
  },
});

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;
