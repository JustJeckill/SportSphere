import { configureStore } from '@reduxjs/toolkit';

import { counterReducer } from "./reducers/counterReducer";

const store = configureStore({ reducer: counterReducer })

console.log(store.getState());
